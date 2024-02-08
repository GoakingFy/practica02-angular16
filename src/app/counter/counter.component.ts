import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1 class="titulo">Nuestra app se llama {{title}}</h1>
  <div class="container">
    <p class="contador">{{counter}}</p>
    <div class="botones">
      <input type="button" value="+1" (click)="sumar()" class="boton-sumar">
      <input type="button" value="reset" (click)="reset()" class="boton-reset">
      <input type="button" value="-1" (click)="restar()" class="boton-restar">
    </div>
  </div>
  `,
  styles: ``
})
export class CounterComponent {
  private _title: string = 'proyecto_angular16';
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  private _counter: number = 0;
  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }
  sumar():void {
    this.counter++;
  }
  restar():void {
    this.counter--;
  }
  reset():void {
    this.counter = 0;
  }
}
