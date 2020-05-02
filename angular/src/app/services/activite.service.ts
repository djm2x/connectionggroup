import { Activite } from '../models/models';
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';


@Injectable({
  providedIn: 'root'
})
export class ActiviteService extends SuperService<Activite> {

  constructor() {
    super('activites');
  }
}
