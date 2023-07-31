import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';
import { ProjectOutlined } from '@vicons/antd';
import { renderIcon } from '@/utils/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/charts',
    name: 'charts',
    component: Layout,
    meta: {
      title:'图表',      
      sort: 1,
      isRoot: true,
      activeMenu: 'hook',
      icon: renderIcon(ProjectOutlined),
    },
    children: [
      {
        path: 'index',
        name: `hook`,
        meta: {
          title: 'echarts_hook',
          activeMenu: 'hook',
        },
        component: () => import('@/views/charts/hook.vue'),
      },
    ],
  },
];

export default routes;
