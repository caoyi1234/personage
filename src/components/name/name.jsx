import React from 'react';
import { Component } from 'react';

class WebTitle extends Component{
  render(){
    return (
      <div>{this.props.name}</div>
    )
  }
  componentDidMount=()=>{
    console.log(this.props)
  }
}
export default WebTitle;