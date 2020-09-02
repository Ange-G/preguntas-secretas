import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'preguntas-seguridad';
  preguntasUsadas: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.preguntasUsadas = firestore.collection('preguntasUsadas').valueChanges();
  }
}