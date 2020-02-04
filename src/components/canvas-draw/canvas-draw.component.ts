import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-canvas-draw',
  templateUrl: './canvas-draw.component.html',
  styleUrls: ['./canvas-draw.component.scss']
})
export class CanvasDrawComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasEl') canvasEl: ElementRef;

  private context: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.context = (this.canvasEl
      .nativeElement as HTMLCanvasElement).getContext('2d');

    this.draw();
  }

  draw() {
    this.context.font = '30px Arial';
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';

    const x = (this.canvasEl.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.canvasEl.nativeElement as HTMLCanvasElement).height / 2;
    this.context.fillStyle="blue";
    this.context.fillRect(0, 0, x*2, y*2);
    this.context.fillStyle="black";
    this.context.fillText('canvas', x, y);
    
  }
}
