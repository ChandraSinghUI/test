import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSelect } from "../store/Actions/index";

class HotelsCard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps({some}){
    console.log(some);
    console.log(this.props.adults)
  }

  clicked(data,e){
    var obj={data:data,active:e.target.checked}
    this.props.handlerClick(obj);
  }


  render(){

    console.log(this.props.adults)

  return (
    <div className="content-wrap mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card p-3 mb-2">
            {this.props.adults.checkbox ? (
                <div className="form-check">

              {
                this.props.adults.active ? 
                (
                <input
                type="checkbox"
                className="form-check-input"
                id="roomCheck1"
                checked
                onClick={this.clicked.bind(this,this.props.adults)}
              />
              ) : (
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="roomCheck1"
                  onClick={this.clicked.bind(this,this.props.adults)}
                />
              )
            }                
              </div>
            ) : (
              " "
            )}
            <label>{this.props.adults.name}</label>

            <label>Adults (18+)</label>
            {
              this.props.adults.active ? (
                <select>
                {[...Array(2)].map((e, i) => {
                  return <option selected={this.props.adults.adult == i+1} sel key={i}>{i+1} </option>;
                })}
              </select>
              ) : (
                <select disabled>
                {[...Array(2)].map((e, i) => {
                  return <option selected={this.props.adults.adult == i+1} key={i}>{i+1} </option>;
                })}
              </select>
              )
            }

            <label>Children (0 - 17)</label>

            {
              this.props.adults.active ? (
                <select>
                {[...Array(2)].map((e, i) => {
                  return <option selected={this.props.adults.children} key={i}>{i} </option>;
                })}
              </select>
              ) : (
                <select disabled>
                {[...Array(2)].map((e, i) => {
                  return <option selected={this.props.adults.children} key={i}>{i} </option>;
                })}
              </select>
              )
            }


          </div>
        </div>
      </div>
    </div>
  );
      }
};


const mapStateToProps = state => {
  console.log(state);
  return {
    adult: state.data
  };
};

export default connect(
  mapStateToProps
)(HotelsCard);



//export default HotelsCard;
