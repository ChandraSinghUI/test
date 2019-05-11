import React, { Component } from "react";
import CheckingCard from "../components/checkingcards";
import { connect } from "react-redux";

import { toggleSelect } from "../store/Actions/index";
class HotelsContainer extends Component {
  constructor(props) {
    super(props);
  }



  // handlerCheckbox(value, updatevalue, key) {
  //   console.log(this.props);
  //   /* this.props.adult.map(data => {
  //     debugger;
  //     if (data.id === state) {
  //       data.active === key;
  //     }
  //   }) */
  // }
  render() {
    console.log("abcgh", this.props.adult);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
          
            {this.props.adult.map(adult => {
              return (
                <CheckingCard
                  key={adult.id}
                  adults={adult}
                  data1 = {this.props.adult}
                  handlerClick={this.props.isSelectDisabled}
                />
              );
            })}
          </div>
          <div className="col-md-12">
            <button className="btn btn-dark mt-4"> Submit </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    adult: state.data
  };
};
const mapDispatchToProps = dispatch => {
//  var obj={data:obj,key:key}
  return {
    isSelectDisabled: (obj) => dispatch(toggleSelect(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsContainer);
