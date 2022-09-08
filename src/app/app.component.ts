import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'sebastian guerrero';
  obj = {
    nombre: 'fernando'
  }

  mostrarNombre(){
    console.log( this.nombre )
  }

}

