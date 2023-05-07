import {Component, Input, OnInit} from '@angular/core';
import { LegalFileDTO, LegalFileTableItem } from "../../api/model/legal-files.model";
import { LegalFilesService } from "../../api/services/legal-files.service";
import {Observable} from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { TableAction, TableColumn } from 'src/app/api/model/table-model';
import { MatDialog } from '@angular/material/dialog';
import { AddEventDialogComponent } from '../add-event-dialog/add-event-dialog.component';
import { EventsTableDialogComponent } from '../events-table-dialog/events-table-dialog.component';


const _columns: TableColumn[] = [
  { columnLabel: 'id', itemProperty: 'id' },
  { columnLabel: 'nrg', itemProperty: 'nrg' },
  { columnLabel: 'office', itemProperty: 'office' },
  { columnLabel: 'section', itemProperty: 'section' },
  { columnLabel: 'judge', itemProperty: 'judge' },
  { columnLabel: "objectCode", itemProperty: 'objectCode' },
  { columnLabel: "objectDescription", itemProperty: 'object' }
];

@Component({
  selector: 'app-legal-files-table',
  templateUrl: './legal-files-table.component.html',
  styleUrls: ['./legal-files-table.component.css']
})
export class LegalFilesTableComponent implements OnInit{

  @Input() updateTable!: Observable<any> ;
  public dataSource!: DataSource<LegalFileTableItem>;
  public itemTableProperties: TableColumn[] = _columns;
  public actions: TableAction<LegalFileTableItem>[] = [
    {
      actionDescription: "Aggiungi Evento",
      actionIcon: "add",
      isEnabled: () => true,
      action: (legalFile: LegalFileTableItem) => this._dialogService.open(AddEventDialogComponent, { data: legalFile.id })
    },
    {
      actionDescription: "Visualizza Eventi",
      actionIcon: "visibility icon",
      isEnabled: () => true,
      action: (legalFile: LegalFileTableItem) => this._dialogService.open(EventsTableDialogComponent, { data: legalFile.id })
    }
  ]

  constructor(private _legalFilesService: LegalFilesService, private _dialogService: MatDialog) {
    this._getTableItems();
  }

  public get columns(): string[] {
    if (this.actions.length > 0) {
      return [...this.itemTableProperties.map(c => c.columnLabel), "actions"];
    } else {
      return this.itemTableProperties.map(c => c.columnLabel);
    }
  }

  ngOnInit(): void {
    this.updateTable.subscribe(()=>{
      this._getTableItems();
    });
  }


  private _getTableItems(){
    this._legalFilesService.listLegalFiles().subscribe((legalFiles: LegalFileDTO[]) => {
      this.dataSource = new MatTableDataSource(legalFiles.map(legalFile => new LegalFileTableItem(legalFile)));
    });
  }
}
