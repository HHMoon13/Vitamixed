import React from "react"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import VinegarList from "../data/vinegar"
import SaucesList from "../data/sauces"
import OilList from "../data/oil"
import MayonnaiseList from "../data/mayonnaise"
import CardList from "../Components/CardItem"

class ProductPage extends React.Component {
    
    render(){
        return(
            <div style={{marginTop:"5%"}}>
                <div style={{marginLeft:"2%"}}>
                <Breadcrumb divider="›">
                  <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                  <Breadcrumb.Item active>PRODUCTS</Breadcrumb.Item>
                  <Breadcrumb.Item href="#section-oil">OIL</Breadcrumb.Item>
                  <Breadcrumb.Item href="#section-vinegar">VINEGAR</Breadcrumb.Item>
                  <Breadcrumb.Item href="#section-sauces">SAUCES</Breadcrumb.Item>
                  <Breadcrumb.Item href="#section-mayonnaise">MAYONNAISE</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            
            <div className="container ">

                <section id="section-vinegar" style={{padding:"2%"}}>
                <div className="product-row" >
                    <div class="product-title">
                        <h2 class="section-title wow fadeInUp">OUR FEATURED VINEGAR</h2>
                    </div>
                    <div className="vinegar-row">
                        <CardList data={VinegarList} />
                    </div>
                </div>
                </section>  

                <section id="section-oil" style={{padding:"2%"}}>
                <div className="product-row">
                    <div class="product-title">
                    <span className="product-title-bar"> 
                        <h2 class="section-title wow fadeInUp">OUR FEATURED OIL</h2>  
                    </span>
                             
                    </div>
                    <div className="oil-row">
                        <CardList data={OilList} />
                    </div>
                </div>     
                </section>

                <section id="section-sauces" style={{padding:"2%"}}>
                <div className="product-row">
                    <div class="product-title">
                        <h2 class="section-title wow fadeInUp">OUR FEATURED SAUCES</h2>        
                    </div>
                    <div className="sauces-row">
                        <CardList data={SaucesList} />
                    </div>
                </div> 
                </section>

                <section id="section-mayonnaise" style={{padding:"2%"}}>
                <div className="product-row">
                    <div class="product-title">
                        <h2 class="section-title wow fadeInUp">OUR FEATURED MAYONNAISE</h2>        
                    </div>
                    <div className="mayonnaise-row">
                        <CardList data={MayonnaiseList} />
                    </div>
                </div>
                </section>
            </div>
        </div>
        )
    }
}

export default ProductPage;