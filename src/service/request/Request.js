/**
 * Created by zhangweiwei on 2017/04/10.
 * https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/ axios全攻略
 */

import axios from 'axios'
import * as util from "../util";
import config from './Config'

class Request {

    constructor(page) {
        this.page = page;
        this.config = util.deepCopy(config);
    }

    post(url, param, success, fail, finish) {
        return this._request(url, 'post', param, success, fail, finish)
    }

    get(url, param, success, fail, finish) {
        return this._request(url, 'get', param, success, fail, finish)
    }

    handleParam(param) {
        if (!param) {
            param = {};
        }
        param.app_env = process.env.NODE_ENV;
        param.app_version = process.env.APP_VERSION;
        param.app_model = navigator.userAgent;
    }

    isHasHttp(url) {
        return url.indexOf('http') === 0
    }

    _request(url, type, param, success, fail, finish) {
        url = this.isHasHttp(url) ? url : config.baseURL + '?' + url;

        this.config.method = type;

        //处理基础请求参数
        this.handleParam(param);

        let request;
        switch (this.config.method) {
            case 'get':
                this.config.params = param;
                request = axios.get(url, this.config);
                break;
            default:
                this.config.data = param;
                request = axios[type](url, null, this.config)
        }
        request.then((response) => {
            success && success(response.data);
            finish && finish();
        }).catch((error) => {
            console.log('_request_error:', error);
            if ('msg' in error) {//接口错误
                console.error('接口异常', error.data.msg);
            } else {
                console.error('请求异常', error);
            }

            fail && fail();
            finish && finish();
        });

        return request;
    }

}

export default Request;