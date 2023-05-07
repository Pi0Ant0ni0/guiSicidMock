import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EventDTO, LegalFileDTO, SaveEventCommand, SaveLegalFilesCommand } from "../model/legal-files.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LegalFilesService {

  constructor(private _http: HttpClient) { }

  public listLegalFiles(): Observable<LegalFileDTO[]> {
    return this._http.get<LegalFileDTO[]>(environment.services.api.legalFiles);
  }

  public saveLegalFile(command: SaveLegalFilesCommand): Observable<LegalFileDTO> {
    return this._http.post<LegalFileDTO>(environment.services.api.legalFiles, command);
  }

  public getLegalFile(id: number): Observable<LegalFileDTO> {
    return this._http.get<LegalFileDTO>(`${environment.services.api.legalFiles}/${id}`);
  }

  public addEventToLegalFile(legalFileId: number, event: SaveEventCommand): Observable<EventDTO> {
    return this._http.post<EventDTO>(`${environment.services.api.legalFiles}/${legalFileId}/events`, event);
  }

  public getLegalFileEvents(legalFileId: number): Observable<EventDTO[]> {
    return this._http.get<EventDTO[]>(`${environment.services.api.legalFiles}/${legalFileId}/events`);
  }
}
