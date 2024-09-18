import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Pedido } from '../interfaces/pedido';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  @Input()
  numberPedido: number

  @Input()
  index: number

  @Input()
  namePedido: string;

  @Input()
  description: string;

  @Output()
  selectedKitchen = new EventEmitter<number>();

  pedidoService = inject(PedidoService)

  viewPedido(){
    this.selectedKitchen.emit(this.index);


  }


}
