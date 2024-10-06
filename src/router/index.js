import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/main',
          name: 'main',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/MainView.vue')
        },
        {
          path: '/vacancies',
          name: 'vacancies',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/VacancyView.vue')
        },
        {
          path: '/single',
          name: 'singleVacancy',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/SingleVacancy.vue')
        },
        {
          path: '/designer',
          name: 'Designer',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/DesignerView.vue')
        },
        {
          path: '/certificates',
          name: 'certificates',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/DesignerView.vue')
        },
        {
          path: '/partner',
          name: 'partner',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/DesignerView.vue')
        }


      ]
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log(savedPosition)
      return new Promise((resolve, reject) => {
        const t = setTimeout(() => {
          console.log("to.hash", to.hash);
          resolve({
            selector: to.hash,
            // behavior: "smooth",
          });
          clearTimeout(t);
        }, 300);
      });
    } else if (savedPosition) {
      console.log("savedPosition", savedPosition);
      return savedPosition;
    }
    return {  x: 0, y: 0 };
  },

})

export default router
