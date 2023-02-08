import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SubCategoryService } from 'src/app/service/sub-category/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  subCategoryArr: any = [];

  constructor(
    private router: Router,
    private modalController: ModalController,
    private subCategoryService: SubCategoryService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getAllSubCategory();
  }

  getAllSubCategory() {
    let obj = {};
    this.subCategoryService.getAllSubCategory(obj).subscribe((success) => {
      this.subCategoryArr = success.rows
      console.log("success@@@@@@@@@@@@@@@@@@@@@@@", success);
    });
  }

  navigateTo(path, _id) {
    console.log("_id+++++++++++++++++",_id);
    this.router.navigate([path], { queryParams: { _id } });
    this.dismissModal()
  }


  dismissModal(isDismissed: boolean = false) {
    this.modalController.dismiss({
      'dismissed': isDismissed,
    });
  }


}
