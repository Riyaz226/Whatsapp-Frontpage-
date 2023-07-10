import React, { Component } from 'react'
import Seven from '../Images/transfer.jfif'
import './Front.css'

export default class Transfer extends Component {
  render() {
    return (
     <>
       <div class="rightside">
  <img src={Seven} alt="" class="cover2"/>
  <div class="write">
      <h2>Keep Your Phone Connected</h2>
    <h3>WhatsApp connects to your phone to sync messages.To reduce <span >data usage,connect your phone to Wi-Fi.</span></h3>
  </div>
</div> 
     </>  
    )
  }
}
