import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Breadcrumb from 'react-bootstrap/Breadcrumb'



function Mission() {
        return(
          <div style={{marginTop:"50px"}}>
              <div style={{marginLeft:"", position:"relative"}}>
                <Breadcrumb>
                  <Breadcrumb.Item href="/" style={{fontWeight:"100", fontSize:"12px"}} >HOME</Breadcrumb.Item>
                  <Breadcrumb.Item active style={{fontWeight:"100", fontSize:"12px"}}>OUR MISSION</Breadcrumb.Item>
                </Breadcrumb>
              </div>
        
            <div style={{marginTop:"2%",}}>
              <section id="mu-about-us">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mu-about-us-area">
                      <div class="mu-title">
                        <span class="mu-subtitle">Discover</span>
                        <h2>OUR MISSION</h2>        
                        <span className="mu-title-bar"><i style={{color: "#DAA520"}} class="fa fa-spoon"></i></span>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="mu-about-us-left">
                          <div className="mission-title">
                          Our mission is to provide HALAL food
                          </div>
                          
                          <p style={{textAlign:"justify", color:"black"}}>
                          
                            <br></br> <br></br>
                          We Source the Brand you Love, quality product you need at competitive Price and our Export Management team will send all required documents for smooth release the cargo.<br></br> <br></br>
                          We are in sourcing and Export since 2014.
                          </p>    
                                                  
                          
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mu-about-us-right">                
                              <div className="row">
                                  <div className="col hovereffect" >
                                      <img src="/static/images/amex3.png" alt="plus icon img"/>
                                      <div class="overlay">
                                          <h2>FOOD 1</h2>
                                          <a class="info" href="#">Details</a>
                                      </div>
                                  </div>
                                  <div className="col hovereffect">
                                  <img src="/static/images/amex2.png" alt="plus icon img"/>
                                      <div class="overlay">
                                          <h2>FOOD 2</h2>
                                          <a class="info" href="#">Details</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col hovereffect">
                                  <img src="/static/images/amex1.png" alt="plus icon img"/>
                                      <div class="overlay">
                                          <h2>FOOD 3</h2>
                                          <a class="info" href="#">Details</a>
                                      </div>
                                  </div>
                                  <div className="col hovereffect">
                                  <img src="/static/images/amex4.png" alt="plus icon img"/>
                                      <div class="overlay">
                                          <h2>FOOD 4</h2>
                                          <a class="info" href="#">Details</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
          </div>
        )
}


export default Mission