import { Component, OnInit } from "@angular/core";

import { RickMortyService } from "../../services/rick-morty.service";

interface CharacterInterface {
  id: number;
  name: string;
  image: string;
}

interface CharacterResponseInterface {
  info: object;
  results: CharacterInterface[];
}

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.scss"]
})
export class CharacterListComponent implements OnInit {
  characterList: object[] = [];

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.rickMortyService
      .getCharacters()
      .subscribe((data: CharacterResponseInterface) => {
        let results: CharacterInterface[] = data.results;

        let formattedResults = results.map(({ id, name, image }) => ({
          id,
          name,
          image
        }));

        this.characterList = [...formattedResults];
      });
  }
}
