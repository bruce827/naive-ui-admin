<template>
  <div>
    <div ref="chartRef"
         :style="{ height, width }">
    </div>
    <n-button @click="handleOpenSetting()">
      开
    </n-button>
    <n-button @click="handleTest()">
      gg
    </n-button>
    {{getOptions}}
    <OptionSetting :type="selectType"
                   v-model:show="showSettingDrawer"  
                   @change="changeDrawer"
                   :title="title" />

  </div>
</template>

<script setup lang="ts">
import type { ECharts } from 'echarts';
// import type {EventParams} from './types'
import { toRefs, ref, onMounted, Ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useECharts } from '@/hooks/web/useECharts';
import { BasicPropsType, basicProps } from './props';
// import type { OptionsType } from './types';
import OptionSetting from './optionSetting.vue';
import { useEchartsOptionsSettingStore } from '@/store/modules/echarts';

const echartsOptingsSettingStore = useEchartsOptionsSettingStore();
const { getOptions, setTitleOptions } = echartsOptingsSettingStore;
// 默认的图表配置,在store中定义类型
const { options: dynamicOptions } = storeToRefs(echartsOptingsSettingStore) as any;
// props
const props: BasicPropsType = defineProps(basicProps);
const { width, height } = toRefs(props);
// 图表实例
const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions, getInstance } = useECharts(chartRef as Ref<HTMLDivElement>);
let echartsInstance: ECharts ;
//配置参数
const showSettingDrawer = ref<boolean>(false);
const title = ref<string>('');
const selectType = ref<string>('');

const handleTest = () => {
  setTitleOptions({ text: '1111' });
};
// 打开配置弹窗
const handleOpenSetting = ()=>{
  showSettingDrawer.value = true
}
const changeDrawer = (show)=>{
  debugger
  showSettingDrawer.value = show
}

// const showSettingDrawer = ()=>{

// }

// 只要store中的内容修改了，就重绘图表
watch(
  () => dynamicOptions,
  (newValue) => {
    debugger
    setOptions(newValue.value);
  },
  { deep: true, immediate: false }
);

onMounted(() => {
  setOptions(dynamicOptions.value);
  echartsInstance = getInstance() as never
  echartsInstance.on('click', (params) => {
    console.log(params.componentType);
  });
});
</script>

<style scoped lang="scss">
</style>