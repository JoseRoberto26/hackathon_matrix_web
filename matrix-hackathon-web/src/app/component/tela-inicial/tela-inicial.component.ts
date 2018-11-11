import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
  }

  acessarSistema(){
    this.router.navigate(['/home']);
  }

}
