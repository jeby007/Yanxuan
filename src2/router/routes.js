//路由管理模块

import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import Discern from '../pages/Discern/Discern'
import Cart from '../pages/Cart/Cart'
import Profile from '../pages/Profile/Profile'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/discern',
    component: Discern
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/',
    redirect:'/home'
  }
]
