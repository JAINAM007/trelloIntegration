import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})

export class CardDisplayComponent implements OnInit {
  cards: any[] | null = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) {}


  ngOnInit() {
    
    this.route.fragment.subscribe((fragment: string | null) => {
      
      if (fragment) {
      const token = new URLSearchParams(fragment).get('token');
       // Output the token
      if (token){
      this.retrieveCards(token);
      }
      }
      else{
        alert("UnAuthorized");
        this.router.navigateByUrl('/login');
      }
    });
   }

  retrieveCards(token:string) {
    
    // Make the HTTP GET request to the backend card retrieval route
    // Build the URL with the token as a query parameter
    const url = `http://localhost:3000/api/cards?token=${token}`;
this.http.get<any[]>(url, { observe: 'response' }).subscribe({
  next: (response: HttpResponse<any[]>) => {
   
   
    if (response.status === 200) {
   
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

  redirectToCreateCard() {
    const token = new URLSearchParams(window.location.hash.substr(1)).get('token');
    console.log(token);
    if (token) {
      this.router.navigateByUrl(`api/cards/create?token=${token}`);
    } else {
      // Handle case where token is not available
      // Redirect or display an error message
    }
  }

  logout() {
    // Perform the necessary logout actions
    // For example, clear the user session, remove tokens, etc.
  
    // Redirect the user to the login page
    this.router.navigateByUrl('/api/login');
  }
}