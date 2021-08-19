<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="clickButtonOpen"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import DropDownItem from "./DropDownItem.vue";
import useClickOut from "../hooks/useClickOut";

export default defineComponent({
  name: "DropDown",
  component: {
    DropDownItem,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const clickButtonOpen = () => {
      isOpen.value = !isOpen.value;
    };
    //template上挂载ref，此处申明泛型，名称与其一致
    const dropdownRef = ref<null | HTMLElement>(null);
    // const handleClick = (e:MouseEvent) => {
    //   if(dropdownRef.value){
    //     //对e.target类型断言，如果dropdownRef为空，且菜单打开，则关闭菜单
    //     if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
    //       isOpen.value = false
    //     }
    //   }
    // }
    // //添加事件
    // onMounted(() => {
    //     document.addEventListener("click", handleClick);
    // }),
    //     //移除事件
    //     onUnmounted(() => {
    //         document.removeEventListener("click", handleClick);
    //     })
    const isClickOut = useClickOut(dropdownRef);

    watch(isClickOut, () => {
      if (isOpen.value && isClickOut.value) {
        isOpen.value = false;
      }
    });

    return {
      isOpen,
      clickButtonOpen,
      dropdownRef
    };
  },
});
</script>