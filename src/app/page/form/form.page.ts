import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

// Essa ferramenta serve para capturar a rota(caminho), que será ativada quando o botão for clicado//

  constructor(

    private router: Router,
    private activatedRoute: ActivatedRoute,
    

  ) {}

  routerId = null; // Variavel que guarda a rota // 
  produto: any = {};


  ngOnInit() {

    this.routerId = 
    this.activatedRoute.snapshot.params['id'];

    if(this.routerId){
      // Se o id do produto for encontrado, Ativa o banco de dados
      this.banco.getOneItem(this.routerId).subscribe(caixa => { this.produto = caixa } );

    }


  }

  // Método que chama o serviço de atualização 

  update(form: any){

    this.banco.updateItem(form.value, this.routerId);
    this.router.navigate[''];
    this.util.tostando("Item Atualizado com sucesso", "middle", 2000, "medium");

  }

  declations: [FormPage]

})
