import {Component, EventEmitter} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddLegalFileDialogComponent} from "./add-legal-file-dialog/add-legal-file-dialog.component";

@Component({
  selector: 'app-legal-files-page',
  templateUrl: './legal-files-page.component.html',
  styleUrls: ['./legal-files-page.component.css']
})
export class LegalFilesPageComponent {

  public updateTable:EventEmitter<any>= new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  public addLegalFile(): void {
    this.dialog.open(AddLegalFileDialogComponent).afterClosed().subscribe((saved:boolean)=>{
      if(saved){
        this.updateTable.emit(true);
      }
    })
  }


}
