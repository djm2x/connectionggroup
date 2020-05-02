import { Galerie } from '../models/models';
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';


@Injectable({
  providedIn: 'root'
})
export class GalerieService extends SuperService<Galerie> {

  constructor() {
    super('galeries');
  }
}
