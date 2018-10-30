import React from 'react'
import { Link } from 'react-router'

const Methods = (props) => {
  return(
    <div className="supportingLinks">
      <h1> What Methods Are Supported? </h1>
      <div>
        <p>
          Coffee Nerd is written by a humble, enthusastic, home coffee brewer and is currently supporting three different methods.  It is worth noting that different methods produce vastly different coffees.  Don't believe me?  Run an experiement.  A French Press will produce a cup of coffee with more body and less clarity, while on the other end of the septrum, a pour over technique will produce a cup of coffee with less body and more clarity.  Those are pretty much the bookends with other methods falling somewhere in between.
        </p>
        <p>The Drip Machine</p>
        <p>
          A staple in many kitchens around the world.  Good for brewing large quantites for a crowd.  It's secret weapon is the clock and automatic start.  It is one of life's simply pleasures to walk into the kitchen and find ready made coffee, hot and waiting for you.
        </p>
        <p>The French Press</p>
        <p>
          Yeilds a full body cup of coffee.  It's pretty straight forward, grind some beans, at some hot water, set a timer, plunge and serve.  It's a nice ritual, producing smaller amounts of coffee for a nice twosome.
        </p>
        <p>ChemeX</p>
        <p>
          Really, it's a brand name using the pour over method.  However, it's so popular that people refer to it as a process.  What sets it apart from other pour over procedures is the fact that Chemex not only produces the vessel, it produces the filters, too.  If you're buying a chemex, don't skip out on the filters.
        </p>
      </div>
    </div>
  )
}

export default Methods
