import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {LegalFilesService} from "../../api/services/legal-files.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LegalFileDTO, SaveLegalFilesCommand} from "../../api/model/legal-files.model";

@Component({
  selector: 'app-add-legal-file-dialog',
  templateUrl: './add-legal-file-dialog.component.html',
  styleUrls: ['./add-legal-file-dialog.component.css']
})
export class AddLegalFileDialogComponent{

  public addLegalFileForm: FormGroup ;

  constructor(
    private _dialogRef: MatDialogRef<AddLegalFileDialogComponent>,
    private _legalFilesService: LegalFilesService,
    private _formBuilder: FormBuilder
    ) {
    this.addLegalFileForm = this._formBuilder.group({
      id: [null,Validators.required],
      nrg: [null,Validators.required],
      office: [null,Validators.required],
      section: [null,Validators.required],
      judge: [null,Validators.required],
      objectCode: [null,Validators.required],
      objectDescription: [null,Validators.required]
    })
  }
  public close(){
    this._dialogRef.close();
  }
  public save(){
    if(this.addLegalFileForm.valid){
      let command :SaveLegalFilesCommand= new SaveLegalFilesCommand();
      Object.assign(command,this.addLegalFileForm.value);
      command.object = {
        object: this.addLegalFileForm.value.objectDescription,
        objectCode: this.addLegalFileForm.value.objectCode
      }
      this._legalFilesService.saveLegalFile(command).subscribe(()=>{
        this.addLegalFileForm.disable();
      });
    }
  }


}
