import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sxypie',
  pure: true,       //true表示纯管道， false表示非纯管道
})
export class SxypiePipe implements PipeTransform {

  /**
   * 放大指数
   * {{2 | exponentialStrength: 10}}    2^10 = 1024
   * @param {number} value
   * @param {string} exponent
   * @returns {number}
   */
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
