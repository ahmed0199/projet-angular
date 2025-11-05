import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { futurDateValidator } from '../../../shared/validators/futur-date.validator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm!: FormGroup;

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30)
      ]),
      date: new FormControl('', Validators.required,futurDateValidator),
      lieu: new FormControl('', Validators.required),
      prix: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+(\\.\\d+)?$')
      ]),
      nbPlaces: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$|^100$')
      ]),
      imageUrl: new FormControl('')
    });
  }

  // Getters pour accéder facilement aux champs dans le HTML
  get titre() { return this.eventForm.get('titre'); }
  get description() { return this.eventForm.get('description'); }
  get date() { return this.eventForm.get('date'); }
  get lieu() { return this.eventForm.get('lieu'); }
  get prix() { return this.eventForm.get('prix'); }
  get nbPlaces() { return this.eventForm.get('nbPlaces'); }

  onSubmit() {
    if (this.eventForm.valid) {
      const newEvent = {
        ...this.eventForm.value,
        id: null,               // auto-incrémenté côté backend
        nbLikes: 0,
        organisateurId: 1
      };
      console.log('✅ Événement ajouté :', newEvent);
    } else {
      console.log('❌ Formulaire invalide');
    }
  }
}
