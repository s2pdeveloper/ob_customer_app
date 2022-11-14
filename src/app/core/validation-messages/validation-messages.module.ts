import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationMessagesPageRoutingModule } from './validation-messages-routing.module';

import { ValidationMessagesPage } from './validation-messages.page';
import { ValidationService } from './validation-messages.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationMessagesPageRoutingModule
  ],
  declarations: [ValidationMessagesPage],
  exports: [ValidationMessagesPage],
  providers:[ValidationService]
})
export class ValidationMessagesPageModule {
  // static forRoot(): ModuleWithProviders<ValidationMessagesPageModule>     {
  //   return {
  //     ngModule: ValidationMessagesPageModule,
  //     providers: [
  //       // AuthGuard, UserService, AlertService,
  //        ValidationService
  //         // JwtInterceptorProvider, ErrorInterceptorProvider, ToastrService
  //       ]
  //   };
  // }
}
