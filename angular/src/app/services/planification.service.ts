import { Planification } from '../models/models';
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';


@Injectable({
  providedIn: 'root'
})
export class PlanificationService extends SuperService<Planification> {

  constructor() {
    super('planifications');
  }

  getLast(city) {
    return this.http.get(`${this.urlApi}/${this.controller}/getLast/${city}`);
  }
}
