import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; import {LegalFileObjectDTO, SaveEventCommand} from 'src/app/api/model/legal-files.model';
import { LegalFilesService } from 'src/app/api/services/legal-files.service';
import {OBJECTS} from "../../api/model/OBJECT_CODES";

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent {
  public addEventForm: FormGroup;
  public objects:LegalFileObjectDTO[] = OBJECTS;

  constructor(
    private _dialogRef: MatDialogRef<AddEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public legalFileId: number,
    private _legalFilesService: LegalFilesService,
    private _formBuilder: FormBuilder
  ) {

    this.addEventForm = this._formBuilder.group({
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
    });
    this.addEventForm.get('legalFile.object.object')!.valueChanges.subscribe((object: LegalFileObjectDTO)=>{
      console.log("value changed");
      this.addEventForm.get("legalFile.object.objectCode")!.patchValue(object.objectCode);
    });
  }
  public close() {
    this._dialogRef.close();
  }

  public save() {
    console.log(this.addEventForm.value);
    if (this.addEventForm.valid) {
      let command: SaveEventCommand = new SaveEventCommand();
      Object.assign(command, this.addEventForm.value);
      console.log(command);
      this._legalFilesService.addEventToLegalFile(this.legalFileId, command).subscribe(() => {
        this.addEventForm.disable();
      });
    }
  }

  protected readonly OBJECTS = OBJECTS;
}
