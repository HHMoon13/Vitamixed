import React from "react"
import { HashLink as Link } from 'react-router-hash-link';


function Navbar(){
    return(

        <div>
          <header class="desktop-header-3 light fixed-top"  >

                <div class="">

                    <nav class="navbar navbar-expand-lg navbar-dark" >
                        <a class="navbar-brand" href="/" style={{marginLeft:"10px"}}>
                        <img src="/static/images/client-7.svg" alt="VITAMIXED" /></a> 

                        <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>

                        <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{height:"100%"}}>
                            <ul class="navbar-nav ml-auto scrollspy" style={{margin:"0 auto"}}>
                                <li class="nav-item dropdown">
                                    <a  href="/mission" class="nav-link">OUR MISSION</a>
                                </li>
                                <li class="nav-item">
                                    {/* <a  href="/products" class="nav-link">PRODUCTS</a> */}
                                    <div class="dropdown">
                                        <a class="nav-link" href="/products">PRODUCTS 
                                        <i class="fa fa-caret-down"></i>
                                        </a>
                                        <div class="dropdown-content">
                                        
                                       <Link to="/products#section-oil">OIL</Link>
                                       <Link to="/products#section-vinegar">VINEGAR</Link>
                                       <Link to="/products#section-sauces">SAUCES</Link>
                                       <Link to="/products#section-mayonnaise">MAIONNAISE</Link>
                                    </div>
                                </div> 
                                </li>

                                <li class="nav-item">
                                    <a  href="/contacts" class="nav-link">CONTACT US</a>
                                </li>
                               
                            </ul>
                        </div>
                    </nav>

                </div>

            </header>


           
        </div>
    );
}

export default Navbar;

