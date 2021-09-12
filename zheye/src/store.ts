import { createStore } from "vuex"
import { ColumnProps, testData } from './hooks/ColumnProps';
import { PostProps, testPosts } from "./hooks/TestData"
import axios from "axios"

interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
    columnId?: number
}
export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}

const store = createStore({
    state: {
        columns: testData,
        posts: testPosts,
        user: {
            isLogin: false,
            name: 'xiaooming',
            columnId: 1
        }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: 'xiaomingg' }
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        },
        fetchColumns(state,rawData) {
            state.columns = rawData.data
        }
    },
    actions: {
        fetchColumns(context){
            axios.get('/bitcoin').then(resp=>{
                // console.log('price',resp.data.market_data.current_price.usd)
                context.commit('fetchColumns',resp.data)
            })
        }
    },
    getters: {
        biggerColumnLength(state) {
            return state.columns.filter(column => column.id > 2).length
        },
        getColumnById: (state) => (id: number) => {
            return state.columns.find(column => column.id == id);
        },
        getColumnByCid: (state) => (cid: number) => {
            return state.posts.filter(post => post.id == cid);
        }
    }
})

export default store