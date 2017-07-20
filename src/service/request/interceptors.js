import axios from 'axios'

axios.interceptors.response.use((response) => {
    if (response.request.responseURL.indexOf(response.config.baseURL) === 0) {
        let result = response.data;

        if ('ret' in result && result.ret === 200) {
            return result;
        } else {
            return Promise.reject({
                msg: 'api 不符合规范',
                data: result
            });
        }
    } else {
        return response;
    }
}, (error) => {
    if (error.message == 'Network Error') {//网络异常
        console.log(error.message, '请检查网络连接是否正常.');
    }
    console.log(error.message)
});