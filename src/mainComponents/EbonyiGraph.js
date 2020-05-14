import React from "react";
import ChartComponent from "./ChartComp";
import Select from "./Select";
import axios from "axios";

class EbonyiGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      monthsLookup: [],
      monthSlugValue: "",
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/ebonyi/month").then((res) => {
      this.setState({ data: res.data });
      let monthData = [];
      this.state.data.map((e) => {
        monthData = monthData.concat({
          id: e.id,
          slug: e.slug,
          name: e.name_of_month,
        });
      });
      this.setState({ monthsLookup: monthData });
    });
    return this.state.monthsLookup;
  }
  createValue = (value) => {
    const v = value;
    this.setState({
      monthSlugValue: v,
    });
  };
  render() {
    return (
      <div className="graph-body">
        <Select
          monthsData={this.state.monthsLookup}
          onValueCreate={this.createValue}
        />
        <ChartComponent slugValue={this.state.monthSlugValue} region="ebonyi" />
      </div>
    );
  }
}
export default EbonyiGraph;
