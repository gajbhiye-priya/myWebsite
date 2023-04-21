import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { BottomSheetSecondComponent } from './components/bottom-sheet-second/bottom-sheet-second.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageSecondComponent } from './components/page-second/page-second.component';
import { CreateRegistrationComponent } from './components/create-registration/create-registration.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { CardComponent } from './components/card/card.component';
import { ParentTaskComponent } from './components/parent-task/parent-task.component';
import { ChildTaskComponent } from './components/child-task/child-task.component';
import { CrudOperationComponent } from './components/crud-operation/crud-operation.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

const routes: Routes = [
  {path:'parent', component:ParentComponent},
  {path:'child', component:ChildComponent},
  {path:'header', component:HeaderComponent},
  {path:'login', component:LoginComponent},
  {path:'bottom-sheet', component:BottomSheetComponent},
  {path:'bottom-sheet-second', component:BottomSheetSecondComponent},
  {path:'page-one', component:PageOneComponent},
  {path:'page-second', component:PageSecondComponent},
  {path:'', redirectTo:'create-registration', pathMatch:'full'},
  {path:'create-registration', component:CreateRegistrationComponent},
  {path:'registration-list', component:RegistrationListComponent},
  {path:'event-binding', component:EventBindingComponent},
  {path:'card', component:CardComponent},
  {path:'parent-task', component:ParentTaskComponent},
  {path:'child-task', component:ChildTaskComponent},
  {path:'crud-operation', component:CrudOperationComponent},
  {path:'create-form', component:CreateFormComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
