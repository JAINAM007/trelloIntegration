import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.css']
})
export class CardCreationComponent {
  cardTitle: string ='';
  cardDescription: string = '';
  cardCreationDate: string = '';

  constructor(private http: HttpClient) {}

  createCard() {
    const cardData = {
      name: this.cardTitle,
      description: this.cardDescription,
      creationDate: this.cardCreationDate
    };
      
    console.log(cardData.name);
    console.log(cardData.description);
    console.log(cardData.creationDate);

    // Make the HTTP POST request to the backend card creation route
    this.http.post('http://localhost:3000/api/cards', cardData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        
      }
    );
  }

}
