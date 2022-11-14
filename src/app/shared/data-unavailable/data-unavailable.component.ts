import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-unavailable',
  templateUrl: './data-unavailable.component.html',
})
export class DataUnavailableComponent implements OnInit {

  @Input() customText;
  @Input() routingPath: string = null;
  @Input() buttonText: string = null;
  constructor(private routing: Router) { }

  ngOnInit() { }

  navigateTo() {
    if (this.routingPath) {
      this.routing.navigateByUrl(this.routingPath)
    }
  }
}
