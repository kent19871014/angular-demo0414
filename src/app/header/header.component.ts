import { DataService } from './../data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  is_h3_highlight = false;
  counter = 0;
  
  constructor(private datasvc: DataService) { 
  }

  ngOnInit() {
  }

  changeTitle(event: MouseEvent){
    this.datasvc.title = "The Will Will Web";
    this.counter++;
    console.log(event);
  };

  getStyle(){
    return "yellow";
  };
}
