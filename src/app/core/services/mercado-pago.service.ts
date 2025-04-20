// mercado-pago.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MercadoPagoService {
  private http = inject(HttpClient);
  private endpoint = 'http://localhost:4000/api/process-payment';

  async process(paymentPayload: any): Promise<any> {
    let uid = this.getIdempotencyKey()
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Idempotency-Key': uid,
    });
    // firstValueFrom convierte el Observable en Promise
    return firstValueFrom(
      this.http.post<any>(this.endpoint, paymentPayload, { headers })
    );
  }
  getIdempotencyKey(): string {
    // Usa la API nativa del navegador
    return crypto.randomUUID();
  }
  createPreference(payload: any) {
    return this.http.post<{ preferenceId: string }>('http://localhost:4000/create-order', payload);
  }
}


