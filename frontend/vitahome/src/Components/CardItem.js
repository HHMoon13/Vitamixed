import React from 'react'



const CardList = (prpos) => {
    const ListItems = [];
    
    for (const [index, value] of prpos.data.entries()) {
        ListItems.push( 
            <div className="column" style={{float: "none",margin: "0 auto"}}>
                    <div class="post-module" style={{width:"250px",height:"350px", border:"2px solid #145374"}}>
                        
                        <div class="row thumbnail">
                            <img className="product-img" src= {value["image"]}/>
                        </div>
                        
                        <div class="post-content">
                            <h1 style={{color: "#7d0633", fontSize:"17px"}} class="title">{value["title"]}</h1>
                            <p style={{color: "#7d0633", fontSize:"13px"}}>{value["description"]}</p>
                            <div class="post-meta">
                                <span class="timestamp">
                                      <button  style={{width: "70%"}} class="button button-product-details ">View Details</button>
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
    return(
        <div className="row">
             {ListItems}
        </div>
    )
}

export default CardList;