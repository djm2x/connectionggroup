import { Blog } from '../models/models';
import { Injectable } from '@angular/core';
import { SuperService } from './super.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService extends SuperService<Blog> {

  constructor() {
    super('blogs');
  }
}
