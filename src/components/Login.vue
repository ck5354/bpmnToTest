<template>
  <div>
    <el-form :rules="rules" ref="form" :model="loginForm" class="loginContainer">
      <h3 class="loginTitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          auto-complete="flase"
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          auto-complete="flase"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          type="text"
          auto-complete="flase"
          v-model="loginForm.code"
          placeholder="点击图片更换验证码"
          style="width:250px;magin-left:5px"
        ></el-input>
        <img :src="captchaUrl" />
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <el-button type="primary" style="width:100%" @click="submitLogin()">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      captchaUrl: "",
      loginForm: {
        username: "",
        password: "",
        code: ""
      },
      checked: true,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message({
            message: "恭喜你，登录成功",
            type: "success"
          });
          this.$router.replace("/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 188px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
}
.loginRemember {
  text-align: left;
  margin: 0px 8px 15px 0px;
}
</style>