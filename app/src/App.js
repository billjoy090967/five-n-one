import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Starwars from './pages/starwars'
import Buzzwords from './pages/buzzwords'
import Fortunecookies from './pages/fortunecookies'
import Emojislist from './pages/emojislist'
import ColorForm from './pages/colors/form'
import BuzzwordsForm from './pages/buzzwords/form'
import StarwarsForm from './pages/starwars/form'
import FortunecookiesForm from './pages/fortunecookies/form'
import EmojislistForm from './pages/emojislist/form'

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
          <Link to="/fortunecookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojislist">Emojis</Link>
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

          <Route path="/colors/new" component={ColorForm} />
          <Route path="/colors" component={Colors} />

          <Route path="/starwars/new" component={StarwarsForm} />
          <Route path="/starwars" component={Starwars} />

          <Route path="/buzzwords/new" component={BuzzwordsForm} />
          <Route path="/buzzwords" component={Buzzwords} />

          <Route path="/fortunecookies/new" component={FortunecookiesForm} />
          <Route path="/fortunecookies" component={Fortunecookies} />

          <Route path="/emojislist/new" component={EmojislistForm} />
          <Route path="/emojislist" component={Emojislist} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
