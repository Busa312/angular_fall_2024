import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        canActivate: [AuthGuard]
      }
    ])
  ]
})
export class UserModule { }
