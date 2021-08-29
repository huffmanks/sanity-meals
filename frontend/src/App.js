import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Category from './pages/Category'
import Categories from './pages/Categories'
import Navbar from './components/Navbar'

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Recipe} path='/recipe/:slug' />
        <Route component={Category} path='/category/:id' />
        <Route component={Categories} path='/category' />
      </Switch>
    </Router>

  )
}

export default App;
