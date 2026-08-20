import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../models/corrida';
import { CorridaService } from '../../service/corrida-service';

@Component({
  selector: 'app-cadastro-corrida',
  imports: [FormsModule],
  templateUrl: './cadastro-corrida.html',
  styleUrl: './cadastro-corrida.css',
})
export class CadastroCorrida {
  id = 0
  descricaoCorrida: string = ''
  dataCorrida: string = ''
  distancia5km = false
  distancia10km = false
  distancia25km = false

  constructor(private corridaService: CorridaService) {}

  dadosFormulario(){
    const corrida = new Corrida()
    corrida.descricaoCorrida = this.descricaoCorrida
    corrida.dataCorrida = this.dataCorrida
    corrida.distancia5km = this.distancia5km
    corrida.distancia10km = this.distancia10km
    corrida.distancia25km = this.distancia25km

    this.corridaService.salvarCorrida(corrida)
  }
  
  limparAtributos(){
    this.descricaoCorrida = ''
    this.dataCorrida = ''
    this.distancia5km = false
    this.distancia10km = false
    this.distancia25km = false
  }


}
