import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LegalFilesService } from "./api/services/legal-files.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatMenuModule } from "@angular/material/menu";
import { LegalFilesPageComponent } from './legal-files-page/legal-files-page.component';
import { AddLegalFileDialogComponent } from './legal-files-page/add-legal-file-dialog/add-legal-file-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { LegalFilesTableComponent } from './legal-files-page/legal-files-table/legal-files-table.component';
import { AddEventDialogComponent } from './legal-files-page/add-event-dialog/add-event-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventsTableDialogComponent } from './legal-files-page/events-table-dialog/events-table-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    LegalFilesPageComponent,
    AddLegalFileDialogComponent,
    LegalFilesTableComponent,
    AddEventDialogComponent,
    EventsTableDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [LegalFilesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
