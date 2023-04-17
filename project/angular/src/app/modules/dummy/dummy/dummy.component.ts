import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'sample-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.less']
})
export class DummyComponent implements OnInit {
  title: string | undefined = "Angular Single-SPA app";
  isChildrenLoaded: boolean = false;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.isChildrenLoaded = this.activeRouter.children.length > 0;
    this.router.events.subscribe(e => {
      this.isChildrenLoaded = this.activeRouter.children.length > 0;
    });
  }

  loadDummyChild() {
    this.router.navigate(['angular/dummy']);
  }
}
