import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoPagamento } from "app/modules/tipo-pagamento/shared/tipo-pagamento.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class TipoPagamentoService extends BaseResourceService<TipoPagamento> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/tipo-pagamento"; 

    super(url, injector, TipoPagamento.fromJson) 
  } 
}
