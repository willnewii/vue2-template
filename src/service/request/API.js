/**
 * Created by zhangweiwei on 2017/04/10.
 * https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/ axios全攻略
 */

import axios from 'axios'
import config from './Config'
import Qs from 'qs'

class API {

    constructor(view) {
        this.that = view;
        this.config = config;
    }


    post(url, param, success, fail, finish) {
        let _url;
        if (url.indexOf('http') !== 0) {
            _url = config.baseURL + '?' + url;
        } else {
            _url = url;
        }
        return this._request(_url, 'post', param, success, fail, finish)
    }

    get(url, param, success, fail, finish) {
        let _url = url;
        if (param)
            _url = url + '?' + Qs.stringify(param);
        return this._request(_url, 'get', null, success, fail, finish)
    }

    _request(url, type, param, success, fail, finish) {
        config.method = type;

        //添加请求参数
        if (!param) {
            param = {};
        }
        param.app_env = '' + process.env.NODE_ENV;
        param.app_version = process.env.APP_VERSION;
        param.app_model = navigator.userAgent;
        /*        let userStr = JsBridge.getStorage('user');
         if (userStr) {
         let user = JSON.parse(userStr);
         param.uid = user.uid;

         }*/

        let request;
        switch (config.method) {
            case 'get':
                config.params = param;
                request = axios.get(url, this.config);
                break;
            default:
                config.data = param;
                request = axios[type](url, null, this.config)
        }

        request.then((response) => {
            success(response.data);
            if (finish)
                finish();
        }).catch((error) => {
            if ('msg' in error) {//接口错误
                console.log(error.data.msg);
                /*                EventBus.$emit(Constants.EventBus.showToast, {
                 message: result.message
                 });*/
            }
            if (finish)
                finish();
        })

        return request;
    }

}
export default API;