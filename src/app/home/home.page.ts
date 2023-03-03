import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Produto } from '../model/produto';
import { DatabaseService } from '../DataBase/database.service';
import { UtilityService } from '../DataBase/Utility.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  constructor(

    //Nosso Objeto para os serviços do banco de dados 
    private DataBase: DatabaseService,

    //Objeto para manipular os métodos claase Ionic
    private actionSheet: ActionSheetController,

    //Objeto para manipular os serviços da classe Serviços
    private utilidades: UtilityService

  ) {}

    listaProdutos: Produto[] = [];

    //Carregar o método do inicio da página 

    ngOnInit() {

      this.utilidades.carregando("Aguarde...", 2000);
      this.DataBase.getItem().subscribe(results => this.listaProdutos = results)
      
    }

    //Método botão excluir

    deletar(id:number){

      try{

        this.DataBase.delItem(id);
      }catch(err){

        console.log(err);
      } finally{

        //Caso não ocorra nenhum erro, o item será excluido e aparecerá a mensagem para o usuário 
        this.utilidades.tostando("Item Excluído","bottom",2000,"danger");
      }
    }

    //Método do actionSheet

    async actionMetod(item: Produto){

      const action = this.actionSheet.create({

        mode: 'ios',
        header: 'Selecione uma opção',
        buttons: [

          {

            text: item.status ? 'Desmarcar' : 'Marca',
            icon: item.status ? 'radio-button-off' : 'checkmarc-circle',
            
            handler: () => {

              item.status = !item.status;
              this.DataBase.statusItem(item);
            }
          },

          {
            text: 'Cancelar',
            handler: () => {
              this.utilidades.tostando('Ação Cancelada', "middle", 2000, 'secondary');
            }
          }
        ]
      }); (await action).present();

    }
}
