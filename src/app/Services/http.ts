import { Injectable, EventEmitter } from '@angular/core';
import { Ng2Uploader } from './file-uploader';
import {
    Http, XHRBackend, RequestOptions, ResponseOptions, BrowserXhr, CookieXSRFStrategy, Headers, Response
} from '@angular/http';

// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'http://www.mboss.pw:3000';

@Injectable()
export class HttpService {
    private uploader: Ng2Uploader;
    public static token = '';
    callback$: EventEmitter<{}> = new EventEmitter<{}>();
    hookBeforeHttp$: EventEmitter<{}> = new EventEmitter<{}>();
    private http: Http;
    constructor() {
        this.http = new Http(new XHRBackend(new BrowserXhr(), new ResponseOptions(), new CookieXSRFStrategy()), new RequestOptions());
        this.uploader = new Ng2Uploader();
    }

    post(url: string, paras: {}, callback: (data: any) => void) {
        // do post
        let headers_ = new Headers();
        headers_.append('Authorization', HttpService.token);
        // headers_.append('Access-Control-Allow-Origin', 'http://8ju.cn');
        this.http.post(BASE_URL + url, paras, { headers: headers_ }).subscribe((data) => {
            data = data.json();
            callback(data);
            this.callback$.emit({ data: data, method: 'POST' });
        }, (err: Response) => {
            console.dir('auth failed! relogin');
            this.callback$.emit({ data: { status: false, login: true }, method: 'POST' });
        });
    }

    get(url: string, callback:  (data: any) => void) {
        // do get
        let headers_ = new Headers();
        headers_.append('Authorization', HttpService.token);
        this.http.get(BASE_URL + url, { headers: headers_ }).subscribe((data) => {
            data = data.json();
            callback(data);
            this.callback$.emit({ data: data, method: 'GET' });
        }, (err) => {
            console.dir('auth failed! relogin');
            this.callback$.emit({ data: { status: false, login: true }, method: 'GET' });
        });
    }

    upload(url: string, paras: {}, callback:  (data: any) => void) {
        // do post
        this.uploader.clearQueue();
        let data = {};
        let files = new Array();
        let field = '';
        for (let k in paras) {
            if (!paras.hasOwnProperty(k)) {
                continue;
            }
            if (Object.prototype.toString.call(paras[k]) === '[object Array]' &&
                Object.prototype.toString.call(paras[k][0]) === '[object File]') {
                paras[k].forEach((item: any) => {
                    files.push({f: item, k: k });
                });
                // field = k;
            } else if (Object.prototype.toString.call(paras[k]) === '[object File]') {
                files.push({ f: paras[k], k: k });
                // field = k;
            } else {
                data[k] = paras[k];
            }
        }
        if (files.length < 1) {
            return this.post(url, paras, callback);
        }
        this.uploader.setOptions({
            autoUpload: false,
            url: BASE_URL + url,
            data: data,
            fieldName: field,
            customHeaders: {
                'Authorization': HttpService.token
            }
        });
        this.uploader._emitter.subscribe((data_: any) => {
            console.dir(JSON.parse(JSON.stringify(data_)));
            if (data_.done && data_.status === 200) {
                callback(!(data_.error || data_.abort));
                this.callback$.emit({ data: data, method: 'UPLOAD' });
                if (data_.error) {
                    this.callback$.emit({ data: { status: false, login: true }, method: 'UPLOAD' });
                }
            }
        });
        this.uploader.addFilesToQueue(files);
        this.uploader.uploadFilesInQueue();
    }
}
