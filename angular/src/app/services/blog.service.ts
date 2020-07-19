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

  getAll(startIndex, pageSize, sortBy, sortDir, idType, title) {
    return this.http.get<{list: Blog[], count: number}>(`${this.urlApi}/${this.controller}/getAll/${startIndex}/${pageSize}/${sortBy}/${sortDir}/${idType}/${title}`);
  }
}
