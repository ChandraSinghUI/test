import React, { Component } from "react";
import CheckingCard from "../components/checkingcards";
import { connect } from "react-redux";

import { toggleSelect, saveData } from "../store/Actions/index";
class HotelsContainer extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef()
  }

  onClick=() =>{
    this.child.current.getAlert();
  }
  

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
                  setClick={click => this.clickChild = click}
                  sendData={this.props.saveData}
                />
              );
            })}
          </div>
          <div className="col-md-12">
            <button clickHandler={this.submitdata} onClick={() => this.clickChild()} className="btn btn-dark mt-4"> Submit </button>
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
    isSelectDisabled: (obj) => dispatch(toggleSelect(obj)),
    saveData: (obj) => dispatch(saveData(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsContainer);
