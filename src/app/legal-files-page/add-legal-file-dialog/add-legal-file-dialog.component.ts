import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {LegalFilesService} from "../../api/services/legal-files.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LegalFileObjectDTO, SaveLegalFilesCommand} from "../../api/model/legal-files.model";
import {OBJECTS} from "../../api/model/OBJECT_CODES";

@Component({
  selector: 'app-add-legal-file-dialog',
  templateUrl: './add-legal-file-dialog.component.html',
  styleUrls: ['./add-legal-file-dialog.component.css']
})
export class AddLegalFileDialogComponent{

  public addLegalFileForm: FormGroup ;
  public objects:LegalFileObjectDTO[] = OBJECTS;

  constructor(
    private _dialogRef: MatDialogRef<AddLegalFileDialogComponent>,
    private _legalFilesService: LegalFilesService,
    private _formBuilder: FormBuilder
    ) {
    this.addLegalFileForm = this._formBuilder.group({
      nrg: [null,Validators.required],
      office: [null,Validators.required],
      section: [null,Validators.required],
      judge: [null,Validators.required],
      objectCode: [null,Validators.required],
      objectDescription: [null,Validators.required]
    });
    this.addLegalFileForm.get("objectDescription")?.valueChanges.subscribe((object: LegalFileObjectDTO)=>{
      this.addLegalFileForm.get("objectCode")?.patchValue(object.objectCode);
    });
  }
  public close(){
    this._dialogRef.close(false);
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
        this._dialogRef.close(true);
      });
    }
  }


}
