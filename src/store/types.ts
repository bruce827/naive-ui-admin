import { IAsyncRouteState } from '@/store/modules/asyncRoute';
import { IUserState } from '@/store/modules/user';
import { IScreenLockState } from '@/store/modules/screenLock';
import { ITabsViewState } from '@/store/modules/tabsView';
import { IEcharts } from '@/store/modules/echarts';


export interface IStore {
  asyncRoute: IAsyncRouteState;
  user: IUserState;
  screenLock: IScreenLockState;
  tabsView: ITabsViewState;
  count: number;
  echarts:IEcharts;
}
