<!-- @format -->

<template>
  <div :class="$style['login-layout']">{{ loginFormState }}{{ isRemember }}</div>
</template>

<script>
import { Component, Vue, Prop, PropSync, Watch, Emit } from 'vue-property-decorator';
// apis
// utils
// types
// mixins
// stores
// configs
// components
@Component({
  components: {},
})
export default class HomeView extends Vue {
  @Prop({ type: Number }) propA;
  @PropSync('name', { type: String }) syncedName;

  @Watch('child')
  onChildChanged(val, oldVal) {}

  loginFormState = {
    account: null,
    password: null,
  };
  isRemember = false;

  @Emit('addToCount')
  addToCount(n) {}

  created = () => {};
  mounted = () => {
    this.$nextTick(() => {});
  };
  destroy = () => {};
}
</script>
<style lang="scss" module>
@import './LayoutLogin.scss';
</style>
