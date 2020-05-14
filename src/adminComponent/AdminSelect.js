import React from "react";

class Select extends React.Component {
  getMonthValue = (e) => {
    const value = e.target.value;
    this.props.onValueCreate(value);
  };
  render() {
    return (
      <div class="select">
        <select onChange={this.getMonthValue}>
          {this.props.monthsData.map(function (data, index) {
            return (
              <option key={data.id} value={data.slug}>
                {data.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Select;
