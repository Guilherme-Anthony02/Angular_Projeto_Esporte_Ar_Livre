import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Atleta } from '../../models/Atleta';
import { Corrida } from '../../models/Corrida';
import { AtletaService } from '../../service/atleta-service';
import { CorridaService } from '../../service/corrida-service';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscricao.html',
  styleUrls: ['./inscricao.css'],
})
export class Inscricao {
  atletas: Atleta[] = [];
  corridas: Corrida[] = [];
  atletaId: number | null = null;
  corridaId: number | null = null;
  distancia5km = '';
  distancia10km = '';
  distancia25km = '';
  camisetaTamanho = '';
  faixaEtaria = '';

  constructor(
    private atletaService: AtletaService,
    private corridaService: CorridaService,
  ) { }

  ngOnInit() {
    this.atletaService.listarAtletas().subscribe({
      next: (atletas) => this.atletas = atletas,
      error: (erro) => console.error('Erro ao listar atletas para inscrição', erro),
    });

    this.corridaService.listarCorridas().subscribe({
      next: (corridas) => this.corridas = corridas,
      error: (erro) => console.error('Erro ao listar corridas para inscrição', erro),
    });
  }

  enviaDadosInscricao() {
    console.log('Inscrição enviada');
  }
}
