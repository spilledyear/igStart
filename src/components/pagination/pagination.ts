import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PAGE_SIZE} from '../../domain/Constants';

@Component({
  selector: 'pagination',
  templateUrl: 'pagination.html'
})
export class PaginationComponent {

  @Input()
  total: number;                                   // 共多少条数据

  @Input()
  pageSize: number =  PAGE_SIZE;                   // 每页大小,默认5条

  @Input()
  color: string = 'primary';                       // 颜色

  @Input()
  pageNum: number = 1;                             // 当前第几页,默认1

  @Output()
  pageNumChange = new EventEmitter<any>();         // 声明事件发射器


  constructor() {
  }

  btnClick(pageNum) {
    this.pageNum = pageNum;
    this.pageNumChange.emit(pageNum);              // 发射事件
  }

  ceil(num) {
    return Math.ceil(num);
  }

}
