import Home from './containers/Home'
import About from './components/About'
import User from './components/User'

const routes = [
  { path: '/',
    exact: true,
    component: Home
  },

  { path: '/about',
    component: About
  },

  { path: '/users/:name',
    component: User
  }
]

export default routes
