import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames : string [] = ['Superman' , 'Manolo y compañia' , 'mi tio pepe']

  public heroeBorrado: string = ''

  borrarUltimoHeroe():void{
      this.heroeBorrado = String(this.heroNames.pop());
      
  }

}
