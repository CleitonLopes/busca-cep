import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cep} from './cep/cep';


@Injectable()
export class CepService {

  constructor(private http:HttpClient) {

  }

  public search (cep: string) {

   return this.http.get(`http://viacep.com.br/ws/${cep}/json/`)

        .toPromise()

        .then(response => this.convertResponseCep(response));

  }

  private convertResponseCep(data): Cep {

    console.log(data)

    let cep = new Cep();

    cep.cep = data.cep;
    cep.logradouro = data.logradouro;
    cep.complemento = data.complemento;
    cep.bairro = data.bairro;
    cep.numero = data.numero;
    cep.estado = data.estado;
    cep.cidade = data.localidade;

    return cep;

  }

}
