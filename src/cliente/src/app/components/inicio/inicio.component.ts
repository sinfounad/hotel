import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.Redirect();
  }


   Redirect() {
    setTimeout(function(){window.location.href = '/subirAr' }, 3000);
  }

}
