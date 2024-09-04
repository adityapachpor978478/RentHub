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
            "location": "Kalyani Nagar, Pune",
            "contact": "123-456-7890",
            "furnished": true,
            "amenities": ["Gym", "Elevator", "Club House"],
            "vegetarian": true,
            "comments": [
                { "username": "Steve", "text": "Great property!" }
            ],
            "photos": ["assets/kalyani1.jpg", "assets/kalyani2.jpg", "assets/kalyani3.jpg"]
        },
        {
            "location": "Vasai, Mumbai",
            "contact": "987-654-3210",
            "furnished": false,
            "amenities": ["Parking"],
            "vegetarian": false,
            "comments": [
                { "username": "Anna", "text": "Perfect location!" }
            ],
            "photos": ["assets/vasai1.jpg", "assets/vasai2.jpg", "assets/vasai3.jpg"]
        },
        {
            "location": "Kondhwa, Pune",
            "contact": "555-666-7777",
            "furnished": true,
            "amenities": ["Club House", "Parking"],
            "vegetarian": true,
            "comments": [
                { "username": "John", "text": "Loved the clubhouse!" }
            ],
            "photos": ["assets/kondhwa1.avif", "assets/kondhwa2.avif", "assets/kondhwa3.avif"]
        },
        {
            "location": "Mira Road, Mumbai",
            "contact": "444-555-6666",
            "furnished": false,
            "amenities": ["Gym", "Elevator"],
            "vegetarian": false,
            "comments": [
                { "username": "Rachel", "text": "Nice gym facility!" }
            ],
            "photos": ["assets/mira1.jpg","assets/mira2.jpg","assets/mira3.jpg"]
        },
        {
            "location": "Pashan, Pune",
            "contact": "111-222-3333",
            "furnished": true,
            "amenities": ["Parking", "Club House"],
            "vegetarian": true,
            "comments": [
                { "username": "Alex", "text": "Great for families!" }
            ],
            "photos": ["assets/pashan1.jpg","assets/pashan2.jpg","assets/pashan3.jpg"]
        },
        {
            "location": "Ghatkopar, Mumbai",
            "contact": "222-333-4444",
            "furnished": false,
            "amenities": ["Gym", "Parking"],
            "vegetarian": false,
            "comments": [
                { "username": "Sophia", "text": "Spacious parking!" }
            ],
            "photos": ["assets/ghat1.jpg","assets/ghat2.jpg","assets/ghat3.jpg"]
        },
        {
            "location": "Kothrud, Pune",
            "contact": "333-444-5555",
            "furnished": true,
            "amenities": ["Elevator", "Club House"],
            "vegetarian": true,
            "comments": [
                { "username": "Daniel", "text": "Convenient elevator access." }
            ],
            "photos": ["assets/kothrud1.jpg","assets/kothrud2.jpg","assets/kothrud3.jpg"]
        },
        {
            "location": "Baner, Pune",
            "contact": "666-777-8888",
            "furnished": false,
            "amenities": ["Gym", "Elevator", "Parking"],
            "vegetarian": false,
            "comments": [
                { "username": "Emily", "text": "Well-maintained amenities!" }
            ],
            "photos": ["assets/baner1.avif","assets/baner2.avif","assets/baner3.avif"]
        },
        {
            "location": "Mira Road, Mumbai",
            "contact": "777-888-9999",
            "furnished": true,
            "amenities": ["Club House"],
            "vegetarian": true,
            "comments": [
                { "username": "Chris", "text": "Excellent clubhouse!" }
            ],
            "photos": ["assets/mira21.jpg","assets/mira22.jpg","assets/mira23.jpg"]
        },
        {
            "location": "Dadar, Mumbai",
            "contact": "888-999-0000",
            "furnished": false,
            "amenities": ["Parking", "Club House"],
            "vegetarian": false,
            "comments": [
                { "username": "Olivia", "text": "Good parking space!" }
            ],
            "photos": ["assets/dadar1.jpg","assets/dadar2.jpg","assets/dadar3.jpg"],
        },
        {
            "location": "Kothrud, Pune",
            "contact": "999-000-1111",
            "furnished": true,
            "amenities": ["Gym", "Elevator"],
            "vegetarian": true,
            "comments": [
                { "username": "David", "text": "Loved the gym!" }
            ],
            "photos": ["assets/kothrud21.jpg","assets/kothrud22.jpg","assets/kothrud23.jpg"]
        },
        {
            "location": "Vasai, Mumbai",
            "contact": "000-111-2222",
            "furnished": false,
            "amenities": ["Gym", "Club House"],
            "vegetarian": false,
            "comments": [
                { "username": "Lily", "text": "Nice clubhouse facilities!" }
            ],
            "photos": ["assets/vasai21.jpg", "assets/vasai22.jpg", "assets/vasai23.jpg"]
        },
        {
            "location": "Kalyani Nagar, Pune",
            "contact": "123-987-6543",
            "furnished": true,
            "amenities": ["Parking"],
            "vegetarian": true,
            "comments": [
                { "username": "Mark", "text": "Spacious parking!" }
            ],
            "photos": ["assets/kalyani21.jpg", "assets/kalyani22.jpg", "assets/kalyani23.jpg"]
        },
        // {
        //     "location": "Dadar, Mumbai",
        //     "contact": "456-789-0123",
        //     "furnished": false,
        //     "amenities": ["Gym", "Elevator", "Club House"],
        //     "vegetarian": false,
        //     "comments": [
        //         { "username": "Mia", "text": "Great amenities!" }
        //     ],
        //     "photos": ["assets/dadar21.jpg","assets/dadar22.jpg","assets/dadar23.jpg"]
        // },
        {
            "location": "Pashan, Pune",
            "contact": "789-012-3456",
            "furnished": true,
            "amenities": ["Gym", "Parking"],
            "vegetarian": true,
            "comments": [
                { "username": "Sara", "text": "Loved the gym and parking space!" }
            ],
            "photos": ["assets/pashan21.jpg","assets/pashan22.jpg","assets/pashan23.jpg"]
        },
        {
            "location": "Baner, Pune",
            "contact": "012-345-6789",
            "furnished": false,
            "amenities": ["Elevator", "Parking"],
            "vegetarian": false,
            "comments": [
                { "username": "Michael", "text": "Convenient parking and elevator!" }
            ],
            "photos": ["assets/baner21.avif","assets/baner22.avif","assets/baner23.avif"]
        },
        {
            "location": "Kondhwa, Pune",
            "contact": "234-567-8901",
            "furnished": true,
            "amenities": ["Club House", "Elevator"],
            "vegetarian": true,
            "comments": [
                { "username": "Nathan", "text": "Great clubhouse and elevator access!" }
            ],
            "photos": ["assets/kondhwa21.avif", "assets/kondhwa22.avif", "assets/kondhwa23.avif"]
        },
        {
            "location": "Ghatkopar, Mumbai",
            "contact": "345-678-9012",
            "furnished": false,
            "amenities": ["Gym"],
            "vegetarian": false,
            "comments": [
                { "username": "Isabella", "text": "Well-equipped gym!" }
            ],
            "photos": ["assets/ghat21.jpg","assets/ghat22.jpg","assets/ghat23.jpg"]
        },
        // {
        //     "location": "Kalyani Nagar, Pune",
        //     "contact": "567-890-1234",
        //     "furnished": true,
        //     "amenities": ["Parking", "Elevator"],
        //     "vegetarian": true,
        //     "comments": [
        //         { "username": "James", "text": "Parking and elevator are very convenient!" }
        //     ],
        //     "photos": ["assets/villa5.jpg"]
        // }
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
