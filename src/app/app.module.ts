import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploServicos1Component } from './exemplo-servicos1/exemplo-servicos1.component';
import { ExemploServicos2Component } from './exemplo-servicos2/exemplo-servicos2.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { CardComponent } from './card/card.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploServicos1Component,
    ExemploServicos2Component,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    CardComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
