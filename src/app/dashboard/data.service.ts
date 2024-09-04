import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

export interface Property {
    location: string;
    contact: string;
    furnished: boolean;
    amenities: string[];
    vegetarian: boolean;
    photos: string[];
    comments: Comment[];
}

export interface Comment {
    username: string;
    text: string;
  }

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private authService: AuthService) {}
    
    private properties: Property[] = [
        {
            location: 'City A, Spring Residence',
            contact: '123-456-7890',
            furnished: true,
            amenities: ['Gym', 'Elevator', 'Club House'],
            vegetarian: true,
            comments: [
                { username: 'admin', text: 'Great property!' }
            ],
            photos: ['assets/bunglow.jpg']
        },

    ];

    getProperties() {
        return this.properties;
    }

    addProperty(property: Property) {
        this.properties.push(property);
        console.log(JSON.stringify(property));
    }

    getRandomProperty(): Property {
        return this.properties[Math.floor(Math.random() * this.properties.length)];
    }

    addComment(propertyIndex: number, text: string) {
        const username = this.authService.getUsername();
        if (username) {
          const comment: Comment = { username, text };
          this.properties[propertyIndex].comments.push(comment);
        } else {
          console.log('No user is logged in');
        }
      }
}
