import axios from 'axios';
import axiosOption from 'vue-lib/src/request/axiosOption';

const axiosInstance = axios.create(axiosOption);

/**
 * 这里会按照约定好的api格式做简单的校验.可以根据需要配置
 */
axiosInstance.interceptors.response.use((response) => {
    console.log('project');
    let result = response.data;

    if (typeof result === 'string') {
        result = JSON.parse(result);
    }
    if (result && 'ret' in result) {//&& 'data' in result
        if (result.ret === 200) {
            return result;
        } else {
            return Promise.reject(result);
        }
    } else {
        //EventBus.$emit(Constants.EventBus.showToast, {message: '接口异常'});
        return Promise.reject({
            msg: 'api 不符合规范',
            data: result
        });
    }
}, (error) => {
    console.log(error);
    let result = {};
    if (!error.response) {
        result.message = '网络好像出了点问题  😱';
    } else if (error.response.status >= 500) {
        result.message = '服务器崩溃了  😖';
    }

    return Promise.reject(result);
});

export default axiosInstance;
