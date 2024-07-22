<!-- @format -->

<template>
  <section :class="$style['login-layout']">
    <section :class="$style['login-content']">
      <section :class="$style['login-form-layout']">
        <header :class="$style['login-form-header']">柯桥智治大脑</header>
        <section :class="$style['login-form-content']">
          <el-form :class="$style['form']" :model="loginFormState" :rules="loginFormRules" ref="loginFormStateRef">
            <el-form-item :class="$style['form-item']" prop="account">
              <el-input class="input" :class="$style['input']" v-model="loginFormState.account" placeholder="用户名">
                <template #prefix>
                  <i class="el-input__icon el-icon-user" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item :class="$style['form-item']" prop="password">
              <el-input class="input" :class="$style['input']" v-model="loginFormState.password" placeholder="密码">
                <template #prefix>
                  <i class="el-input__icon el-icon-lock" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item :class="$style['form-item']" prop="verCode">
              <el-row :gutter="12">
                <el-col :span="18">
                  <el-input
                    class="input"
                    :class="[$style['input'], $style['input-ver-code']]"
                    v-model="loginFormState.verCode"
                    placeholder="验证码"
                  />
                </el-col>
                <el-col :span="6">
                  <CaptchaImage
                    :class="$style['captcha-image']"
                    :verKey.sync="loginFormState.verKey"
                    @updateCaptchaImage="onUpdateCaptchaImage"
                    ref="captchaImageRef"
                  />
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item :class="$style['form-item']">
              <el-checkbox class="checkbox" :class="$style['checkbox']" v-model="isRemember">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item :class="$style['form-item']">
              <el-button :class="$style['login-btn']" type="primary" @click="onClickLogin"> 登录 </el-button>
            </el-form-item>
          </el-form>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import { Message } from 'element-ui';
import { Component, Vue } from 'vue-property-decorator';
// apis
import { apiPostLoginApi } from '@src/apis';
// utils
// types
// mixins
// stores
// configs
// components
import CaptchaImage from './components/CaptchaImage.vue';
@Component({ components: { CaptchaImage } })
export default class LayoutLogin extends Vue {
  data() {
    return {
      loginFormState: { account: null, password: null, verKey: null, verCode: null },
      isRemember: false,

      loginFormStateRef: null,
      captchaImageRef: null,
    };
  }

  get loginFormRules() {
    return {
      account: [{ required: true, message: '用户名 - 必填' }],
      password: [{ required: true, message: '密码 - 必填' }],
      verCode: [{ required: true, message: '验证码 - 必填' }],
    };
  }

  async onClickLogin() {
    try {
      const isOk = await this.$refs.loginFormStateRef?.validate();
      if (isOk) {
        const data = this.loginFormState;
        const { code, message } = await apiPostLoginApi(data);
        if (code === '00000') {
          Message.success(message);
        } else {
          Message.error(message);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  }

  onUpdateCaptchaImage() {
    try {
      this.loginFormState.verCode = null;
    } catch (error) {
      console.warn(error);
    }
  }

  created() {}
  mounted() {}
  destroy() {}
}
</script>
<style lang="scss" module>
@import './LayoutLogin.scss';
</style>
<style lang="scss" scoped>
.input {
  margin: 0;
  ::v-deep(.el-input__inner) {
    color: #333;
    border-color: #eee;
    background-color: white;
  }
}
.checkbox {
  margin: 0;
  ::v-deep(.el-checkbox__label) {
    color: #333;
    border-color: #eee;
    background-color: white;
  }
}
</style>
