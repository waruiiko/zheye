<template>
  <div>
      <ul>
          <li v-for="column in columns" :key="column.id">
              <img :src="column.avatar" :alt="column.title">
              <h5>{{column.title}}</h5>
              <p>{{column.description}}</p>
              <a href="#">进入专栏……</a>
          </li>
      </ul>
  </div>
</template>
<script>
import {DefineComponent,PropType} from 'vue',
export interface ColumnProps{
    id: number,
    title: string,
    avatar: string,
    description: string,
}
export default {
    name: 'ColumnProps',
    props: {
        list:{
            type:Array as PropType<ColumnProps[]>
            required:true
        }
    },
    // setup(props){
    //     props.list[0].avatar
    // }
}
</script>