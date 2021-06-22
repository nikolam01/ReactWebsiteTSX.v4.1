import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

//layout
//import Layout from './components/Layout/Layout'

let App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}
export default App
