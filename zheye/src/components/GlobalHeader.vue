<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
</template>
<script lang="ts">
import { defineComponent,PropType } from 'vue'

export interface UserProps{
    isLogin:boolean;
    name ?: string;
    id ?: string
}

export default defineComponent({
    name:'GlobalHeader',
    props:{
        user:{
            type: Object as PropType<UserProps>,
            required: true
        }
    },
    setup() {
        
    },
})
</script>
<style scoped>

</style>