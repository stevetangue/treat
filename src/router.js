import Vue from 'vue'
import Router from 'vue-router'
import TreatLogin from './components/TreatLogin'
import TreatDrink from './components/TreatDrink'
import TreatSize from './components/TreatSize'
import TreatType from './components/TreatType'
import TreatMilkSugar from './components/TreatMilkSugar'
import TreatComment from './components/TreatComment'
import TreatOrderBarista from './components/TreatOrderBarista'
import TreatOrderUser from './components/TreatOrderUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TreatLogin',
      component: TreatLogin
    },
    {
      path: '/TreatDrink',
      name: 'TreatDrink',
      component: TreatDrink
    },
    {
      path: '/TreatSize',
      name: 'TreatSize',
      component: TreatSize
    },
    {
      path: '/TreatType',
      name: 'TreatType',
      component: TreatType
    },
    {
      path: '/TreatMilkSugar',
      name: 'TreatMilkSugar',
      component: TreatMilkSugar
    },
    {
      path: '/TreatComment',
      name: 'TreatComment',
      component: TreatComment
    },
    {
      path: '/TreatOrderBarista',
      name: 'TreatOrderBarista',
      component: TreatOrderBarista
    },
    {
      path: '/TreatOrderUser',
      name: 'TreatOrderUser',
      component: TreatOrderUser
    }
  ]
})