import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from  '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { WsService } from "../../../cp-common/services/restapi/ws.service";

declare global {
  interface Window { cpEvents: any; }
}

@Component({
  selector: 'capability-configuration',
  templateUrl: './capability-configuration.component.html',
  styleUrls: ['./capability-configuration.component.less']
})
export class CapabilityConfigurationComponent implements OnInit {

  @ViewChild('f') capabilityForm: NgForm | undefined;
  details: string | undefined;
  title: string | undefined;
  subscriptionId: string = '';
  dataPlaneId: string = '';
  loading: boolean = false;
  dataPlanes = [];
  versions = [
    {
      id: 1,
      text: '1.1 - Version',
      value: '1.1 - Version'
    }
  ];
  breadcrumbItems = [
    {
      text: 'Configuration',
      isActive: true
    },
    {
      text: 'Provision instructions',
      disabled: true
    }
  ];
  requestObj: any;
  payload: any;
  cpEvents: any = window.cpEvents;

  private selectedVersion: string | undefined;
  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private toastr: ToastrService,
              private wsService: WsService) { }

  ngOnInit(): void {
    this.details = '<p>To Data Plane:</p><p>This will install the following capabilities:</p><ul><li>BWCE build capability</li><li>Metric collections</li><li>Deployer capability</li></ul>';
    this.dataPlaneId = this.activeRouter.snapshot.queryParams['dpId'];
    this.subscribeEvents();
    this.getUserDetails();
  }

  subscribeEvents() {
    const metadataResp = this.cpEvents.subscribe('CP_CAPABILITY_METADATA_RESPONSE', (event: any) => {
      console.log('Received metadata', event.detail);
      this.requestObj = event.detail.metadata.data[0];
      this.cpEvents.unsubscribe(metadataResp);
    });
    this.cpEvents.emit('CP_CAPABILITY_METADATA_REQUEST', {version: '1.0.0', type: 'TETRIS', dpid: this.dataPlaneId});

    const provisionResp = this.cpEvents.subscribe('CP_PROVISION_CAPABILITY_RESPONSE', (event: any) => {
      if (event.detail.errorMsg) {
        this.toastr.error(event.detail.errorMsg);
        this.loading = false;
      } else {
        this.toastr.success(event.detail.message || event.detail.errorMsg || 'Capability provisioned successfully');
        this.cpEvents.unsubscribe(provisionResp);
        this.router.navigate(['bwce', 'capability', 'instructions']);
      }
    });
  }

  getUserDetails() {
    this.wsService.getUser().subscribe(
      response => {
        this.subscriptionId = response.sexp.hasOwnProperty('TP') && new Date(response.sexp.TP * 1000) >= new Date() ? response.gsbc : '';
        // this.getDataPlanes();
      }, error => {
        console.log(error);
      }
    )
  }

  /*getDataPlanes() {
    this.wsService.getDataPlanes(this.subscriptionId).subscribe(
      response => {
        this.dataPlanes = response;
        if (this.dataPlanes.length > 0) {
          this.dataPlaneId =  this.dataPlanes[0]['dp_id'];
        }
      }, error => {
        console.log(error);
      }
    )
  }*/

  onVersionSelected (event: any) {
    this.selectedVersion = event.value;
  }

  provision() {
    if (this.loading) {
      return;
    }

    this.payload = {
      subscriptionId: this.subscriptionId,
      dataPlaneId: this.dataPlaneId,
      payload: this.requestObj
    };
    this.loading = true;
    this.toastr.clear();
    this.cpEvents.emit('CP_PROVISION_CAPABILITY_REQUEST', this.payload);
  }

  onBackToSelectCapability() {
    this.router.navigate(['/capability/choose'], {queryParams: {dpId: this.dataPlaneId}});
  }

}
