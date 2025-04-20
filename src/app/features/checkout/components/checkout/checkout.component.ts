import { Component, inject, Input } from '@angular/core';
import { MercadoPagoService } from '../../../../core/services/mercado-pago.service';
declare var window: any;
 export interface datapreference   {
  preferenceId: string
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  private _serviceMercado = inject(MercadoPagoService);
  private publicKey = 'TEST-44aed3d6-baa7-493a-b24d-e54f9ca1a76d';
  private bricksBuilder!: any;
  private mp: any;
  private paymentBrickController :any

ngOnDestroy(): void {
  if (this.paymentBrickController) {
    this.paymentBrickController.unmount();
  }
}

  async ngOnInit() {
    let locale: string = 'es-CO'
    this.mp = new (window as any).MercadoPago(this.publicKey, { locale });
    this.bricksBuilder = this.mp.bricks();
    //await this._serviceMercado.initialize(this.publicKey);
    this._serviceMercado.createPreference({
      amount: 10000,
      description: 'Compra en MiApp',
    }).subscribe({
      next: async ({ preferenceId }) => {
        console.log(preferenceId,'ver pref')
        const settings = {
          initialization: {
            amount: 50000,
            preferenceId:preferenceId,
            payer: {
              first_name: '',
              last_name: '',
              email: '',
            },
          },
          customization: {
            visual: {
              style: {
                theme: 'default',
              },
            },
            paymentMethods: {
              creditCard: 'all',
              debitCard: 'all',
              bankTransfer: 'all',
              maxInstallments: 1,
            },
          },
          callbacks: {
            onReady: () => {
              console.log('Brick listo');
            },
          onSubmit: this.onSubmit.bind(this),
            onError: (error: any) => {
              console.error('Error en el brick:', error);
            },
          },
        };
        this.paymentBrickController = await this.bricksBuilder.create('payment', 'paymentBrick_container', settings);
      },
      error: (error:any) => {
        console.error('Error al obtener el preferenceId:', error);
      },
    });
  }
  private async onSubmit({ selectedPaymentMethod, formData }: any): Promise<void> {
    console.log('formData raw:', formData);
    // Construye tu payload camel→snake o directamente snake_case
    const payload = this.setPayload({ selectedPaymentMethod, formData })
    console.log('Enviando payload:', payload);
    try {
      const result = await this._serviceMercado.process(payload);
      this.paymentBrickController.unmount();
      setTimeout(() => {
        console.log(result.id, 'ver id')
         this.bricksBuilder.create('statusScreen', 'statusScreen_container', {
          initialization: { paymentId: result.id },
          callbacks: {
            onReady: () => console.log('Status Screen listo'),
            onError: (err: any) => console.error('Error en Status Screen', err)
          },
          customization: {
            backUrls: {
                'error': 'http://localhost:4200',
                'return': 'http://localhost:4200'
            }
        }
        });
      }, 3000);
      console.log('Resultado del pago:', result);
      console.log('Resultado del pago:', result.id);
    } catch (err) {
      console.error('Error al procesar el pago:', err);
    }
  }
  setPayload({ selectedPaymentMethod, formData }: any){
  const payload = {
      transaction_amount: 50000,
      token: formData.token,
      description: 'Payment for product',
      installments: 1,
      payment_method_id: 'master',
      payer: {
        email: 'miguelangelzk0405@gmail.com',
        identification: { type: 'CC', number: '1073173014' }
      }}
    return payload
  }
}
