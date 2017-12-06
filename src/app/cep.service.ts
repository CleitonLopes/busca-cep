import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CepService {

  constructor(private http:HttpClient) {

  }

  search (cep: string) {

    this.http.get(`http://viacep.com.br/ws/${cep}/json/`)

        .toPromise()

        .then(response => {

          console.log(response)

        })

  }

}
