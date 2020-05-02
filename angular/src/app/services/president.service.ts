import { President } from '../models/models';
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';


@Injectable({
  providedIn: 'root'
})
export class PresidentService extends SuperService<President> {

  constructor() {
    super('presidents');
  }
}
