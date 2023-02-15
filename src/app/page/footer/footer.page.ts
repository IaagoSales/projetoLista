import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/DataBase/database.service';
import { UtilityService } from 'src/app/DataBase/Utility.service';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor( 

    //Nosso serviço de Banco de Dados (CRUD)
    private DataBase: DatabaseService,

    //Método AlertController, ferramenta que cria os alerts
    private alertCtrl: AlertController,

    //Serviços de interção com o usuário
    private utilidades: UtilityService

  ) { }

  ngOnInit() {

     
  }

//Método de Alertando
async alertando(){
  const alert = this.alertCtrl.create({

    mode: "ios",
    header: "Cadastro de Produtos",
    inputs: [
      {
        name: "produto",
        type: "text",
        placeholder: "Informe o Produto"
      },

      {
        name:"qtd",
        type: "number",
        placeholder: "Informe a Quantidade"
      }
    ]  
    
  })
}

}