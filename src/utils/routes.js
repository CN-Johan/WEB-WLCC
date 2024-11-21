import Home from '../pages/Home';
import Solutions from '../pages/Solutions';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

export const routes = [
  {
    path: '/',
    component: Home,
    name: '首页'
  },
  {
    path: '/solutions',
    component: Solutions,
    name: '解决方案'
  },
  {
    path: '/products',
    component: Products,
    name: '产品服务'
  },
  {
    path: '/services',
    component: Services,
    name: 'IT服务'
  },
  {
    path: '/contact',
    component: Contact,
    name: '联系我们'
  }
]; 