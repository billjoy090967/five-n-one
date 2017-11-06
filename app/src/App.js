import Colors from './pages/colors'
import Starwars from './pages/starwars'
import Buzzwords from './pages/buzzwords'
import Fortunecookies from './pages/fortunecookies'
import Emojislist from './pages/emojislist'
import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors" component={Colors} />
          <Route path="/starwars" component={Starwars} />
          <Route path="/buzzwords" component={Buzzwords} />
          <Route path="/fortunecookies" component={Fortunecookies} />
          <Route path="/emojislist" component={Emojislist} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
