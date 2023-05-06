import {Component, OnInit} from '@angular/core';
import {LegalFilesService} from "../api/services/legal-files.service";
import {LegalFilesDTO} from "../api/model/legal-files.model";
import {MatTableDataSource} from "@angular/material/table";

const displayedColumns = [
  'id',
  'nrg',
  'office',
  'section',
  'judge',
  "objectCode",
  "objectDescription",
  'actions',
];

@Component({
  selector: 'app-legal-files-table',
  templateUrl: './legal-files-table.component.html',
  styleUrls: ['./legal-files-table.component.css']
})


export class LegalFilesTableComponent  implements  OnInit{

  public dataSource: MatTableDataSource<LegalFileTableItem>= new MatTableDataSource();
  public displayedColumns = displayedColumns;
  public actions: string[] =["aggiungi Evento"];


  constructor(private _legalFilesService: LegalFilesService) {
  }


  ngOnInit(): void {
    console.log("componente caricato");

    this.dataSource.data = [{id:1, nrg:"nrg", judge:"judge",object:{object:"object",objectCode:"code"}, section:"section",office:"office"},{id:1, nrg:"nrg", judge:"judge",object:{object:"object",objectCode:"code"}, section:"section",office:"office"}].map(l=> {
      return {id:l.id, judge:l.judge, nrg: l.nrg, object:l.object.object, objectCode: l.object.objectCode, office:l.office, section:l.section};
    });


    this._legalFilesService.listLegalFiles().subscribe((legalFiles:LegalFilesDTO[])=>{
      this.dataSource.data=legalFiles.map(l=> {
        return {id:l.id, judge:l.judge, nrg: l.nrg, object:l.object.object, objectCode: l.object.objectCode, office:l.office, section:l.section};
      });
    });
  }

}


class LegalFileTableItem {
  // @ts-ignore
  public id:number;
  // @ts-ignore
  public nrg:string;
  // @ts-ignore
  public section:string;

  // @ts-ignore
  public office:string;
  // @ts-ignore
  public judge:string;

  // @ts-ignore
  public objectCode:string;
  // @ts-ignore
  public object:string;
}
