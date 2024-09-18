import { Component, inject, OnInit } from '@angular/core';
import { PosComponent } from "../pos/pos.component";
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../interfaces/pedido';
import { KitchenComponent } from "../kitchen/kitchen.component";
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from "../delivery/delivery.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PosComponent, KitchenComponent, CommonModule, DeliveryComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit{

  private pedidoService = inject(PedidoService);

  pedidos: Pedido[] = [];
  pedidosCocinados: Pedido[] = []

  selectPedido:  Pedido
  mostrarPedido: boolean = true;
  viewForm:boolean = false;


  ngOnInit(): void {
    this.loadPedidos();


  }

  loadPedidos(){

    this.pedidos = this.pedidoService.getAll();
  }

  savePedido(){
    this.loadPedidos();
    this.viewForm = false
  }
  selectedKitchen(index: number){
    this.mostrarPedido = true;
    this.selectPedido = this.pedidos[index];
    this.pedidoService.deleteById(index);
    this.loadPedidos();
  }

  cargarPedidoTerminado(){
    this.pedidosCocinados.push(this.selectPedido);
    this.mostrarPedido = false;

  }

  loadForm(){
    this.viewForm = !this.viewForm;
  }

}
