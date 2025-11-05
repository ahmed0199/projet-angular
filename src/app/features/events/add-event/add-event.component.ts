import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
        Validators.pattern('^[a-zA-Z ]*$') // lettres + espaces
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30)
      ]),
      date: new FormControl('', Validators.required),
      lieu: new FormControl('', Validators.required),
      prix: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+(\\.\\d+)?$') // chiffres et point décimal
      ]),
      imageUrl: new FormControl(''), // optionnel
      nbPlaces: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$|^100$') // 1..100
      ])
    });
  }

  // getter pratique (optionnel)
  get f() {
    return this.eventForm.controls;
  }

  /**
   * Retourne true si le contrôle a l'erreur demandée
   * et si l'utilisateur a déjà interagi avec le contrôle.
   */
  hasError(controlName: string, errorName: string): boolean {
    const ctrl = this.eventForm.get(controlName);
    if (!ctrl) return false;
    return ctrl.hasError(errorName) && (ctrl.touched || ctrl.dirty);
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const newEvent = {
        ...this.eventForm.value,
        nbLikes: 0,
        organisateurId: 1
      };

      console.log('✅ Événement ajouté :', newEvent);
      alert('🎉 Événement ajouté avec succès !');
      this.eventForm.reset();
    } else {
      this.eventForm.markAllAsTouched();
    }
  }
}
