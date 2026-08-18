import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AtletaService } from '../../service/atleta-service';
import { Atleta } from '../../models/Atleta';
import { ChangeDetectorRef } from '@angular/core/types/_discovery-chunk';
import { ActivatedRoute } from '@angular/router/types/_router_module-chunk';
import { Injector } from '../../../../node_modules/@angular/core/types/_chrome_dev_tools_performance-chunk';


@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})

export class AtletaComponent {
  //DELCARAÇÃO DOS ATRIBUTOS DO COMPONENTE
  nome = ''
  cpf = 0
  sexo = ''
  cep = 0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''
  id = 0

  editar = false
  idAtleta = 0

  //DECLARAÇÃO DO CONSTRUTOR  
  constructor(private atletaService: AtletaService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  //DECLARAÇÃO DE FUNÇÕES
  exibeDados() {
    console.log(this.nome, this.cpf, this.sexo, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
  }

  ngOnInit() {
    this.idAtleta = Number(this.route.snapshot.paramMap.get('id'))

    if (this.idAtleta > 0) {
      this.editar = true
      this.carregaCampo(this.idAtleta)
    }

  }

  carregaCampo(idAtleta: number) {
    this.atletaService.listarAtleta(idAtleta)
      .subscribe({
        next: (objAtleta) => {
          this.id = objAtleta.id
          this.nome = objAtleta.nome
          this.cpf = objAtleta.cpf
          this.sexo = objAtleta.sexo
          this.cep = objAtleta.cep
          this.ruaLogradouro = objAtleta.ruaLogradouro
          this.bairro = objAtleta.bairro
          this.cidade = objAtleta.cidade
          this.uf = objAtleta.uf

          this.cdr.detectChanges()
        }, error: (msgErro) => {
          console.log("Erro ao Listar  o atleta ", msgErro)
        }
      })
  }

  enviaDadosAtleta() {
    const pessoaAtleta = new Atleta()
    pessoaAtleta.nome = this.nome
    pessoaAtleta.cpf = this.cpf
    pessoaAtleta.sexo = this.sexo
    pessoaAtleta.cep = this.cep
    pessoaAtleta.ruaLogradouro = this.ruaLogradouro
    pessoaAtleta.bairro = this.bairro
    pessoaAtleta.cidade = this.cidade
    pessoaAtleta.uf = this.uf

    if (!this.editar) {
      this.atletaService.adicionarAtleta(pessoaAtleta)
        .subscribe({
          next: (resposta) => {
            console.log(resposta)
          },
          error: (msgErro) => {
            console.log("Erro ao cadastrar  o atleta ", msgErro)
          }
        })
    } else {
      pessoaAtleta.id = this.idAtleta
      
      this.atletaService.alterarAtleta(pessoaAtleta)
        .subscribe({
          next: (resposta) => {
            console.log(pessoaAtleta)

            console.log(resposta)
          },
          error: (msgErro) => {
            console.log("Erro ao alterar  o atleta ", msgErro)
          }
        })

    }

    this.limparAtributos()

  }

  listaAtleta(idAtleta: number) {
    this.atletaService.listarAtleta(idAtleta)
      .subscribe({
        next: (dados) => {
          console.table(dados)
        },
        error: (msgErro) => {
          console.log("Erro ao listar atletas ", msgErro)
        }
      })
  }

  limparAtributos() {
    this.nome = ''
      this.cpf = 0
      this.sexo = ''
      this.cep = 0
      this.ruaLogradouro = ''
      this.bairro = ''
      this.cidade = ''
      this.uf = ''
  }
}



/*
export class AtletaComponent {
  //declaração dos atributos do componente
  nome = ''
  cpf = ''
  sexo = ''
  cep = ''
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //Declaração do construtor
  constructor(private atletaService: AtletaService){

  }

  //declaração das funções
  exibeDados(){
    console.log(this.nome, this.cpf, this.sexo, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
  }

  salvarAtleta(){
    const pessoaAtleta = new Pessoa()
    pessoaAtleta.nome = this.nome
    pessoaAtleta.cpf = this.cpf
    pessoaAtleta.sexo = this.sexo
    pessoaAtleta.cep = this.cep
    pessoaAtleta.ruaLogradouro = this.ruaLogradouro
    pessoaAtleta.bairro = this.bairro
    pessoaAtleta.cidade = this.cidade
    pessoaAtleta.uf = this.uf

    this.atletaService.adicionar(pessoaAtleta)

    this.atletaService.listar()
  }

    limparAtributos() {
      this.nome = ''
      this.cpf = ''
      this.sexo = ''
      this.cep = ''
      this.ruaLogradouro = ''
      this.bairro = ''
      this.cidade = ''
      this.uf = ''
    }
  }
*/


