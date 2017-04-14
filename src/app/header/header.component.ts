import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title = "The Will Will Web"; 
  is_h3_highlight = false;
  counter = 0;
  @Output()
  titleChanged = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  changeTitle(event: MouseEvent){
    this.counter++;
    console.log(event);
    this.title = "kent web";

    this.titleChanged.emit(this.title);
  };

  getStyle(){
    return "yellow";
  };
}
