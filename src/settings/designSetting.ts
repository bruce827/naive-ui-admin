// app theme preset color
export const appThemeList: string[] = [
  '#2d8cf0',
  '#0960bd',
  '#0084f4',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
  '#FF3D68',
  '#00C1D4',
  '#71EFA3',
  '#171010',
  '#78DEC7',
  '#1768AC',
  '#FB9300',
  '#FC5404',
];

const setting = {
  // 判断系统是否使用深色主题
  darkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches || false ,
  //系统主题色
  appTheme: '#2d8cf0',
  //系统内置主题色列表
  appThemeList,
  // 项目名称
  appTitle:'优呼Saas平台(云杉版)'

};

export default setting;
