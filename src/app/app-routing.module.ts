import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LegalFilesPageComponent} from "./legal-files-page/legal-files-page.component";

const routes: Routes = [
  { path: '', component: LegalFilesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
