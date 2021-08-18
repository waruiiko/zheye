<template>
  <div class="dropdown">
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
import { defineComponent, ref } from "vue";
import DropDownItem from "./DropDownItem.vue"

export default defineComponent({
  name: "DropDown",
  component:{
    DropDownItem
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
    return {
      isOpen,
      clickButtonOpen,
    };
  },
});
</script>