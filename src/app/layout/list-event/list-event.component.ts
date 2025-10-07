import { Component } from '@angular/core';
import { Event } from './../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
    today = new Date();

  EVENTS: Event[] = [
  {
    id: 1,
    titre: "Concert Jazz",
    description: "Un concert exceptionnel avec des artistes internationaux.",
    date: new Date("2025-10-15T20:00:00"),
    lieu: "Théâtre Municipal",
    prix: 50,
    organisateurId: 101,
    imageUrl: "assets/images/jazz.jpg",
    nbPlaces: 200,
    nbrLikes: 35
  },
  {
    id: 2,
    titre: "Conférence Tech IA",
    description: "Discussion autour des dernières tendances en intelligence artificielle.",
    date: new Date("2025-11-02T09:00:00"),
    lieu: "Centre de Congrès",
    prix: 0, // gratuit
    organisateurId: 102,
    imageUrl: "assets/images/ai_conf.jpg",
    nbPlaces: 500,
    nbrLikes: 120
  },
  {
    id: 3,
    titre: "Atelier Cuisine",
    description: "Apprenez à préparer des plats traditionnels tunisiens.",
    date: new Date("2025-12-05T14:30:00"),
    lieu: "Espace Culturel",
    prix: 25,
    organisateurId: 103,
    imageUrl: "assets/images/cuisine.jpg",
    nbPlaces: 30,
    nbrLikes: 48
  },
  {
    id: 4,
    titre: "Marathon Carthage",
    description: "Une course sportive à travers les sites historiques.",
    date: new Date("2026-01-20T07:00:00"),
    lieu: "Carthage",
    prix: 10,
    organisateurId: 104,
    imageUrl: "assets/images/marathon.jpg",
    nbPlaces: 1000,
    nbrLikes: 300
  }
];
isExpired(e: Event): boolean {
    return e.date < this.today;
  }

  like(e: Event): void {
    if (this.isExpired(e) || e.nbPlaces <= 0) return;
    e.nbrLikes++;
  }

}
