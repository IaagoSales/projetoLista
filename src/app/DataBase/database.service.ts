import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Produto } from '../model/produto';
import { IonItem } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

//Informar o Http que a estrutura passada é do tipo Json
HttpOptions = {

  headers: new HttpHeaders({'Content-Type' : 'applications/json'})


}

//API é o nome da variável que será só de leitura(readonly)
  readonly API = "http://localhost:3000/lista";


  getItem(){

    return this.http.get<Produto[]>(this.API)

  }

//Método trazer um único item 
  getOneItem(id: number){

    return this.http.get<Produto>(this.API + id);

  }


//Método para apagar um item 
  delItem(id: number){

    return this.http.delete(this.API + id).subscribe()


  }


//Método de alteração de status
  statusItem(item: Produto){

    return this.http.put(this.API + item.id, JSON.stringify(item), this.HttpOptions).subscribe();

  }

//Méodo para atualizar os dados 
  updateItem(id: any, item: Produto){

    return this.http.put(this.API + id, JSON.stringify(item), this.HttpOptions).subscribe();

  }



}
