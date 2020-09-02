import { ConService } from './../services/con.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-preguntas-seguridad',
  templateUrl: './preguntas-seguridad.component.html',
  styleUrls: ['./preguntas-seguridad.component.css']
})
export class PreguntasSeguridadComponent implements OnInit {

  items:any;

  constructor(private con:ConService) { 
    this.con.retorntaItmes().subscribe(p=>{
      this.items=p;
      console.log(this.items);
    })
  }

  ngOnInit(): void {
  }

}


