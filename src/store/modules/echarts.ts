import { defineStore } from 'pinia';
import { store } from '@/store';
import {EChartsOption} from 'echarts';
import {TitleComponentOption} from 'echarts/components';

export interface IEcharts {
  options:EChartsOption,
  titleOption:TitleComponentOption
}
const demoOptions:EChartsOption ={ 
  title: {
    text: '示例',
  },
  tooltip: {},
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};
const defaultTitleOption:TitleComponentOption = {
  show:true,
  text:'示例'
}
export const useEchartsOptionsSettingStore = defineStore({
  id: 'echarts-options',
  state: (): IEcharts => {
  // const   
  const defaultOptions = {
    // 接受echarts的全部类型，但store中只实现需要的
    options:{...demoOptions,...defaultTitleOption,},
    // title
    titleOption:defaultTitleOption
  }
  return defaultOptions
},
  getters: {
    getOptions():EChartsOption{
      return this.options as never
    },
    getTitleOptions():TitleComponentOption{
      return this.options.titleOption as never
    }
    
  },
  actions: {
    setTitleOptions(option:TitleComponentOption):void{
      this.options.title = Object.assign({},this.titleOption,option);
    }
  }


  
});


// Need to be used outside the setup
export function useEchartsOptionsSetting(){
  return useEchartsOptionsSettingStore(store)
}