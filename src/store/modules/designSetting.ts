import { defineStore } from 'pinia';
import { store } from '@/store';
import designSetting from '@/settings/designSetting';

const { 
  darkTheme, 
  appTheme, 
  appThemeList,
  appTitle
} = designSetting;

interface DesignSettingState {
  //深色主题
  darkTheme: boolean;
  //系统风格
  appTheme: string;
  //系统内置风格
  appThemeList: string[];
  // 项目名称
  appTitle: string;
}

export const useDesignSettingStore = defineStore({
  id: 'app-design-setting',
  state: (): DesignSettingState => ({
    darkTheme,
    appTheme,
    appThemeList,
    appTitle
  }),
  getters: {
    getDarkTheme(): boolean {
      return this.darkTheme;
    },
    getAppTheme(): string {
      return this.appTheme;
    },
    getAppThemeList(): string[] {
      return this.appThemeList;
    },
    getAppTitle(): string {
      return this.appTitle;
    }
  },
  actions: {},
});

// Need to be used outside the setup
export function useDesignSettingWithOut() {
  return useDesignSettingStore(store);
}
