import React from 'react'
import { Route } from 'react-router-dom'

import Home from "./Containers/Home"
import Products from "./Containers/Products"
import Mission from "./Components/Mission"

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/mission' component={Mission} />
        <Route exact path='/products' component={Products} />
    </div>
);

export default BaseRouter;