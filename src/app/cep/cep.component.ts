import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from './cep';

@Component({
  selector: 'cp-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  isLoading = false;

  constructor(private cepCervice:CepService) { }

  ngOnInit() {  }

  search () {

    this.isLoading = true;

    this.cepCervice.search(this.cep.cep)

        .then((cep:Cep) => {

            this.isLoading = false;
            this.cep = cep;

        })

        .catch(() => {

          this.cleanCep();

        })

  }

  private cleanCep () {

      this.isLoading = false;

      let cep = this.cep.cep;

      this.cep = new Cep();

      this.cep.cep = cep;

      alert('Cep não encontrado, verifique !');
  }

}
