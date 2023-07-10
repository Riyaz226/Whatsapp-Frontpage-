import React, { Component } from 'react'
import Two from '../Images/Akbar.jpg'
import './Front.css'

function add(){
  var val=document.getElementById("val").value;
  var li=document.createElement('li');
  var txtnode=document.createTextNode(val);
  li.appendChild(txtnode);
  document.getElementById('first').appendChild(li);
  }

export default class Home extends Component {
  render() {
    return (
      <>
      
      <div class="rightside">
<div class="header">
    <div class="imgtext">
              <div class="userimg">
                    <img src={Two} alt="" class="cover"/>
                </div>
        <h4>Akbar Bae KM <br/><span>Online</span></h4>
    </div>
    <div class="nav_icons"><i>&#166;</i>
    <ul class="chatbox-message-dropdown-menu">
     <li>
       <a href="#">New Group</a>
     </li>
     <li>
       <a href="#">New broadcast</a>
     </li>
     <li>
       <a href="#">Linked Device</a>
     </li>
     <li>
       <a href="#">Starred Device</a>
     </li>
     <li>
       <a href="#" onclick="remove()" >Clear Chat</a>
     </li>
     <li>
       <a href="#">Settings</a>
     </li>
     
   </ul>
    </div> 
</div>

{/* <!--Chat-Box--> */}
  <div id="first" class="chatbox">

</div>
     
<div class="chat_input">
  <ul class="nav_icons2"><i>&#8284;</i></ul>
<input type="text" placeholder="Type a message" id="val"/>
{/* <ul class="nav_icons2" >
  <i >&#187;</i>
  </ul> */}
  <button onclick="add()">Append</button>
</div>

</div> 

      </>

    )
  }
}
