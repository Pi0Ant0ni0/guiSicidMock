
export class LegalFilesDTO{
  // @ts-ignore
  public id:number;
  // @ts-ignore
  public nrg:string;
  // @ts-ignore
  public section:string;

  //@ts-ignore
  public office:string;
  // @ts-ignore
  public judge:string;
  // @ts-ignore

  public object:LegalFileObjectDTO;
}

export class LegalFileObjectDTO{
  // @ts-ignore

  public objectCode:string;
  // @ts-ignore

  public object:string;
}

export class SaveLegalFilesCommand extends LegalFilesDTO{

}


export class EventDTO{
  // @ts-ignore
  public id:number;
  // @ts-ignore
  public date: Date;
  // @ts-ignore
  public event:string;
  // @ts-ignore
  public registrationDate:Date;
  // @ts-ignore
  public legalFile:LegalFilesDTO;
}

export class SaveEventCommand extends EventDTO{}
