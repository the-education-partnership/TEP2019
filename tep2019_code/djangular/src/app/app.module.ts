import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { PhonePipe } from './phone.pipe';
import { BoolPipe } from './bool.pipe';
import { TeacherCreateComponent } from './teacher-create/teacher-create.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderItemListComponent } from './order-item-list/order-item-list.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolCreateComponent } from './school-create/school-create.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FilterPipe } from './filter.pipe';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PwdGeneratorComponent } from './pwd-generator/pwd-generator.component';
import { ExportCsvComponent } from './export-csv/export-csv.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    PhonePipe,
    BoolPipe,
    ItemListComponent,
    ItemCreateComponent,
    TeacherListComponent,
    TeacherCreateComponent,
    OrderListComponent,
    OrderItemListComponent,
    InlineEditComponent,
    SchoolListComponent,
    SchoolCreateComponent,
    OrderDetailComponent,
    TeacherDetailComponent,
    ItemDetailComponent,
    TeacherFormComponent,
    FilterPipe,
    FileUploadComponent,
    PwdGeneratorComponent,
    ExportCsvComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    PdfViewerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
  ],
  entryComponents: [
    ItemCreateComponent,
    TeacherCreateComponent,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }