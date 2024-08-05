import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {

     // State to control sidebar visibility
     const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
   <>
        <div className={`left_sidebar p-3 ${showOffcanvas ? 'show' : ''}`}>
                <div className="d-flex justify-content-between">
                    <Link to='/dashboard' style={{textDecoration:"none", color:"white"}}>
                         <h3 className='mb-3'>StartIP</h3>
                    </Link>
                    {/* <i className="fa-solid fa-bars toggle_bar" onClick={toggleOffcanvas}></i> */}
                </div>
                      
                  <div className='mt-4'>
                  <span className='small text-uppercase text-gray-500 '>pages</span>
                    <ul className='p-0 side_list mt-2'>
                         <hr className='m-0' />
                        <li>
                        <p className="d-flex justify-content-between m-0 py-2">
                        <Link to='/dashboard' className='list_item p-0'><i className="fa-solid fa-gauge me-2"></i>Dashboard</Link>
                        </p>
                        </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2"  data-bs-toggle="collapse" href="#collapseExample" type="button" aria-expanded="false" aria-controls="collapseExample">
                        <span><i className="fa-solid fa-address-card me-2"></i> About Us</span>
                        <span> <i id="chevronIcon" className="fa-solid fa-chevron-right"></i></span>
                        </p>
                        <div className="collapse" id="collapseExample">
                        <div className="card ">
                        <Link className="" to="/about-list">About List</Link>
                        </div>
                        </div>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2"  data-bs-toggle="collapse" href="#collapseExample2" type="button" aria-expanded="false" aria-controls="collapseExample">
                        <span><i className="fa-solid fa-blog me-2"></i>Blogs</span>
                        <span> <i id="chevronIcon" className="fa-solid fa-chevron-right"></i></span>
                        </p>
                        <div className="collapse" id="collapseExample2">
                        <div className="card ">
                        <Link className="" to="/blog-list">Blog List</Link>
                        </div>
                        </div>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2"  data-bs-toggle="collapse" href="#collapseExample3" type="button" aria-expanded="false" aria-controls="collapseExample">
                        <span><i className="fa-solid fa-users me-2"></i>Team</span>
                        <span> <i id="chevronIcon" className="fa-solid fa-chevron-right"></i></span>
                        </p>
                        <div className="collapse" id="collapseExample3">
                        <div className="card ">
                        <Link className="" to="/team-list">Team List</Link>
                        </div>
                        </div>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2"  data-bs-toggle="collapse" href="#collapseExample4" type="button" aria-expanded="false" aria-controls="collapseExample">
                        <span><i className="fa-brands fa-creative-commons-nd me-2"></i>Our Works</span>
                        <span> <i id="chevronIcon" className="fa-solid fa-chevron-right"></i></span>
                        </p>
                        <div className="collapse" id="collapseExample4">
                        <div className="card ">
                        <Link className="" to="/work-list">Work List</Link>
                        </div>
                        </div>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2"  data-bs-toggle="collapse" href="#collapseExample5" type="button" aria-expanded="false" aria-controls="collapseExample">
                        <span><i className="fa-solid fa-briefcase me-2"></i> Services</span>
                        <span> <i id="chevronIcon" className="fa-solid fa-chevron-right"></i></span>
                        </p>
                        <div className="collapse" id="collapseExample5">
                        <div className="card ">
                        <Link className="" to="/service-list">Service List</Link>
                        </div>
                        </div>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2"  data-bs-toggle="collapse" href="#collapseExample7" type="button" aria-expanded="false" aria-controls="collapseExample">
                        <span><i className="fa-brands fa-product-hunt me-2"></i> Products</span>
                        <span> <i id="chevronIcon" className="fa-solid fa-chevron-right"></i></span>
                        </p>
                        <div className="collapse" id="collapseExample7">
                        <div className="card ">
                        <Link className="" to="/products-list">Product List</Link>
                        </div>
                        </div>
                    </li><hr className='m-0' />
                    
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2"  data-bs-toggle="collapse" href="#collapseExample6" type="button" aria-expanded="false" aria-controls="collapseExample">
                        <span><i className="fa-regular fa-comment me-2"></i> Testimonials</span>
                        <span> <i id="chevronIcon" className="fa-solid fa-chevron-right"></i></span>
                        </p>
                        <div className="collapse" id="collapseExample6">
                        <div className="card ">
                        <Link className="" to="/testimonial-list">Testimonials List</Link>
                        </div>
                        </div>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2">
                        <Link to='/plan-list' className='list_item p-0'><i className="fa-solid fa-dollar-sign me-2"></i>Our Plans</Link>
                        </p>
                    </li><hr className='m-0' />
                    <li>
                        <p className="d-flex justify-content-between m-0 py-2">
                        <Link to='/all-users' className='list_item p-0'><i className="fa-solid fa-user me-2"></i>All Users</Link>
                        </p>
                    </li><hr className='m-0' />
                   
                        
                    </ul>
                  </div>
                </div>
   </>
  )
}

export default Sidebar