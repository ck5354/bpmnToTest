<template>
  <div class="diagram-container">
    <!-- 组件  url为文件路径-->
    <vue-bpmn
      url="../static/diagram.bpmn"
      v-on:error="handleError"
      v-on:shown="handleShown"
      v-on:loading="handleLoading"
    ></vue-bpmn>
  </div>
</template>

<script>
// 引入组件
import VueBpmn from "vue-bpmn";

export default {
    name:'Bpmn',
  components: {
    VueBpmn
  },
  methods: {
    handleError: function(err) {
      console.error("failed to show diagram", err);
    },
    handleShown: function() {
      console.log("diagram shown");
    },
    handleLoading: function() {
      console.log("diagram loading");
    }
  }
};
</script>

<style scoped>
.diagram-container {
  height: 300px;
}
</style>