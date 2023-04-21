import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { BottomSheetSecondComponent } from './components/bottom-sheet-second/bottom-sheet-second.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageSecondComponent } from './components/page-second/page-second.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateRegistrationComponent } from './components/create-registration/create-registration.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserRegistrationService } from './services/user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { CardComponent } from './components/card/card.component';
import { ParentTaskComponent } from './components/parent-task/parent-task.component';
import { ChildTaskComponent } from './components/child-task/child-task.component';
import { CrudOperationComponent } from './components/crud-operation/crud-operation.component';
import { CreateFormComponent } from './components/create-form/create-form.component';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    LoginComponent,
    BottomSheetComponent,
    BottomSheetSecondComponent,
    PageOneComponent,
    PageSecondComponent,
    CreateRegistrationComponent,
    RegistrationListComponent,
    UserDetailsComponent,
    EventBindingComponent,
    CardComponent,
    ParentTaskComponent,
    ChildTaskComponent,
    CrudOperationComponent,
    CreateFormComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    NgToastModule,
    NgConfirmModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule



  ],
  providers: [
    UserRegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
