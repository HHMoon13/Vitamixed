import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
const carouselList = [
    {
        image: "/static/images/food1.jpg",
        title : "HIGH QUALITY INGREDIENTS",
        description: "OUR FOCUS ON QUALITY"
    },
    {
        image: "/static/images/food2.jpg",
        title : "WE PROVIDE HALAL FOOD",
        description: "AUTHENTIC TASTE"
    },
    {
        image: "/static/images/food3.jpg",
        title : "PREMIUM QUALITY",
        description: "NO COMPROMISE WITH TASTE"
    }
]

const renderTooltip = (props) => (
    <Tooltip id="scrol-tooltip" {...props}>
            EXPLORE OUT ITEMS
    </Tooltip>
  );

function CarouselLayout() {
    const ListItems = [];
    for (const [index, value] of carouselList.entries()) {
        ListItems.push( 
        <Carousel.Item>
           <img style={{height:"80vh"}} className="d-block w-100" src={value["image"]} alt="First slide"/>
            <Carousel.Caption>
                <div style={{padding: "20%"}}>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <a href="#home-product" class="scroll-down-arrow" ></a>
                </OverlayTrigger>
                
                </div>
                
                <h3>{value["title"]}</h3>
                <p style={{color:"red"}}>{value["description"]}</p>
                
            </Carousel.Caption>
        </Carousel.Item>
        )
    }
  
    return (
    <div class="carousel-container" >
        <Carousel>
           {ListItems}
        </Carousel>
    </div>
     
    );
  }
  
export default CarouselLayout;