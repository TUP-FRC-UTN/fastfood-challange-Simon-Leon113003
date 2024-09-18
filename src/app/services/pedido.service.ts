import { Injectable } from '@angular/core';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private list_pedidos: Pedido[] = [
    {
      numberPedido: 266,
      namePedido: "Pedro",
      description: "Pizza Muzarella",
      date: null
    },
    {
      numberPedido: 895,
      namePedido: "Juan",
      description: "Super Panchos",
      date: null
    }
  ]

  constructor() { }

  getAll(): Pedido[]{
    return [...this.list_pedidos]
  }

  addPedido(pedido: Pedido){
    this.list_pedidos.push(pedido);
  }

  deleteById(index: number){
    this.list_pedidos.splice(index,1);
  }
}
