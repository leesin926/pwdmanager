import axios from 'axios'
import {Toast} from 'vant';

let baseUrl = process.env.BASE_API //接口地址
export default {
    get(url, parame = {}) {//get请求
        return new Promise((resolve) => {
            const token = sessionStorage.getItem('localToken');
            axios.defaults.baseURL = baseUrl
            axios.defaults.headers.common['Authorization'] = token || ''
            axios.defaults.headers.post['Content-Type'] = 'application/json'
            //var timestamp=new Date().getTime() //获取时间戳
            axios.get(url, parame)
                .then((res) => {
                    const response = res.data;
                    resolve(response)
                })
                .catch((err) => {
                    let res = err.response
                    if (err) {
                        Toast('api error, HTTP CODE: ' + res.status)
                    }
                })
        })
    },
    post(url, parame = {}) {//post请求
        return new Promise((resolve) => {
            const token = sessionStorage.getItem('localToken');
            axios.defaults.baseURL = baseUrl
            axios.defaults.headers.common['Authorization'] = token || ''
            axios.defaults.headers.post['Content-Type'] = 'application/json'
            //var timestamp=new Date().getTime() //获取时间戳
            axios.post(url , parame)
                .then((res) => {
                    var response = res.data
                    resolve(response)
                })
                .catch((err) => {
                    let res = err.response
                    if (err) {
                        Toast('api error, HTTP CODE: ' + res.status)
                    }
                })
        })
    }
}