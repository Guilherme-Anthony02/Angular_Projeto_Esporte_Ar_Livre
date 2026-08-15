import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CadastroCorrida } from '../../models/Cadastro';

@Component({
  selector: 'app-cadastro-corrida',
  imports: [FormsModule],
  templateUrl: './cadastro-corrida.html',
  styleUrl: './cadastro-corrida.css',
})
export class CadastroCorridaComponent {
  descricaoCorrida: string = ''
  data: Date = new Date
  distancia: string = ''

  constructor(private atletaService: CadastroService){

  }
  
  exibeDados(){
    console.log(this.descricaoCorrida, this.data, this.data)
  }

  
}
