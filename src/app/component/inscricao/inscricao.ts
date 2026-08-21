import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscricao.html',
  styleUrls: ['./inscricao.css'],
})
export class Inscricao {
  atleta = '';
  cpf = '';
  distancia5km = '';
  distancia10km = '';
  distancia25km = '';
  camisetaTamanho = '';
  faixaEtaria = '';

  enviaDadosInscricao() {
    console.log('Inscrição enviada');
  }
}
