import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cardapio } from "app/modules/cardapio/shared/cardapio.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CardapioService extends BaseResourceService<Cardapio> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/cardapio"; 

    super(url, injector, Cardapio.fromJson) 
  } 
}
