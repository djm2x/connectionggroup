import { Contact } from '../models/models';
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService extends SuperService<Contact> {

  constructor() {
    super('contacts');
  }
}
