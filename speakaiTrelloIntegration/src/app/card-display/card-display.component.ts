import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})

export class CardDisplayComponent implements OnInit {
  cards: any[] | null = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) {}


  ngOnInit() {
    
    this.route.fragment.subscribe((fragment: string | null) => {
      
      if (fragment) {
      const token = new URLSearchParams(fragment).get('token');
      console.log(token); // Output the token
      if (token){
      this.retrieveCards(token);
      }
      }
      else{
        alert("UnAuthorized");
      }
    });
   }

  retrieveCards(token:string) {
    console.log("2222222222");
    // Make the HTTP GET request to the backend card retrieval route
    // Build the URL with the token as a query parameter
    const url = `http://localhost:3000/api/cards?token=${token}`;
this.http.get<any[]>(url, { observe: 'response' }).subscribe({
  next: (response: HttpResponse<any[]>) => {
    console.log(response);
    console.log("11111111");
    if (response.status === 200) {
      console.log("2222222222");
      this.cards = response.body;
    } else{
      alert("UnAuthorized");
    }
  },
  error: (error) => {
    // Handle the error
    console.error(error);
  }}
    );
  }
}