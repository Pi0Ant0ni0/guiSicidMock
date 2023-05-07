import { DataSource } from '@angular/cdk/collections';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { EventDTO } from 'src/app/api/model/legal-files.model';
import { TableAction, TableColumn } from 'src/app/api/model/table-model';
import { LegalFilesService } from 'src/app/api/services/legal-files.service';


const _columns: TableColumn[] = [
  { columnLabel: 'id', itemProperty: 'id' },
  { columnLabel: 'date', itemProperty: 'date' },
  { columnLabel: 'event', itemProperty: 'event' },
  { columnLabel: 'registrationDate', itemProperty: 'registrationDate' },
];


@Component({
  selector: 'app-events-table-dialog',
  templateUrl: './events-table-dialog.component.html',
  styleUrls: ['./events-table-dialog.component.css']
})
export class EventsTableDialogComponent {
  public dataSource!: DataSource<EventDTO>;
  public itemTableProperties: TableColumn[] = _columns;
  public actions: TableAction<EventDTO>[] = [];

  constructor(
    private _dialogRef: DialogRef<EventsTableDialogComponent>,
    private _legalFileService: LegalFilesService,
    @Inject(MAT_DIALOG_DATA) public legalFileId: number,
  ) {

    this._legalFileService.getLegalFileEvents(legalFileId).subscribe((events: EventDTO[]) => {
      this.dataSource = new MatTableDataSource(events);
    });
  }

  public get columns(): string[] {
    return [...this.itemTableProperties.map(c => c.columnLabel), "actions"];
  }
}
