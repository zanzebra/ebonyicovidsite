import React from "react";
import ChartComponent from "./ChartComp";
import Select from "./Select";
import axios from "axios";

class NigeriaGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      monthsLookup: [],
      monthSlugValue: "",
    };
  }
  componentDidMount() {
    axios.get("https://ebonyicovidsite.ew.r.appspot.com/nigeria/month").then((res) => {
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
        <ChartComponent
          slugValue={this.state.monthSlugValue}
          region="nigeria"
        />
      </div>
    );
  }
}
export default NigeriaGraph;
