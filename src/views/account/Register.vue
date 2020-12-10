<template>
  <div class="account">
    <div class="form-warp">
      <a-form :model="account_form" @finish="handleFinish" @finishFailed="handleFinishFailed" :rules="rules_form"
        :label-col="layout.labelCol" :wrapper-col="layout.wrapperCol">
        <a-form-item name="username">
          <label>用户名</label>
          <a-input v-model:value="account_form.username" autocomplete="off" />
        </a-form-item>

        <a-form-item name="password">
          <label>密&nbsp;&nbsp;&nbsp;码</label>
          <a-input v-model:value="account_form.password" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input v-model:value="account_form.passwords" type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item name="code">
          <label>验证码</label>
          <a-row :gutter="15">
            <a-col :span="12">
              <a-input v-model:value="account_form.code" maxlength="6" autocomplete="off" />
            </a-col>
            <a-col :span="12">
              <a-button type="primary" block style="height:26px">获取验证码</a-button>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item style="margin-top:20px">
          <a-button type="primary" htmlType="submit" block>
            登录
          </a-button>
        </a-form-item>

        <div class="text-center fs-12">
          <a href="" class="color-white">忘记密码 | </a>
          <router-link to="/Register" class="color-white">注册</router-link>
        </div>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, toRef } from "vue";
/* 局部注入 */
import { checkUserName, checkPassword, checkCode } from "@/utils/validate";
export default defineComponent({
  name: "Login",
  setup(props) {
    /* 自定义校验 start*/
    const validatePhone = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入手机号");
      }
      if (!checkUserName(value)) {
        return Promise.reject("请输入11位数字的手机号");
      } else {
        return Promise.resolve();
      }
    };
    const validatePassword = async (rule, value, callback) => {
      let password = ruleConfig.account_form.password;
      let passwords = ruleConfig.account_form.passwords;
      if (!value) {
        if (rule.field == "password") {
          return Promise.reject("请输入密码");
        } else {
          return Promise.reject("请再次输入密码");
        }
      }
      if (!checkPassword(value)) {
        return Promise.reject("请输入6-20位数字+英文的密码");
      } else if (passwords && value && passwords !== value) {
        return Promise.reject("两次输入的密码不一致");
      } else if (password && value && password !== value) {
        return Promise.reject("两次输入的密码不一致");
      } else {
        return Promise.resolve();
      }
    };
    const validateCode = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入验证码");
      }
      if (!checkCode(value)) {
        return Promise.reject("请输入6位数字+英文的验证码");
      } else {
        return Promise.resolve();
      }
    };
    /* 自定义校验 end*/

    const ruleConfig = reactive<any>({
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 24 }
      },
      account_form: {
        username: "",
        password: "",
        passwords: "",
        code: ""
      },
      rules_form: {
        username: [{ validator: validatePhone, trigger: "change" }],
        password: [{ validator: validatePassword, trigger: "change" }],
        passwords: [{ validator: validatePassword, trigger: "change" }],
        code: [{ validator: validateCode, trigger: "change" }]
      }
    });
    /* 表单函数 start */
    const handleFinish = () => {
      console.log("11");
    };
    /* 表单函数 end */
    return {
      ...ruleConfig,
      handleFinish
    };
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
