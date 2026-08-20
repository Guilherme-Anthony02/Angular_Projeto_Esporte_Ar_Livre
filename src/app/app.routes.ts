import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CadastroCorrida } from './component/cadastro-corrida/cadastro-corrida';
import { AtletaListaComponent } from './component/atleta-lista-component/atleta-lista-component';
import { CorridaListaComponent } from './corrida-lista-component/corrida-lista-component';


export const routes: Routes = [
    {
        path: '',
        redirectTo:"/home",
        pathMatch: 'full'
    },

    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: "cadastroatleta",
        component:AtletaComponent
    },

    {
        path:"cadastroatleta/:id",
        component:AtletaComponent
    },
    {
        path:"listaatleta",
        component:AtletaListaComponent
    },

    {
        path: "Cadastro_Corrida",
        component: CadastroCorrida
    },

    {
        path: "alteracorrida/:id",
        component: CadastroCorrida
    },

    {
        path: "listacorrida",
        component: CorridaListaComponent
    },

];
