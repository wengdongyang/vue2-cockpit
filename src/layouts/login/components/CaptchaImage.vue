<!-- @format -->
<template>
  <img :class="$style['captcha-image']" :src="captchaUrl" @click="getCaptchaImage" />
</template>
<script>
import { Component, Vue, PropSync, Emit } from 'vue-property-decorator';
// apis
import { apiGetCaptcha } from '@src/apis';
// utils
// types
// mixins
// stores
// configs
// components
@Component({ components: {} })
export default class CaptchaImage extends Vue {
  @PropSync('verKey', { type: String }) computedVerKey;

  data() {
    return {
      captchaUrl: null,
    };
  }

  @Emit('updateCaptchaImage')
  async getCaptchaImage() {
    try {
      const { code } = await apiGetCaptcha();
    } catch (error) {
      console.warn(error);
    }
  }
  created() {}
  mounted() {
    this.$nextTick(() => {
      this.getCaptchaImage();
    });
  }
  destroy() {}
}
</script>
<style lang="scss" module>
.captcha-image {
  object-fit: cover;
}
</style>
