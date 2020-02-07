import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-index',
  templateUrl: './element-index.component.html',
  styleUrls: ['./element-index.component.scss']
})
export class ElementIndexComponent implements OnInit {
  elementArr: Array<{ key: number; value: number }> = [];
  constructor() {}

  ngOnInit() {
    this.elementArr = [
      { key: 0, value: 1 },
      { key: 1, value: 2 },
      { key: 2, value: 3 },
      { key: 3, value: 4 }
    ];
  }

  uniqueItem(index, item) {
    return item.value;
  }

  handleAdd() {
    this.elementArr[0].value = 10;
  }
}
