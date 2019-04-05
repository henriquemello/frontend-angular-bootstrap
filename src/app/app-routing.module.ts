import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent} from './user/new-user/new-user.component'
import { ListComponent} from './user/list/list.component'

const routes: Routes = [
  { path: 'new-user', component: NewUserComponent,data:{breadcrumb:"Home / Registration" } },
  { path: 'list',  component: ListComponent ,data:{breadcrumb:"Home"}},
  { path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

 
export class AppRoutingModule { }
