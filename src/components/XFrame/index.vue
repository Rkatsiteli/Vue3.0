<template>
  <article>
    <slot />
  </article>
</template>
<script>
export default {
  name: "XFrame",
  props: {
    height: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {
  },
};
</script>
<style lang="less" scoped>
.page-content {
  height: calc(100vh - 101px);
  box-sizing: border-box;
  margin: 101px 0 0 36px;
  overflow: auto;
  border-radius: 0;
  //overflow-x: hidden;
}
</style>
