import React, { Component } from 'react'
import Four from '../Images/shakila banu.jpg'
import './Front.css'

export default class Page3 extends Component {
  render() {
    return (
      <>
      <div class="rightside">
<div class="header">
    <div class="imgtext">
         <div class="userimg">
                    <img src={Four} alt="" class="cover"/>
                </div>
        <h4>Shakila Banu  <br/><span>Last Seen Yesterday 9.24pm</span></h4>
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
