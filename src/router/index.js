import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Bpmn from '@/components/Bpmn'
import Tables  from '@/components/Tables'
import Index  from '@/components/Index'
import LineChart from '@/components/LineChart'
import Bpmn2 from '@/components/Bpmn2'
import Bpmn4 from '@/components/Bpmn4'
import Bpmn5 from '@/components/Bpmn5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        a:Login
      }
    
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        a:Login
      }
    },
    {
      path: '/index',
      children: [{
        path: '/table',
        name: 'Tables',
        components: {
          b: Tables,
          component: Tables
        }
      },{
        path: '/bpmn',
        name: 'Bpmn',
        components: {
          b: Bpmn5
        }
      },{
        path: '/line_chart',
        name: 'line_chart',
        components: {
          b: LineChart
        }
      }],
      components: {
        a: Index
      }
    },
    {
      path: '/bpmn5',
      name: 'Bpmn',
      components: {
        a: Bpmn5
      }
    },
    {
      path: '/table2',
      name: 'Tables',
      components: {
        a: Tables,
        component: Tables
      }
    },
    {
      path: '/Bpmn4',
      name: 'Bpmn4',
      components: {
        a: Bpmn4
      }
    },
    {
      path: '/custom-palette',
      components: { a: () =>
          import ('../components/custom-palette')}
    }
    
  ]
})
