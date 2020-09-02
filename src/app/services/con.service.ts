import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface p { TCORON477518: Array<[any]>; }
export interface p { JGARNE392900: Array<[any]>; }

@Injectable({
  providedIn: 'root'
})
export class ConService {
  private itemsCollection: AngularFirestoreCollection<p>;
  items: Observable<p[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<p>('preguntasUsadas');
    this.items = this.itemsCollection.valueChanges();
  }
  retorntaItmes(){
    return this.items;
  }
  
}