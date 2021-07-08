import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//pages
import asyncComponent from './AsyncComponent.js'

const Home = asyncComponent(() =>
  import('./pages/Home').then((module) => module.default)
)
const Contact = asyncComponent(() =>
  import('./pages/Contact').then((module) => module.default)
)
const Services = asyncComponent(() =>
  import('./pages/Services').then((module) => module.default)
)
const Portfolio = asyncComponent(() =>
  import('./pages/Portfolio').then((module) => module.default)
)
const About = asyncComponent(() =>
  import('./pages/About').then((module) => module.default)
)
const CV = asyncComponent(() =>
  import('./pages/CV').then((module) => module.default)
)
const NotFound = asyncComponent(() =>
  import('./pages/NotFound').then((module) => module.default)
)

const App = () => {
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
