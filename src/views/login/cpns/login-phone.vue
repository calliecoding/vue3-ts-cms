<template>
  <div class="login-phone">
    <el-form label-width="60px" ref="formRef" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'
const store = useStore()
const phone = reactive({
  num: '',
  code: ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

// 登录验证
const loginAction = () => {
  // 验证通过，请求登录接口
  formRef.value?.validate((valid) => {
    if (valid) {
      // 开始进行登录验证
      store.dispatch('login/phoneLoginAction', { ...phone })
    } else {
      // 验证不通过
    }
  })
}
defineExpose({ loginAction })
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
