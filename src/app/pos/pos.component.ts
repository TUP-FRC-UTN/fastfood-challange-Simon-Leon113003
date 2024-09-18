import { Component, EventEmitter, inject, Output} from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Pedido } from '../interfaces/pedido';
import { CommonModule} from '@angular/common';
import { PedidoService } from '../services/pedido.service';


@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  pedido: Pedido = {
    numberPedido: Math.floor(Math.random() * 1000) + 1,
    namePedido: '',
    description: '',
    date: new Date()
  }

  @Output()
  onSave = new EventEmitter<void>()
  pedidoService = inject(PedidoService)

  onSubmit(form:NgForm){
    if (form.invalid) {
      alert("Formulario invalido")
      return
    };

    const copyForm = {
      ...this.pedido
    }
    this.pedidoService.addPedido(copyForm);
    this.onSave.emit();
    form.reset();


  }
}
