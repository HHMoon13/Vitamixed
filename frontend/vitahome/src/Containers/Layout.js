import React  from 'react'
import Navabr from "../Components/Navbar"
import Footer from "../Components/Footer"

class Layout extends React.Component {
    render() {
        return (
            <div>
               <Navabr/>         
                <div className="main-layout" style={{marginBottom:"5%"}}>
                    <div className="layout-background">
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


export default Layout