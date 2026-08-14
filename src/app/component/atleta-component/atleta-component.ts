import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AtletaService } from '../../service/atleta-service';
import { Pessoa } from '../../models/Pessoa';


@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
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
      this.cpf = 0
      this.sexo = ''
      this.cep = 0
      this.ruaLogradouro = ''
      this.bairro = ''
      this.cidade = ''
      this.uf = ''
    }
  }


