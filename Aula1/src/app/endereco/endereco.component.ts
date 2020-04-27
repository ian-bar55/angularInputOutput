import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Output() atualizaEndereco = new EventEmitter();
  @Input() enderecoEvento : any;
  @Input() nomeEvento: string;

  constructor() { }

  ngOnInit(): void {
  }

  atualizarEndereco(){
    let name = this.nomeEvento;
    let location = {address: 'Mineirinho', city: 'Belo Horizonte', country: 'Brasil'};
    let eventoFilho = {name, location};
    this.atualizaEndereco.emit(eventoFilho);
  }
}
