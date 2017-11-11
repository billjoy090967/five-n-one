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
import ShowColor from './pages/colors/show'
import ShowBuzzword from './pages/buzzwords/show'
import ShowFortuneCookie from './pages/fortunecookies/show'
import ShowStarwars from './pages/starwars/show'
import ShowEmojislist from './pages/emojislist/show'
import EditColorForm from './pages/colors/edit-form'
import EditBuzzwordForm from './pages/buzzwords/edit-form'
import EditFortunecookieForm from './pages/fortunecookies/edit-form'
import EditStarwarsForm from './pages/starwars/edit-form'
import EditEmojislistForm from './pages/emojislist/edit-form'

const Menu = props => {
  return (
    <div>
      <nav class="pa3 pa4-ns avenir">
        <a class="link dim black b f6 f5-ns dib mr3" href="#" title="Home">
          Five in One
        </a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">
          Five in One
        </a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Colors">
          <Link to="/colors">Colors</Link>
        </a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Buzzwords">
          <Link to="/buzzwords">BuzzWords</Link>
        </a>
        <a
          class="link dim gray    f6 f5-ns dib mr3"
          href="#"
          title="Star Wars Characters"
        >
          <Link to="/starwars">Star Wars Characters</Link>
        </a>
        <a
          class="link dim gray    f6 f5-ns dib mr3"
          href="#"
          title="Fortune Cookies"
        >
          <Link to="/fortunecookies">Fortune Cookie Fortunes</Link>
        </a>
        <a class="link dim gray    f6 f5-ns dib" href="#" title="Emojis List">
          <Link to="/emojislist">Emojis</Link>
        </a>
      </nav>
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
          <Route path="/colors/:id/edit" component={EditColorForm} />
          <Route path="/colors/:id" component={ShowColor} />
          <Route path="/colors" component={Colors} />

          <Route path="/starwars/new" component={StarwarsForm} />
          <Route path="/starwars/:id/edit" component={EditStarwarsForm} />
          <Route path="/starwars/:id" component={ShowStarwars} />
          <Route path="/starwars" component={Starwars} />

          <Route path="/buzzwords/new" component={BuzzwordsForm} />
          <Route path="/buzzwords/:id/edit" component={EditBuzzwordForm} />
          <Route path="/buzzwords/:id" component={ShowBuzzword} />
          <Route path="/buzzwords" component={Buzzwords} />

          <Route path="/fortunecookies/new" component={FortunecookiesForm} />
          <Route
            path="/fortunecookies/:id/edit"
            component={EditFortunecookieForm}
          />
          <Route path="/fortunecookies/:id" component={ShowFortuneCookie} />
          <Route path="/fortunecookies" component={Fortunecookies} />

          <Route path="/emojislist/new" component={EmojislistForm} />
          <Route path="/emojislist/:id/edit" component={EditEmojislistForm} />
          <Route path="/emojislist/:id" component={ShowEmojislist} />
          <Route path="/emojislist" component={Emojislist} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
