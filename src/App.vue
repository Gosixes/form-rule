<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <el-form ref="form" :model="form" label-width="100px" label-position="left"
      :rules="rules2">
      <el-form-item label="机构编码" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="中文名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      form: {},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
        ]
      },
      rules2: this.$fdCreateRule({
        username: 'ORG_OrgCode',
        name: 'ORG_ChName'
      })
    }
  },

  methods: {
    submit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$message.success('提交完成')
        } else {
          this.$message.error('请检查输入')
        }
      })
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
