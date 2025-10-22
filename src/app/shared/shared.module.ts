import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipePipe } from './pipe/pipe.pipe';



@NgModule({
  declarations: [
    PipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
