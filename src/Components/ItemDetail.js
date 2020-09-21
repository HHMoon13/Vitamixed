import React from "react"


class DetailContainer extends React.Component {
    render(){
        const title = this.props.match.params.title;
        const itemID = this.props.match.params.itemID;
        return(
            <div style={{marginTop:"10%"}}>
             Detail Page of {title} and {itemID}
            </div>
        )
    }
}

export default DetailContainer;