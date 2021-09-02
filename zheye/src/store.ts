import { createStore } from "vuex"
import { ColumnProps, testData } from './hooks/ColumnProps';
import { PostProps, testPosts } from "./hooks/TestData"

interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
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
            name: ''
        }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: 'xiaomingg' }
        }
    }
})

export default store