<template>
  <n-drawer v-model:show="isDrawer"
            :width="width"
            placement="right"
            >
    <n-drawer-content :title="title"
                      :native-scrollbar="false">
      <div class="drawer">
        <n-divider title-placement="center">title</n-divider>
        <TitleForm
        />
        <!-- <div class="drawer-setting-item align-items-top">
          <n-form ref="formRef"
                  :model="titleFormValue">
            <n-space>是否显示:<n-switch v-model:value="titleFormValue.showText" /></n-space>
            <n-form-item label="主标题文本"
                         path="title.text">
              <n-input v-model:value="titleFormValue.text" />
            </n-form-item>

          </n-form>
        </div> -->

      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, unref, watch, computed } from 'vue';
import { useProjectSettingStore } from '@/store/modules/projectSetting';
import { useDesignSettingStore } from '@/store/modules/designSetting';
import { CheckOutlined } from '@vicons/antd';
import { Moon, SunnySharp } from '@vicons/ionicons5';
import { darkTheme } from 'naive-ui';
import { animates as animateOptions } from '@/settings/animateSetting';

// 各个配置项
import TitleForm from './compontents/title.vue'

export default defineComponent({
  name: 'ProjectSetting',
  components: { 
    TitleForm,
    CheckOutlined, 
    Moon, 
    SunnySharp 
  },
  props: {
    title: {
      type: String,
      default: '项目配置',
    },
    width: {
      type: Number,
      default: 280,
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(props,{emit}) {
    const settingStore = useProjectSettingStore();
    const designStore = useDesignSettingStore();
    const state = reactive({
      width: props.width,
      title: props.title,
      isDrawer: false,
      placement: 'right',
      alertText:
        '该功能主要实时预览各种布局效果，更多完整配置在 projectSetting.ts 中设置，建议在生产环境关闭该布局预览功能。',
      appThemeList: designStore.appThemeList,
    });

    watch(
      () => designStore.darkTheme,
      (to) => {
        settingStore.navTheme = to ? 'header-dark' : 'dark';
      }
    );

    watch(
      ()=>props.show,
      (show)=>{
        debugger
        state.isDrawer = show
      }
    )

    const directionsOptions = computed(() => {
      return animateOptions.find((item) => item.value == unref(settingStore.pageAnimateType));
    });

    function openDrawer() {
      state.isDrawer = true;
    }

    function closeDrawer() {
      state.isDrawer = false;
    }

    function togNavTheme(theme) {
      settingStore.navTheme = theme;
      if (settingStore.navMode === 'horizontal' && ['light'].includes(theme)) {
        settingStore.navTheme = 'dark';
      }
    }

    function togTheme(color) {
      designStore.appTheme = color;
    }

    function togNavMode(mode) {
      settingStore.navMode = mode;
      settingStore.menuSetting.mixMenu = false;
    }

    // setting
    const titleFormValue = reactive({})

    // const handleChange = (show)=>{
    //   debugger
    //   emit('change',show)
    // }

    return {
      ...toRefs(state),
      settingStore,
      designStore,
      togNavTheme,
      togNavMode,
      togTheme,
      darkTheme,
      openDrawer,
      closeDrawer,
      animateOptions,
      directionsOptions,
      // setting
      titleFormValue,
      // handleChange

    };
  },
});
</script>

<style lang="less" scoped>
.drawer {
  .n-divider:not(.n-divider--vertical) {
    margin: 10px 0;
  }

  &-setting-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    flex-wrap: wrap;

    &-style {
      display: inline-block;
      position: relative;
      margin-right: 16px;
      cursor: pointer;
      text-align: center;
    }

    &-title {
      flex: 1 1;
      font-size: 14px;
    }

    &-action {
      flex: 0 0 auto;
    }

    &-select {
      flex: 1;
    }

    .theme-item {
      width: 20px;
      min-width: 20px;
      height: 20px;
      cursor: pointer;
      border: 1px solid #eee;
      border-radius: 2px;
      margin: 0 5px 5px 0;
      text-align: center;
      line-height: 14px;

      .n-icon {
        color: #fff;
      }
    }
  }

  .align-items-top {
    align-items: flex-start;
    padding: 2px 0;
  }

  .justify-center {
    justify-content: center;
  }

  .dark-switch .n-switch {
    ::v-deep(.n-switch__rail) {
      background-color: #000e1c;
    }
  }
}
</style>
