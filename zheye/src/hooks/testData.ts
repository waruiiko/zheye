import ColumnProps from "./ColumnProps";
// declare function require(img: string): string;

export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number;
}

export const testData: ColumnProps[] = [
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
        avatar: require("../assets/logo.png"),
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