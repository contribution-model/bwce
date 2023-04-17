import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(item: any) {
    if (!item.disabled && item.url) {
      this.router.navigate([item.url]);
    }
  }

}
