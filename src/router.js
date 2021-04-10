import Account from './components/body/account/index';
import Home from './components/body/home/index';
import Cart from './components/body/cart/index'

const router = [
  {path: '/', exact: true, Component: Home},
  {path: '/account', exact: true, Component: Account},
  {path: '/cart', exact: true, Component: Cart},
]

export default router
