import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  eventForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      titre: new FormControl('Toto', Validators.required)
    });
  }}

