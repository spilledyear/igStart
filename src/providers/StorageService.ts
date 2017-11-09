/**
 * @author spilledyear
 * @date 2017/11/05 18:28
 *
 *  '@ionic/storage' 插件的 get 方法返回一个Promise对象，真恶心
 */

import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
  }

  set(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  get<T>(key: string): T {
    let value: string = localStorage.getItem(key);

    if (value && value !== 'undefined' && value !== 'null') {
      return <T>JSON.parse(value);
    }

    return null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}
