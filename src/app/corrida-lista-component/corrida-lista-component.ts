import { Component, signal } from '@angular/core';
import { CorridaService } from '../service/corrida-service';
import { Corrida } from '../models/Corrida';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corrida-lista-component',
  imports: [],
  templateUrl: './corrida-lista-component.html',
  styleUrl: './corrida-lista-component.css',
})
export class CorridaListaComponent {

  listaCorridas = signal<Corrida[]>([])
 

  constructor(
    private corridaService: CorridaService,
    private router: Router
    ) { }

  ngOnInit() {
    this.listar()
  }


  //listar
  listar() {
    this.corridaService.listarCorridas()
      .subscribe({
        next: (dadosCorrida) => {
          this.listaCorridas.set([...dadosCorrida])
        },
        error: (msgErro) => {
          console.log(msgErro)
        }
      })
  }

  excluir(objCorrida: Corrida) {
    if (confirm(`Deseja excluir a corrida ${objCorrida.descricaoCorrida}`)) {
      this.corridaService.excluirCorrida(objCorrida.id)
        .subscribe({
          next: (repostaAPI) => {
            this.listaCorridas.update(elem =>
              elem.filter(a => a.id !== objCorrida.id)            )
            console.log('Atleta excluído com Sucesso ', repostaAPI)
          },
          error: (msgErro: any) => {
            return msgErro
          }
        })
    }

    this.ngOnInit()

  }

  carregandoDadosForm(objCorrida: Corrida){

    this.router.navigate(["/alteracorrida", objCorrida.id])
  }


}