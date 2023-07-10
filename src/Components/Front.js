import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import One from '../Images/makka.jpg'
import Two from '../Images/Akbar.jpg'
import Three from '../Images/abba.jpg'
import Four from '../Images/shakila banu.jpg'
import Five from '../Images/rehana.jpg'
import Six from '../Images/cute-baby-10.jpg'
import './Front.css'

export default class Front extends Component {
  render() {
    return (

  <>
  <div class="container"> 
       <div class="leftside">
       {/* <!--header-->  */}
        <div class="header">
           <div class="userimg">
            <img src={One} alt="makka" class="cover"/>
           </div>

           <ul class="nav_icons">
            <i>&#64;</i>
          
           </ul>
        </div>
        {/* <!--search--> */}
        <div class="search_chat">
            <div>
                <input type="text" placeholder="Search or start new chat"/>
               
            </div>
        </div>
        {/* <!--Chat List--> */}
        <div class="chatlist" >
             <div class="block active">
                <div class="imgbox">
                    <img src={Two} class="cover" alt="akbar bae"/>
                </div>
                <div class="details">
                    <div class="listhead">
                    <Link to="/page1"><h4>Akbar Bae.KM</h4></Link>  
                      <p class="time">5:00</p>                    
                    </div>
                    <div class="message_p">
                     <p>#motivate #your_self #tomake #sucess</p>  
                     <b>3</b>
                     </div>
                 </div>
             </div>
    <div class="block unread">
        <div class="imgbox">
            <img src={Three} class="cover" alt="Abba"/>
        </div>
        <div class="details">
            <div class="listhead">
            <Link to="/page2"><h4>Abba</h4></Link> 
                   <p class="time">15:30</p>                    
            </div>
            <div class="message_p">
                   <p>I Love Dad?</p>  
                   <b>2</b>
     </div>
</div>
</div>
 <div class="block">
    <div class="imgbox">
        <img src={Four} class="cover" alt="Amma"/>
    </div>
    <div class="details">
        <div class="listhead">
        <Link to="/page3"><h4>Shakila Bell.S</h4></Link> 
               <p class="time">8:30</p>                    
        </div>
        <div class="message_p">
               <p>Very PowerFull</p>  
 </div>
</div>
</div>
<div class="block">
    <div class="imgbox">
        <img src={Five} class="cover" alt="sate"/>
    </div>
    <div class="details">
        <div class="listhead">
           <Link to="/page4"><h4>Rehana</h4></Link>  
               <p class="time">1:30</p>                    
        </div>
        <div class="message_p">
               <p>!....?</p>  
 </div>
</div>
</div>
<div class="block unread">
    <div class="imgbox">
        <img src={Six} class="cover" alt="cute"/>
    </div>
    <div class="details">
        <div class="listhead">
            <Link to="/page5"><h4>Nithish</h4></Link> 
               <p class="time">15:30</p>                    
        </div>
        <div class="message_p">
               <p>I Love Developer?</p> 
               <b>6</b> 
 </div>
</div>
</div>
<div class="block">
    <div class="imgbox">
        <img src='' class="cover" alt=""/>
    </div>
    <div class="details">
        <div class="listhead">
               <h4>Ramu</h4> 
               <p class="time">7:30</p>                    
        </div>
        <div class="message_p">
               <p>Strong man</p>  
 </div>
</div>
</div>
<div class="block unread">
    <div class="imgbox">
        <img src="" class="cover" alt=""/>
    </div>
    <div class="details">
        <div class="listhead">
               <h4>Abdhul Kathar</h4> 
               <p class="time">00:30</p>                    
        </div>
 
</div>
</div>
<div class="block unread">
    <div class="imgbox">
        <img src="" class="cover" alt=""/>
    </div>
    <div class="details">
        <div class="listhead">
               <h4>Ali</h4> 
               <p class="time">15:30</p>                    
        </div>
        <div class="message_p">
               <p>I Love Trichy?</p>  
 </div>
</div>
</div>
<div class="block unread">
    <div class="imgbox">
        <img src="" class="cover" alt=""/>
    </div>
    <div class="details">
        <div class="listhead">
               <h4>Vanthana</h4> 
               <p class="time">7:30</p>                    
        </div>
        <div class="message_p">
               <p>I Love Beauty?</p>  
 </div>
</div>
</div>
<div class="block unread">
    <div class="imgbox">
        <img src="" class="cover" alt=""/>
    </div>
    <div class="details">
        <div class="listhead">
               <h4>Kayal</h4> 
               <p class="time">2:00</p>                    
        </div>
        <div class="message_p">
               <p>Thing in Knowledge?</p>  
 </div>
</div>
</div>

</div>
</div>       
 </div>

  </>
      )
  }
}
