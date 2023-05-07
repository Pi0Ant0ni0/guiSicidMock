import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; import { SaveEventCommand } from 'src/app/api/model/legal-files.model';
import { LegalFilesService } from 'src/app/api/services/legal-files.service';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent {
  public addLegalFileForm: FormGroup;

  constructor(
    private _dialogRef: MatDialogRef<AddEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public legalFileId: number,
    private _legalFilesService: LegalFilesService,
    private _formBuilder: FormBuilder
  ) {

    this.addLegalFileForm = this._formBuilder.group({
      id: [null, Validators.required],
      date: [null, Validators.required],
      event: [null, Validators.required],
      registrationDate: [null, Validators.required],
      legalFile: this._formBuilder.group({
        id: [null, Validators.required],
        nrg: [null, Validators.required],
        office: [null, Validators.required],
        section: [null, Validators.required],
        judge: [null, Validators.required],
        object: this._formBuilder.group({
          objectCode: [null, Validators.required],
          object: [null, Validators.required]
        })
      })
    })
  }
  public close() {
    this._dialogRef.close();
  }

  public save() {
    console.log(this.addLegalFileForm.value);
    if (this.addLegalFileForm.valid) {
      let command: SaveEventCommand = new SaveEventCommand();
      Object.assign(command, this.addLegalFileForm.value);
      console.log(command);
      this._legalFilesService.addEventToLegalFile(this.legalFileId, command).subscribe(() => {
        this.addLegalFileForm.disable();
      });
    }
  }

}
