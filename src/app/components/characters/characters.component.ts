import { Component } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  page: number = 1;
  characters: Character[] = [];

  constructor(private characterService : CharacterService) { }

  incrementPage() {
    this.page = this.page + 1;
    this.getData(this.page)
  }
  
  // Esta vaina se ejecuta cuando se renderiza el servidor
  ngOnInit(): void {
    this.getData(this.page)
  }

  getData(page:number = 1) {
    this.characterService.getCharacters(this.page).subscribe((res) => this.characters = res.results)
  }
}
