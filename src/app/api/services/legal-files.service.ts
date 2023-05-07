import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EventDTO, LegalFileDTO, SaveEventCommand, SaveLegalFilesCommand } from "../model/legal-files.model";

@Injectable({
  providedIn: 'root'
})
export class LegalFilesService {

  constructor(private _http: HttpClient) { }

  public listLegalFiles(): Observable<LegalFileDTO[]> {
    return this._http.get<LegalFileDTO[]>(`/legalfiles`);
  }

  public saveLegalFile(command: SaveLegalFilesCommand): Observable<LegalFileDTO> {
    return this._http.post<LegalFileDTO>(`/legalfiles`, command);
  }

  public getLegalFile(id: number): Observable<LegalFileDTO> {
    return this._http.get<LegalFileDTO>(`/legalfiles/${id}`);
  }

  public addEventToLegalFile(legalFileId: number, event: SaveEventCommand): Observable<EventDTO> {
    return this._http.post<EventDTO>(`/legalfiles/${legalFileId}/events`, event);
  }

  public getLegalFileEvents(legalFileId: number): Observable<EventDTO[]> {
    return this._http.get<EventDTO[]>(`/legalfiles/${legalFileId}/events`);
  }
}
