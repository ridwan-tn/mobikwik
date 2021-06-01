import React ,{ useRef }from 'react'
import './Navbar.css'
export default function Navbar( { setCloseNavbar, verticalNavbar , closeNavbar ,setVerticalNavbar} ) {
  const navigation = useRef()

  if(verticalNavbar){
    console.log(verticalNavbar);
    
     navigation.current.style.transitionDuration = '2s'
     navigation.current.style.transform = 'translate(0)'
     navigation.current.style.display = 'block'
   }else{
    console.log(verticalNavbar);
   }

  if( closeNavbar ){
    navigation.current.style.display = 'none'
    navigation.current.style.transitionDuration = '2s'
     navigation.current.style.transform = 'translate(-225px)'
  }
    return (
      <div className="navigation" ref={ navigation }  >
        <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid flex-column">
    <a className="navbar-brand fs-2 mobikwick-logo" href=" "> 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex flex-column mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href=" ">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}
