import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

class AdminChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: "",
      currentMonth: "april-2019",
      daysData: [],
      confirmed_cases: [],
      recoveries: [],
      deaths: [],
      data: {},
      chartData: {
        labels: [],
        datasets: [],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: [
          {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        ],
      },
    };
  }
  componentDidMount() {
    if (this.props.slugValue === "") {
      axios
        .get(
          `https://ebonyicovidsite.ew.r.appspot.com/${this.props.region}/month/may-2020`
        )
        .then((res) => {
          this.setState({ data: res.data });
          const data = this.state.data;
          const confirmed_overall_data = [];
          const DaysArray = Object.values(data.days);
          DaysArray.forEach((e) => {
            confirmed_overall_data.push(e);
          });
          this.setState({ daysData: confirmed_overall_data });
          this.renderConfirmedCases();
        });
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.slugValue !== state.selectedMonth) {
      return {
        selectedMonth: props.slugValue,
      };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.slugValue !== prevProps.slugValue) {
      this.getData();
    }
  }
  getData = () => {
    axios
      .get(
        `https://ebonyicovidsite.ew.r.appspot.com/${this.props.region}/month/${this.state.selectedMonth}`
      )
      .then((res) => {
        this.setState({ data: res.data });
        this.formatData();
      });
  };
  formatData = () => {
    const data = this.state.data;
    const confirmed_overall_data = [];
    const DaysArray = Object.values(data.days);
    DaysArray.forEach((e) => {
      confirmed_overall_data.push(e);
    });
    this.setState({ daysData: confirmed_overall_data });
    this.renderConfirmedCases();
  };
  renderConfirmedCases = () => {
    const data = this.state.daysData;
    const confirmed_cases = [];
    const recoveries = [];
    const deaths = [];
    data.forEach((e) => {
      confirmed_cases.push(e.confirmed_cases);
      recoveries.push(e.recoveries);
      deaths.push(e.deaths);
    });
    this.setState({ confirmed_cases: confirmed_cases });
    this.setState({ recoveries: recoveries });
    this.setState({ deaths: deaths });
    const labels = [];
    for (let i = 0; i < data.length; i++) {
      if (i === 0) {
        labels.push((i + 1).toString() + "st");
      } else if (i === 1) {
        labels.push((i + 1).toString() + "nd");
      } else if (i === 2) {
        labels.push((i + 1).toString() + "rd");
      } else {
        labels.push((i + 1).toString() + "th");
      }
    }
    const datasets = [
      {
        label: "Confirmed Cases",
        data: this.state.confirmed_cases,
        borderColor: "yellow",
        backgroundColor: "yellow",
        borderWidth: 2,
        pointBorderColor: false,
        fill: false,
        lineTension: 0.4,
      },
      {
        label: "Recoveries",
        data: this.state.recoveries,
        borderColor: "green",
        backgroundColor: "green",
        borderWidth: 2,
        pointBorderColor: false,
        fill: false,
        lineTension: 0.4,
      },
      {
        label: "Deaths",
        data: this.state.deaths,
        borderColor: "red",
        backgroundColor: "red",
        borderWidth: 2,
        pointBorderColor: false,
        fill: false,
        lineTension: 0.4,
      },
    ];
    this.setState((prevState) => ({
      chartData: {
        ...prevState.chartData,
        datasets: datasets,
        labels: labels,
      },
    }));
  };
  render() {
    return (
      <div>
        <div id="container">
          <div id="sideMenu">
            <ul className="menu">
              <li>
                <span className="cases">
                  <span className="cases-data">1072</span>
                </span>
                <span>Cases</span>
              </li>
              <li>
                <span className="recoveries">
                  <span className="cases-data">33</span>
                </span>
                <span>Recoveries</span>
              </li>
              <li>
                <span className="deaths">
                  <span className="cases-data">4</span>
                </span>
                <span>Deaths</span>
              </li>
            </ul>
          </div>
          <div id="content">
            <section className="charts">
              <div className="container-fluid">
                <div className="chart-container">
                  <Line
                    className="linechart"
                    data={this.state.chartData}
                    options={this.state.options}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminChartComponent;
