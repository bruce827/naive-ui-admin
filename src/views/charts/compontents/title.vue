<template>
  <div>
    <n-form ref="formRef"
                  :model="titleFormValue">
            <n-space>是否显示:<n-switch v-model:value="titleFormValue.show" /></n-space>
            <n-form-item label="主标题文本"
                        path="title.text">
              <n-input v-model:value="titleFormValue.text" />
            </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from 'vue'
  import type {TitleOptionType} from '../types'
  const defaultFormValue:TitleOptionType = {
    show:false,
    text:''
  }
  const titleFormValue = reactive<TitleOptionType>(defaultFormValue)

</script>

<style scoped>

</style>