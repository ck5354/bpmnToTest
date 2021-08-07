<template>
  <div class="content with-diagram" id="js-drop-zone">
    <link rel="stylesheet" href="./static/dist/css/diagram-js.css" />
    <link rel="stylesheet" href="./static/dist/vendor/bpmn-font/css/bpmn-embedded.css" />
    <link rel="stylesheet" href="./static/dist/css/app.css" />

    <div class="message intro">
      <div class="note">
        Drop BPMN diagram from your desktop or
        <a id="js-create-diagram" href>create a new diagram</a> to get started.
      </div>
    </div>

    <div class="message error">
      <div class="note">
        <p>Ooops, we could not display the BPMN 2.0 diagram.</p>

        <div class="details">
          <span>Import Error Details</span>
          <pre></pre>
        </div>
      </div>
    </div>

    <div class="canvas" id="js-canvas"></div>
    <div class="properties-panel-parent" id="js-properties-panel"></div>
  </div>
</template>

<script>
// 引入组件
import VueBpmn from "vue-bpmn";

export default {
  name: "Bpmn2",
  mounted() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "./static/dist/indes.js";
    document.body.appendChild(s);
  },
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
