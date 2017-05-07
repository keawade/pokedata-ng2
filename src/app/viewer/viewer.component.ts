import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @Input()
  current: IPokemon = undefined;

  constructor() { }

  viewData = {
    
  }

  ngOnInit() {
    this.current.name = this.current.name.split('-').map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
  }

  ngOnChanges() {
    this.current.name = this.current.name.split('-').map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
  }
}
