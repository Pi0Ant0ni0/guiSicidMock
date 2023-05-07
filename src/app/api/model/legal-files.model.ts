
export class LegalFileDTO {
  public id!:number;
  public nrg!:string;
  public section!:string;
  public office!:string;
  public judge!:string;
  public object!:LegalFileObjectDTO;
}

export class LegalFileObjectDTO{
  public objectCode!:string;
  public object!:string;
}

export class LegalFileTableItem {
  public id:number;
  public nrg:string;
  public section:string;
  public office:string;
  public judge:string;
  public objectCode:string;
  public object:string;


  constructor(legalFileDTO:LegalFileDTO) {
    this.id = legalFileDTO.id;
    this.nrg = legalFileDTO.nrg;
    this.section = legalFileDTO.section;
    this.office = legalFileDTO.office;
    this.judge = legalFileDTO.judge;
    this.objectCode = legalFileDTO.object.objectCode;
    this.object = legalFileDTO.object.object;
  }
}

export class SaveLegalFilesCommand extends LegalFileDTO{}


export class EventDTO{
  public id!:number;
  public date!: Date;
  public event!:string;
  public registrationDate!:Date;
  public legalFile!:LegalFileDTO;
}

export class SaveEventCommand extends EventDTO{}
