import * as axios from 'axios'
import Config from '../assets/js/request/Config'
import {EventBus, Constants} from '../assets/js/index'

let _axios = axios.create(Config);

_axios.interceptors.response.use((response) => {
    console.log('response')//config
    let result = response.data;

    if (typeof result === 'string') {
        result = JSON.parse(result)
    }
    if (result && 'ret' in result) {//&& 'data' in result
        if (result.ret === 200) {
            return result
        } else {
            return Promise.reject({
                msg: '接口返回错误',
                data: result.msg
            })
        }
    } else {
        EventBus.$emit(Constants.EventBus.showToast, {message: '接口异常'});
        return Promise.reject({
            msg: 'api 不符合规范',
            data: result
        })
    }
}, (error) => {
    if (error.message == 'Network Error') {//网络异常
        console.log(error.message, '请检查网络连接是否正常.')
    }
    console.log(error.message)
})

export default _axios
