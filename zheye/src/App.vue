<template>
  <div>
    <GlobalHeader :user="user" />
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
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import ColumnList from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ColumnProps from "./hooks/ColumnProps";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidateInput from "./components/ValidateInput.vue";
import { RulesProp } from "./hooks/RuleProp";
import ValidateForm from "./components/ValidateForm.vue";
declare function require(img: string): string;

const user: UserProps = {
  isLogin: false,
  name: "xiaoming",
};

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: "",
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: require("./assets/logo.png"),
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是的test4专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 5,
    title: "test5的专栏",
    description: "这是的test5专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: "",
  },
  {
    id: 6,
    title: "test6的专栏",
    description: "这是的test6专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
];
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
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
      list: testData,
      user,
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
