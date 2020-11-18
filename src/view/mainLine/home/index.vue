<template>
  <div>我是首页{{ hello }}</div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  data() {
    return {
      hello: "Hello World",
    };
  },
  setup(props) {
    console.log(props);
    console.log(this);
    return {
      props,
    };
  },
  created() {
    console.log("created");
    console.log(this);
  },
  mounted() {
    console.log("mounted");
    console.log(this);
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
});
</script>
