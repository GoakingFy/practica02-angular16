import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private _nombre: string = 'iron man';
  
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public get nombreMayuscula():string{
    return this._nombre.toUpperCase()
  }

  public get dimeDesc() :string{
    return this._nombre + '-' + this.edad
  }

  edad : number = 45;

  cambiarNombre() : void {
    this._nombre = 'pepe'
  }

  cambiarEdad() : void {
    this.edad = 34
  }

  resetElm():void{
    this._nombre = 'Iron Man'
    this.edad = 45
  }

  


}
