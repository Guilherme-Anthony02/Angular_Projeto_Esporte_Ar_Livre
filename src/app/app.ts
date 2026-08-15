import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroCorrida } from './component/cadastro-corrida/cadastro-corrida';
import { AtletaComponent } from './component/atleta-component/atleta-component';


import { MenuComponent } from './component/menu-component/menu-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, CadastroCorrida, AtletaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esporte_ar_livre');
}
