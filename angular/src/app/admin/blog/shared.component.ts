import { Component, OnInit, ViewChild, EventEmitter, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { merge } from 'rxjs';
import { UpdateComponent } from './update/update.component';
import { UowService } from 'src/app/services/uow.service';
import { Blog } from 'src/app/models/models';
import { DeleteService } from 'src/app/layouts/delete/delete.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  update = new EventEmitter();
  isLoadingResults = true;
  resultsLength = 0;
  isRateLimitReached = false;

  idType = new FormControl('');
  title = new FormControl('');
  types = this.http.get<string[]>('assets/typeActivite.json');

  dataSource = [];
  columnDefs = [
    // { columnDef: 'imageUrl', headName: '' },
    { columnDef: 'title', headName: '' },
    { columnDef: 'date', headName: '' },
    { columnDef: 'type', headName: '' },
    // { columnDef: 'destination', headName: '' },
    { columnDef: 'option', headName: 'OPTION' },
  ].map(e => {
    e.headName = e.headName === '' ? e.columnDef.toUpperCase() : e.headName;
    return e;
  });


  displayedColumns = this.columnDefs.map(e => e.columnDef);

  constructor(private uow: UowService, public dialog: MatDialog, private mydialog: DeleteService
    , @Inject('BASE_URL') private url: string, private http: HttpClient ) { }

  ngOnInit() {

    merge(...[this.sort.sortChange, this.paginator.page, this.update, this.idType.valueChanges, this.title.valueChanges]).pipe(startWith(null as any)).subscribe(
      r => {
        r === true ? this.paginator.pageIndex = 0 : r = r;
        !this.paginator.pageSize ? this.paginator.pageSize = 10 : r = r;
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.isLoadingResults = true;
        this.getPage(
          startIndex,
          this.paginator.pageSize,
          this.sort.active ? this.sort.active : 'id',
          this.sort.direction ? this.sort.direction : 'desc',
          this.idType.value === '' ? '*' : this.idType.value,
          this.title.value === '' ? '*' : this.title.value,
        );
      }
    );
  }

  getPage(startIndex, pageSize, sortBy, sortDir, idType, title) {
    this.uow.blogs.getAll(startIndex, pageSize, sortBy, sortDir, idType, title).subscribe(
      (r: any) => {
        console.log(r);
        this.dataSource = r.list;
        this.resultsLength = r.count;
        this.isLoadingResults = false;
      }
    );
  }

  openDialog(o: Blog, text) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '75vw',
      // height: '80vh',
      disableClose: true,
      data: { model: o, title: text }
    });

    return dialogRef.afterClosed();
  }

  add() {
    this.openDialog(new Blog(), 'Ajouter blog').subscribe(result => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  edit(o: Blog) {
    this.openDialog(o, 'Modifier blog').subscribe((result: Blog) => {
      if (result) {
        this.update.next(true);
      }
    });
  }

  async delete(o: Blog) {
    const r = await this.mydialog.openDialog('blog').toPromise();
    if (r === 'ok') {
      this.uow.blogs.delete(o.id).subscribe(() => this.update.next(true));

      const d = await this.uow.files.deleteFiles([o.imageUrl.replace(';', '')], 'planifications').toPromise();
    }
  }

  displayImage(urlImage: string) {
    if (!urlImage) {
      return 'assets/404.jpg';
    }
    if (urlImage && urlImage.startsWith('http')) {
      return urlImage;
    }

    return `${this.url}/blogs/${urlImage.replace(';', '')}`;
  }

  imgError(img: any) {
    img.src = 'assets/404.jpg';
  }

}

