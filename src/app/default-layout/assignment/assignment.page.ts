import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services';
import { RestService } from 'src/app/service/rest/rest.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {
  assignmentDetails: any = {};
  userDetails: any = {};
  title: string;
  image: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private restService: RestService,
    private storageService: StorageService,
    private loaderService: LoaderService,
    private _sanitizer: DomSanitizer,
    private spinner: LoaderService
  ) {}

  ngOnInit() {
    //  this.userDetails = this.storageService.get('OBCustomer');
    // this.getAllAssignmentByBatchId();
  }
  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.getAllAssignmentById(params.id);
    });
  }
  getAllAssignmentById(id) {
    this.spinner.showLoader();
    this.restService.getAllAssignmentById(id).subscribe((success) => {
      this.assignmentDetails = success;
      this.spinner.hideLoader();
    });
  }
}
