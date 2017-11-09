/**
 * @author spilledyear
 * @date 2017/11/01 18:28
 */


import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Dialogs} from '@ionic-native/dialogs';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import {stringify} from 'qs';

import {Result} from '../domain/Result';
import {HOST_URL, TIME_OUT, ACCESS_TOKEN} from '../domain/Constants';
import {NativeService} from "./NativeService";

@Injectable()
export class HttpService {

  constructor(private http: Http,
              public dialogs: Dialogs,
              public storage: Storage,
              private nativeService: NativeService) {
  }


  /**
   * 统一接口请求
   * @Author   spilledyear
   * @DateTime 2017-10-25
   * @param    {any}       params [description]
   * @return   {any}              [description]
   */
  public request(url: string, params: any, method: string = 'POST'): any {
    url = `${HOST_URL}${url}?access_token=${this.storage.get(ACCESS_TOKEN)}`;

    // POST请求（参数、返回值类型都是任意类型）
    if (method === 'post' || method === 'POST') {
      return this.post(url, params);
    } else {
      return this.get(url);
    }
  }


  /**
   * 带有身份认证的请求
   * @param {string} url
   * @param body
   * @returns {Promise<any>}
   */
  public post(url: string, body: any): Promise<any> {
    if (!this.nativeService.isLogin()) return;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json;utf-8');
    // headers.append('Authorization', localStorage.getItem(ACCESS_TOKEN));
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .timeout(TIME_OUT)
      .toPromise()
      .then(response => response.json() as Result);
  }

  /**
   * 带有身份认证的GET请求
   * @param {string} url
   * @returns {Promise<any>}
   */
  public get(url: string): Promise<any> {
    if (!this.nativeService.isLogin()) return;

    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    return this.http.get(url, options)
      .timeout(TIME_OUT)
      .toPromise()
      .then(response => response.json() as Result);
  }


  /**
   * 登录
   * @param {string} url
   * @param body
   * @returns {Promise<any>}
   */
  public login(url: string, body: any): Promise<any> {
    url = `${HOST_URL}${url}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;utf-8');
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, stringify(body), options)
      .timeout(TIME_OUT)
      .toPromise()
      .then(response => response.json());
  }


  /**
   * 不带有身份认证的post的请求
   * @param {string} url
   * @param body
   * @returns {Promise<any>}
   */
  public postDirect(url: string, body: any): Promise<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authorization', localStorage.token);
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, body, options)
      .timeout(TIME_OUT)
      .toPromise()
      .then(response => response.json());
  }


  /**
   * 不带有身份认证的get请求
   * @param {string} url
   * @returns {Promise<never | any>}
   */
  public getDirect(url: string): Promise<any> {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    return this.http.get(url, options)
      .timeout(TIME_OUT)
      .toPromise()
      .then(response => response.json());
  }

}
