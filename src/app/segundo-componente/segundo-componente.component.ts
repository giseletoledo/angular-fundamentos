import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João"
  dataNascimento = "2040-03-01"
  urlImagem = "/assets/grogu.jpg"

  mostrarDataNascimento(){
    let dataAtual = new Date(this.dataNascimento);
    if (dataAtual.getMonth() === 1 && dataAtual.getDate() === 29) {//Ano bissexto adiciona a regra
      dataAtual.setDate(1);
      dataAtual.setMonth(2);
    }
    let dia = dataAtual.getDate().toString();
    let mes = (dataAtual.getMonth()+1).toString();
    let ano = dataAtual.getFullYear().toString();
    let dataFormatada = dia + "/" + mes + "/" + ano;
    alert(`A data de nascimento do grogu é: ${dataFormatada}`)
  
  }
}
