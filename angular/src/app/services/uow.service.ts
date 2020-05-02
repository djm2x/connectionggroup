import { FileUploadService } from './file.upload.service';
import { Injectable } from '@angular/core';
import { RegionService } from './region.service';
import { UserService } from './user.service';
import { RoleService } from './role.service';
import { listIcons } from './icons';
import * as moment from 'moment';
import { ActiviteService } from './activite.service';
import { AccountService } from './account.service';
import { PresidentService } from './president.service';
import { PlanificationService } from './planification.service';
import { GalerieService } from './galerie.service';
import { BlogService } from './blog.service';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class UowService {
  presidents = new PresidentService();
  planifications = new PlanificationService();
  activites = new ActiviteService();
  galeries = new GalerieService();
  blogs = new BlogService();
  contacts = new ContactService();

  files = new FileUploadService();
  regions = new RegionService();
  users = new UserService();
  roles = new RoleService();
  accounts = new AccountService();

  profils = [
    { id: 1, name: 'Role1', },
    { id: 2, name: 'Role2', },
    { id: 3, name: 'Administrateur' },
  ];

  positions = [1, 2, 3, 4, 5];
  langs = ['fr', 'en', 'ar'];
  rolesA = ['Admin', 'User'];

  icons = listIcons;

  constructor() { }

  valideDate(date: Date): any {
    if (date === null) {
      return null;
    }
    date = new Date(date);

    const hoursDiff = date.getHours() - date.getTimezoneOffset() / 60;
    const minutesDiff = (date.getHours() - date.getTimezoneOffset()) % 60;
    date.setHours(hoursDiff);
    date.setMinutes(minutesDiff);

    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }
}
