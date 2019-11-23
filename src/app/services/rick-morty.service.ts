import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const baseUrl = "https://rickandmortyapi.com/api/";
const characterUrl = `${baseUrl}character/`;

@Injectable({
  providedIn: "root"
})
export class RickMortyService {
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(characterUrl); // Un fetch
  }
}
