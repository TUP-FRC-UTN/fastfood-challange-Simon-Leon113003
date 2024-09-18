import { Component, Input } from '@angular/core';
import { Pedido } from '../interfaces/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {

  @Input()
  pedidosAEntregar: Pedido[] ;




}
