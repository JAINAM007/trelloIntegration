import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroment';

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
      


    // Make the HTTP POST request to the backend card creation route
    this.http.post(`${environment.apiUrl}/cards`, cardData).subscribe(
      (response) => {
        
      },
      (error) => {
        
      }
    );
  }

}
