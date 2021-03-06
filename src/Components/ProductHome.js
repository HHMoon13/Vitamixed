import React from 'react'


const carouselList = [
    {
        image: "/static/images/amex1.png",
        title : "OIL",
        description: "OUR FOCUS ON QUALITY",
        item: "3 ITEMS",
        link: "\products\#section-oil"

    },
    {
        image: "/static/images/amex2.png",
        title : "MAYONNAISE",
        description: "AUTHENTIC TASTE",
        item: "2 ITEMS",
        link: "\products\#section-mayonnaise"
    },
    {
        image: "/static/images/amex3.png",
        title : "SAUCES",
        description: "NO COMPROMISE WITH TASTE",
        item: "3 ITEMS",
        link: "\products\#section-sauces"
    },
    {
        image: "/static/images/amex4.png",
        title : "VINEGAR",
        description: "NO COMPROMISE WITH TASTE",
        item: "3 ITEMS",
        link: "\products\#section-vinegar"
    }
]


function HomeProduct(){
    const ListItems = [];
    for (const [index, value] of carouselList.entries()) {
        ListItems.push( 
            <div className="column" style={{float: "none",margin: "0 auto"}}>
                    <div class="post-module">
                        <div class=" row thumbnail" >
                            <img  src= {value["image"]}/>
                        </div>
                        
                        <div class="post-content">
                            <div class="category">{value["item"]}</div>
                            <h1 style={{color: "#7d0633", fontSize:"17px"}} class="title">{value["title"]}</h1>
                            <p style={{color: "#7d0633", fontSize:"13px"}}>{value["description"]}</p>
                            <div class="post-meta">
                                <a class="timestamp" href={value["link"]}>
                                      <button class="button button-details">EXplore all</button>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

    return(
        <div className="container-fluid " style={{marginTop:"3%"}}>
            <section id="mu-about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mu-about-us-area">
                                <div class="mu-title">
                                    <span class="mu-subtitle">Discover</span>
                                    <h2 style={{color:"#07689f"}}>OUR FEATURED PRODUCTS</h2>        
                                    <span className="mu-title-bar"><i style={{color: "#DAA520"}} class="fa fa-spoon"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row">
                {ListItems}
            </div>
        </div>
        
    )
}

export default HomeProduct;