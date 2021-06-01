import React,{Component} from 'react';
import {Navbar,Nav,Image,Button,Container} from 'react-bootstrap';
import { AiOutlineSearch} from 'react-icons/ai'; 
import { IoMdMenu } from 'react-icons/io';
import './blog.css'


class Head extends React.Component {
  state={
    divcontainer:false,
  }
  
    render() {
      var Handlechange = e =>{
        this.setState( {divcontainer:!this.state.divcontainer})
      }
      const x=this.state.divcontainer;
  return (
      <div>
    <Navbar className="Head" expand="lg">
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="">
      <Nav.Link className="dropbtn" href="#home">HOME</Nav.Link>
      <div className="dropdown"><Nav.Link className="cont" href="#features">COMPANY</Nav.Link>
      <div className="dropdown-content">
    <a href="#">Reports</a>
    <a href="#">Industry updates</a>
    <a href="#">Zaakpay</a>
    <a href="#">Culture</a>
        </div>
      </div>
      <div className="dropdown"><Nav.Link className="cont" href="#features">PRODUCT</Nav.Link>
      <div className="dropdown-content">
    <a href="#">Gold</a>
    <a href="#">Lending</a>
    <a href="#">Mutual funds</a>
    <a href="#">Recharge and Bill payments</a>
    <a href="#">Merchant</a>
    <a href="#">Super cash</a>
    <a href="#">Gift cards</a>
    <a href="#">Money transfer</a>
    <a href="#">Subscription</a>
    <a href="#">Rewards</a>
        </div>
      </div>
      <div className="dropdown"><Nav.Link className="cont" href="#features">INFORMATION</Nav.Link>
      <div className="dropdown-content">
    <a href="#">Promotion</a>
        </div>
      </div>

      <Nav.Link className="cont"  href="#pricing">TECHNOLOGY</Nav.Link>

      <div className="dropdown"><Nav.Link className=" cont" href="#features">PRESS</Nav.Link>
      <div className="dropdown-content">
    <a href="#">Press kit</a>
    <a href="#">Press release</a>
    <a href="#">Media coverege</a>
        </div>
      </div>
    </Nav>
    <a style={{fontSize:"medium",marginLeft:"150px",color:"grey"}}  href="#pricing"><AiOutlineSearch/></a>
    </Navbar.Collapse>
  </Navbar>
  <div className="responsivenav">
 <IoMdMenu style={{fontSize:"25px",marginLeft:"390px",marginTop:"10px",color:"#787875"}} onClick={Handlechange} />
      {x&&(<div style={{borderTop: "1px solid #b8b9ba",lineHeight:"10px",fontWeight:"500",color:"#919294"}}>
      <p style={{marginLeft:"190px",fontSize:"12px",marginTop:"13px"}}>HOME</p>
      <p style={{marginLeft:"180px",fontSize:"12px"}}>COMPANY</p>
      <p style={{marginLeft:"181px",fontSize:"12px"}}>PRODUCT</p>
      <p style={{marginLeft:"170px",fontSize:"12px"}}>INFORMATION</p>
      <p style={{marginLeft:"170px",fontSize:"12px"}}>TECHNOLOGY</p>
      <p style={{marginLeft:"194px",fontSize:"12px"}}>PRESS</p>
      <a style={{fontSize:"medium",marginLeft:"205px",color:"grey"}}  href="#pricing"><AiOutlineSearch/></a>

      
      </div>)}
      </div>
      
  </div>
  );
}
}

export default Head;
