import React from "react"
import { Component } from "react"
import './move.less'


class Move extends Component{
  constructor(props){
    super(props);
    this.state = {
      left:'',
      top:'',
    }
  }
  render(){
    return (
      <div className="moveBox">
        <img id="treeImg" src={require("@/assets/images/tree.png")} alt=""/>
      </div>
    )
  }
}

export default Move;
