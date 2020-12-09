<template>
  <div class="account">
    <div class="form-warp">
        <a-form name="custom-validation" ref="ruleForm" v-bind="layout">
          <a-form-item>
            <label for="">用户名</label>
            <a-input autocomplete="off" block/>
          </a-form-item>
          
          <a-form-item>
            <label for="">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
            <a-input type="password" autocomplete="off" block/>
          </a-form-item>
        
          <a-form-item style="margin-top:20px">
            <a-button type="primary" html-type="submit" block>
              登录
            </a-button>
          </a-form-item>

          <div class="text-center fs-12">
            <a href="" class="color-white">忘记密码 | </a>
            <a href="" class="color-white">注册</a>
          </div>
        </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,ref, toRefs } from "vue";

export default defineComponent({
  name: "Login",
  setup(props){
    const ruleConfig = reactive<any>({
      layout:{
        labelCol: { span: 8 },
        wrapperCol: { span: 24 },
      },
    })
    const refsRuleConfig = toRefs(ruleConfig)
    // console.log(refsRuleConfig,'refsRuleConfig')
    return {
      // ruleConfig
      ...refsRuleConfig
    }
  }
});
</script>

<style lang="scss" scoped>
.account {
  width: 100vw;
  height: 100vh;
  background:#282828;
  .form-warp {
    width: 285px;
    margin:auto;
    padding-top: 300px;
    color: #fff;
  }
  label {
    display: block;
    font-size: 14px;
    color: #fff;
  }
}
</style>
