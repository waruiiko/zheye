接口文档需要包括的点
* endpoints：具体路径
* method：使用什么样的method
* 发送请求的参数
* 请求返回数据的格式

### endpoints
GET /teams/${ID}/players

### parameters
{
    name:'ID'
    desc:'当前球队的ID'
    type:'string'
}

### responses
**200相应**
```javascript
    {
        "code":0,
        "data":[{""},{""}]
    }
```