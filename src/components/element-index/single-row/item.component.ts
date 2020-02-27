import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  itemNum: {key:  number, value: number} | undefined;
  
  @Input() set id(id:  {key: number, value:number}){
    console.log("id:", id)
    this.itemNum  = id ;
  }
  constructor() { }

  ngOnInit() {
  }

}
