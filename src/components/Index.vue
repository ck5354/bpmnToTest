<template>
  <el-container id="app">
    <el-aside width="200px">
      <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>-->
      <div style="margin-top: 10px;">
        <img src="@/assets/title.png" width="100%" />
      </div>
      <el-menu
        router
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="false"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">组件管理</span>
          </template>
          <el-menu-item-group>
            <span slot="title">演示组件</span>
            <el-menu-item index="/table">表格演示</el-menu-item>
            <el-menu-item index="/bpmn">流程图</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="/line_chart">折线图</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">系统监控</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">运维指导</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">常用文档</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-menu
          router
          :default-active="this.$router.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>{{ item.navItem }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>

            <router-view name="b"></router-view>

      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
      navList: [
        { name: "/table", navItem: "表格演示" },
        { name: "/components/Management", navItem: "权限管理" },
        { name: "/components/User", navItem: "用户管理" },
        { name: "/components/Personnel", navItem: "人员数据" },
        { name: "/components/Alarm", navItem: "报警中心" }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<style>
/* .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  } */

/* .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  } */

/* .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  } */

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>