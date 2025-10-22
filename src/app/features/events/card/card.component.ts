import { Component, Input, Output } from '@angular/core';
import { Event } from '../../../models/event';
import { EventEmitter } from 'stream';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() event:Event;
  @Output() notifLike:EventEmitter<Event> = new EventEmitter();

}
