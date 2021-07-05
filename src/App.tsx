import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import CV from './pages/CV'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

let App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/services" component={Services} />
        <Route path="/cv" component={CV} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}
export default App
