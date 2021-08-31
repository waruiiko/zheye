// import {ColumnProps} from "./ColumnProps";
declare function require(img: string): string;

export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number;
}

export const testPosts: PostProps[] = [
    { 
        id:1,
        title: "First title",
        content: "This is my first title",
        image: require("../assets/logo.png"),
        createdAt: "2021-08-31 21:01:01",
        columnId:1
    },
    { 
        id:2,
        title: "Second title",
        content: "This is my second title",
        image: "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110",
        createdAt: "2021-08-31 21:02:02",
        columnId:1
    },
    { 
        id:3,
        title: "Third title",
        content: "This is my third title",
        image: require("../assets/logo.png"),
        createdAt: "2021-08-31 21:03:03",
        columnId:1
    },
    { 
        id:4,
        title: "Fourth title",
        content: "This is my fourth title",
        image: require("../assets/logo.png"),
        createdAt: "2021-08-31 21:04:04",
        columnId:1
    },
]