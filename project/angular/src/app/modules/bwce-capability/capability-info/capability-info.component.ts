import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'capability-info',
  templateUrl: './capability-info.component.html',
  styleUrls: ['./capability-info.component.less']
})
export class CapabilityInfoComponent implements OnInit {
  title: string | undefined;
  description: string | undefined;
  details: string | undefined;
  dpId: string | null | undefined;
  breadcrumbItems = [
    {
      text: 'Configuration'/*,
      url: '/capability/configuration/bwce?dpId=' + this.dataPlaneId*/
    },
    {
      text: 'Provision instructions',
      isActive: true
    }
  ];
  instructions: any = [
    {
      namespace: "TIBCO",
      command: "Kubect1 apply -f  https://kubernetes.tenant-integration.tcie.pro/v3/import/ ll8nnk6p2drtgrx57jcpp9thcyrbcj_c-m-jj69ncxhyyt7.yaml"
    },
    {
      namespace: "TIB Messaging",
      command: "Kubect1 apply -f  https://kubernetes.tenant-integration.tcie.pro/v3/import/ ll8nnk6p2drtgrx57jcpp9thcyrbcj_c-m-jj69ncxhyyt7.yaml"
    },
    {
      namespace: "Banking",
      command: "Kubect1 apply -f  https://kubernetes.tenant-integration.tcie.pro/v3/import/ ll8nnk6p2drtgrx57jcpp9thcyrbcj_c-m-jj69ncxhyyt7.yaml"
    }
  ];
  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dpId = this.activeRouter.snapshot.paramMap.get('dpId');
    this.details = '<p>To Data Plane:</p><p>This will install the following capabilities:</p><ul><li>BWCE build capability</li><li>Metric collections</li><li>Deployer capability</li></ul>';
  }

  goBack() {
    // this.router.navigate(['bwce', 'capability', 'configuration'], {queryParams: {dpId: this.dpId}});
    window.history.pushState("", "My TIBCO Cloud™", '/dashboard');
  }

  copyCommand(text: string) {
   navigator.clipboard.writeText(text);
   this.toastr.info('Copied');
  }
}
