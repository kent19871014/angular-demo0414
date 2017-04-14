import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "The Will Will Web"; 
  is_h3_highlight = false;
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  changeTitle(event: MouseEvent){
    this.counter++;
    console.log(event);
    this.title = "kent web";
  };

  getStyle(){
    return "yellow";
  };
}
