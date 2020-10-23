import React from 'react';
import { Component } from 'react';
import './index.less'
import { parseTime } from '../../utils/time'
import WebTitle from '../../components/name/name'



class info extends Component{
  constructor(props){
    super(props);
    this.state = {
      newTime:'',
      title:'LEARN',
    }
  }
  render(){
    return (
      <div className="info">
        <h1><code>NOW TIME:</code><tt>{this.state.newTime}</tt></h1>
        <h1><code><WebTitle name={this.state.title}/></code></h1>
      </div>
    )
  }
  componentDidMount=()=>{
    let that = this;
    function foo(){
      that.setState({
        newTime:parseTime(new Date()),
      })
      setTimeout(foo, 1000);
    }
    foo();
  }
  componentWillUnmount=()=>{
    for(var i = 1; i < 1000; i++) {
      clearTimeout(i);
    }
  }
}
export default info;