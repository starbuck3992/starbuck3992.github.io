import {RouteRecordRaw} from 'vue-router';
import {LayoutEnum} from '@/layout/LayoutEnum';
import DashboardPage from '@/views/admin/DashboardPage.vue';
import HomePage from '@/views/public/HomePage.vue';

export enum ROUTES {
  NOT_FOUND = 'routesNotFound',
  ADMIN_DASHBOARD = 'routesAdminDashboard',
  HOME_PAGE = 'routesHomePage',
  USER_SETTINGS_ROUTER_VIEW = 'routesUserSettingsRouterView',
  USER_PROFILE_PAGE = 'routesUserProfilePage',
  USER_PASSWORD_PAGE = 'routesUserPasswordPage',
  USER_INTEGRATIONS_PAGE = 'routesUserIntegrationsPage',
  TOURNAMENTS_PAGE = 'routesTournamentsPage',
}

const routes = [
  {
    path: '/admin',
    meta:
  {
    layout: LayoutEnum.ADMIN,
    requiresAuth: true,
  },
    children: [
      {
        path: '',
        name: ROUTES.ADMIN_DASHBOARD,
        component: DashboardPage,
      },
    ],
  },
  {
    path: '/',
    meta: LayoutEnum.PUBLIC,
    children: [
      {
        path: '',
        name: ROUTES.HOME_PAGE,
        component: HomePage,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: ROUTES.NOT_FOUND,
    component: HomePage,
  },
];

export default routes as RouteRecordRaw[];
