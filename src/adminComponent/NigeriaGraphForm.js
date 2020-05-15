import React, { Component } from "react";
import AdminChartComponent from "./AdminChartComponent";
import AdminSelect from "./AdminSelect";
import axios from "axios";

class NigeriaGraphForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      monthsLookup: [],
      monthSlugValue: "",
      month: null,
      confirmedcases: "",
      recoveries: "",
      deaths: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://ebonyicovidsite.ew.r.appspot.com/nigeria/month")
      .then((res) => {
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
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSelectChange = (e) => {
    this.setState({
      month: e.target.value,
    });
    console.log(this.state.month);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { month, confirmedcases, recoveries, deaths } = this.state;
    axios
      .post("https://ebonyicovidsite.ew.r.appspot.com/nigeria/", {
        month: month,
        confirmed_cases: confirmedcases,
        recoveries: recoveries,
        deaths: deaths,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error.message));
  };
  render() {
    return (
      <div className="tasks-wrapper">
        <div className="graph-body">
          <AdminSelect
            monthsData={this.state.monthsLookup}
            onValueCreate={this.createValue}
          />
          <AdminChartComponent
            slugValue={this.state.monthSlugValue}
            region="nigeria"
          />
        </div>
        <div className="graph-form">
          <form className="form-list2" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="select2">
              <select onChange={this.handleSelectChange} placeholder="Month">
                <option>Select a Month</option>
                {this.state.monthsLookup.map(function (data, index) {
                  return (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <input
              type="number"
              name="confirmedcases"
              className="input-item"
              placeholder="Cases"
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="recoveries"
              className="input-item"
              placeholder="Recoveries"
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="deaths"
              className="input-item"
              placeholder="Deaths"
              onChange={this.handleChange}
            />
            <div className="button">
              <button type="submit" className="form-button">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default NigeriaGraphForm;
