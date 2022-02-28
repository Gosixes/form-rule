<template>
  <div id="app">
    <el-form :model="form" :rules="rules" label-width="120px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      form: {},
      rules: this.$fdCreateRule({
        username: {rule: 'ORG_ChName', required: true, fieldChName: '自定义中文名'}
      }),

      originRules: {
        username: [
          {required: true, message: '请输入用户名'}
        ]
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
