import { Component, EventEmitter, Output } from '@angular/core';
import { PaymentMethodDto } from '../../models/payment-method.model';
import { PaymentMethodService } from '../../services/payment-method-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-method-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-method-create.html',
  styleUrl: './payment-method-create.css'
})
export class PaymentMethodCreateComponent {
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();
  paymentMethod: PaymentMethodDto = {} as PaymentMethodDto;

  constructor(private paymentMethodService: PaymentMethodService) { }

  savePaymentMethod(): void {
    this.paymentMethodService.create(this.paymentMethod).subscribe({
      next: () => {
        this.saved.emit();
        alert('Método com sucesso');
      }, error: (err) => {
        console.error(err);
        alert('Erro ao salvar');
        this.cancel();
      }
    });
  }

  cancel(): void {
    this.close.emit();
  }
}
