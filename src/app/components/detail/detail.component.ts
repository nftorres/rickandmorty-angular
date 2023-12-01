import { Component, inject } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  character: Character = { 
    name: "",
    image: "",
    gender: "",
    species: "",
    status: "",
    created: "",
  }

}
