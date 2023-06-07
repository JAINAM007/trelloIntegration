import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})

export class CardDisplayComponent implements OnInit {
  cards: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.retrieveCards();
   }

  retrieveCards() {
    // Make the HTTP GET request to the backend card retrieval route
    this.http.get<any[]>('http://localhost:3000/api/cards').subscribe(
      (response) => {
       
        this.cards = response;
      },
      (error) => {
        // Handle the error
        console.error(error);
      }
    );
  }
}