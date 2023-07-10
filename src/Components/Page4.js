import React, { Component } from 'react'
import Five from '../Images/rehana.jpg'
import './Front.css'

export default class Page4 extends Component {
  render() {
    return (
        <>
        <div class="rightside">
  <div class="header">
      <div class="imgtext">
           <div class="userimg">
                      <img src={Five} alt="" class="cover"/>
                  </div>
          <h4>Rehana  <br/><span>Last Seen Yesterday 10.24pm</span></h4>
      </div>
      <ul class="nav_icons"><i>&#166;</i></ul> 
      
  </div>
  
  {/* <!--Chat-Box--> */}
    <div id="first" class="chatbox">
  </div>
       
  <div class="chat_input">
  <ul class="nav_icons2"><i>&#8284;</i></ul>
<input type="text" placeholder="Type a message" id="val"/>
<ul class="nav_icons2"><i>&#187;</i></ul>
  </div>
  
  </div> 
  
        </>
    )
  }
}
