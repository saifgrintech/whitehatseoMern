import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="website-navbar1" className="navbar navbar-expand-lg fixed-top ">
      <div className="container">
        <a className="navbar-brand" href="/"><img src='images/white_logo.png' style={{width:"100px"}} alt='logo'></img></a>

        <div className='other-option2 d-block d-lg-none ms-auto me-3'>
          <Link className="fa-solid fa-cart-shopping" to='cart'>
            <span>0</span>
          </Link>
            <Link to='/contact'>
            <button className="btn-purple1 btn-hover" type="">Support</button>
            </Link>
            <Link to='/login'>
            <button className="btn-purple2" type="">login</button>
            </Link>
          </div>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span class="navbar-toggler-icon"></span> */}
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">About</Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/services">Services</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
              </li> */}
           
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/faqs">Faqs</Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/contact">Contact</Link>
              </li>
          </ul>
        </div>
          <div className='other-option d-none d-lg-block'>

            <Link className="fa-solid fa-cart-shopping" to='cart'>
              <span>0</span>
            </Link>

              <Link to='/contact'>
              <button className="btn-purple1 btn-hover" type="">Support</button>
              </Link>
              <Link to='/login'>
              <button className="btn-purple2" type="">login</button>
              </Link>
          
          </div>

        




      </div>
    </nav>

  )
}

export default Navbar

