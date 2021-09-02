import { createStore }from "vuex"
import { ColumnProps, testData } from './hooks/ColumnProps';
import {PostProps,testPosts} from "./hooks/TestData"


interface UserProps{
    isLogin:boolean;
    name ?: string;
    id ?: number;
}

export interface GlobalDataProps{
    columns:ColumnProps[];
    posts:PostProps[];
    users:UserProps[];
}

const store = createStore({
    state: {
        columns: testData,
        posts: testPosts,
        user: {isLogin:false}
    },
})

export default store