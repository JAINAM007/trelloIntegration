import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.css']
})
export class CardCreationComponent {
  cardTitle: string ='';
  cardDescription: string = '';
  cardCreationDate: string = '';

  constructor(private http: HttpClient,

    private router: Router,
    private route: ActivatedRoute) {}
    token: string | null = "";
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.token = params['token'];
        
        // if (token) {
        //   // Token is present, you can use it for further operations
        //   console.log(token);
          
        //   // Call your card creation method with the token
        //   this.createCard(token);
        // } else {
        //   // Token is not present, handle the error or redirect as needed
        //   console.error('Token not found in the URL');
        // }
      });
    }
    cardData: any = {};
  createCard() {
  
    const cardData = {
      name: this.cardTitle,
      description: this.cardDescription,
      creationDate: this.cardCreationDate
    };
     

    // Make the HTTP POST request to the backend card creation route
    this.http.post(`${environment.apiUrl}/cards?token=${this.token}`, {...cardData}).subscribe(

     
    
      (response) => {
        
      },
      (error) => {
        
      }
    );
  }

  logout() {
    // I will create seprate logout component in which I can destory token from cookie
    this.router.navigateByUrl('/api/login');
  }

}
