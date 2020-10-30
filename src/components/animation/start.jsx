import React from "react"
import { Component } from "react"
import './start.less'

class Sun extends Component{
  constructor(props){
    super(props);
    this.state = {
      screenWidth:'',
      box:{
        left:'-9vw',
        top:'30vh',
      }
    }
  }
  render(){
    return (
      <img className="sunImg" style={this.state.box} src={require("@/assets/images/sun.png")} alt=""/>
    )
  }
  getLeft(){
    // this.props.angle.getFullHours();
  }
  componentWillReceiveProps=()=>{
    this.getLeft()
    if(!this.props.angle) return;
    let time = this.props.angle.split(' ')[1].split(':');
    if(Number(time[0])<6 || Number(time[0])>=18) {
      this.setState({
        box:{
          left:'-10vw',
          top:'-10vh',
        }
      })
      return;
    };
    let seconds = (time[0])*3600+Number(time[1])*60+Number(time[2]);
    let ratio = Number(seconds-21600)/43200
    let left = Number((ratio*80).toFixed(2))+10;
    let top = (ratio*60).toFixed(2);
    if(time[0]<12){
      top = 40-Number(top)
    }else{
      top = Number(top)-20
    }
    this.setState({
      box:{
        left:left+'vw',
        top:top+'vh',
      }
    })
  }
}

export default Sun;