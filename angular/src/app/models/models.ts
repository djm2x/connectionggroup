// import {Time} from '@angular/common';

export class User {
  id = 0;
  nom = '';
  prenom = '';
  email = '';
  date = new Date();
  phone = '';
  adresse = '';
  cin = '';
  organisation = '';
  password = '';
  role = 'user';
  idRegion = 0;
  isActive = false;
  region = new Region();
}

export class Role {
  id = 0;
  nom = '';
  users: User[] = [];
}

export class Region {
  id = 0;
  name = '';
  imageUrl = '';
  users: User[] = [];
}

export class Activite {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
  idRegion = 0;
  idUser = 0;
  users = new User();
}

export class Contact {
  id = 0;
  name = '';
  email = '';
  message = '';
  phone = '';
}

export class Planification {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
  idRegion = 0;
  idUser = 0;
  users = new User();
}

export class President {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
}

export class Blog {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
  type = 'Press';
  idUser = 0;
  users = new User();
}

export class Galerie {
  id = 0;
  title = '';
  description = '';
  date = new Date();
  imageUrl = '';
}
