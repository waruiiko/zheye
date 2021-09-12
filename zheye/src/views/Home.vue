<template>
  <div>
    <h2>{{biggerColumnLength}}</h2>
    <ColumnList :list="list" />
  </div>
</template>
<script lang="ts">
import { defineComponent,computed,onMounted } from "vue";
import ColumnList from "../components/ColumnList.vue";
// import { testData } from "../hooks/ColumnProps";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store";

export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    // onMounted(()=>{
    //   store.dispatch('fetchColumns')
    // })
    // console.log(store)
    const list = computed(()=>store.state.columns)
    const biggerColumnLength = computed(()=>store.getters.biggerColumnLength)
    return {
      list,
      biggerColumnLength
    };
  },
});
</script>