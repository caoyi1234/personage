import React from 'react';
import { Component } from 'react';
import './index.less'
import { parseTime } from '../../utils/time'
import WebTitle from '../../components/name/name'
import Move from '../../components/move/move'
import Sun from '../../components/animation/start'
import Shows from '../../components/show/showItem'



class info extends Component{
  constructor(props){
    super(props);
    this.state = {
      newTime:'',
      title:['LIGHT','GRAY'],
      showInfos:[{
        title:'123',
        content:'2132454'
      },{
        title:'123',
        content:'2132454'
      },{
        title:'123',
        content:'2132454'
      }]
    }
  }
  render(){
    return (
      <div className='pages'>
        <Sun angle={this.state.newTime}/>
        <Move/>
        <div className="header">
          <h1><code>NOW TIME:</code><tt>{this.state.newTime}</tt></h1>
          <div>
            <code><WebTitle name={this.state.title}/></code>
          </div>
        </div>
        <div className="container">
          <div className="route">
          </div>
          <div className="showInfo">
            <Shows/>
            <Shows/>
          </div>
        </div>
        <footer>
            <h3>react DOM</h3>
        </footer>
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