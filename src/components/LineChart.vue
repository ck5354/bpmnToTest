<template>
  <div id="container"></div>
</template>

<script>
import { Line } from "@antv/g2plot";
import VueAxios from 'vue-axios';
import axios from 'axios';

export default {
  name: "LineChart",
  mounted() {
      axios
      .get('./static/line_chart.json')
      .then(data => {
          this.getChart(eval(data.data))
          })
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  },
  data() {
    return {
    };
  },
  methods: {
    getChart(data) {
      const linePlot = new Line("container", {
        data,
        xField: "year",
        yField: "gdp",
        seriesField: "name",
        yAxis: {
          label: {
            formatter: v => `${(v / 10e8).toFixed(1)} B`
          }
        },
        legend: {
          position: "top"
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
          appear: {
            animation: "path-in",
            duration: 5000
          }
        }
      });

      linePlot.render();
    }
  }
};
</script>