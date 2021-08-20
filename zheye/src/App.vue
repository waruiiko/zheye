<template>
  <div>
    <GlobalHeader :user="user"/>
    <ColumnList :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList from "./components/ColumnList.vue";
import GlobalHeader,{UserProps} from "./components/GlobalHeader.vue"
import ColumnProps from "./hooks/ColumnProps";
import "bootstrap/dist/css/bootstrap.min.css";
declare function require(img: string): string;

const user:UserProps = {
  isLogin:true,
  name:'xiaoming'
}

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
    ColumnList,GlobalHeader
  },
  setup() {
    return { list: testData ,user};
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
