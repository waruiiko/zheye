<template>
  <div>
    <!-- @Form-submit用于监听事件 -->
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          placeholder="write here"
          type="text"
          @blur="validateEmail"
          ref="inputRef"
        ></validate-input>
        {{ emailVal }}
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordVal"
          placeholder="password here"
          type="password"
        />
      </div>
      <!-- v-slot可以简写为# -->
      <!-- <template v-slot:submit> -->
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-form> 
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
// import ColumnList from "../components/ColumnList.vue";
// import GlobalHeader, { UserProps } from "../components/GlobalHeader.vue";
// import ColumnProps from "../hooks/ColumnProps";
// import "bootstrap/dist/css/bootstrap.min.css";
import ValidateInput from "../components/ValidateInput.vue";
import { RulesProp } from "../hooks/RuleProp";
import ValidateForm from "../components/ValidateForm.vue";
// declare function require(img: string): string;

export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    // GlobalHeader,
    ValidateInput,
    ValidateForm,
  },
  setup() {
    //通过ref这个attribute为子组件赋予一个ID（inputRef）使用，可以访问子组件的实例或者元素
    const inputRef = ref<any>()
    const emailVal = ref("");
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" },
    ];

    const passwordVal = ref("");
    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
      { type: "password", message: "请输入正确的密码" },
    ];

    const emailRef = reactive({
      val: "",
      error: false,
      message: "",
    });
    const validateEmail = () => {
      if (emailRef.val.trim() == "") {
        emailRef.error = true;
        emailRef.message = "cant be empty";
      }
    };

    const onFormSubmit = (result:boolean) => {
      console.log("!",inputRef.value.validateInput())
      console.log("123", result);
    }

    return {
    //   list: testData,
    //   user,
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
      inputRef
    };
  },
});
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
