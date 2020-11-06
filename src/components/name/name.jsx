import React from 'react';
import { Component } from 'react';

class WebTitle extends Component{
  render(){
    return (
      this.props.name.map((item,index)=>{
        return <code key={index}>{item}</code>
      })
    )
  }
  componentDidMount=()=>{
    // console.log(this.props)
  }
}
export default WebTitle;