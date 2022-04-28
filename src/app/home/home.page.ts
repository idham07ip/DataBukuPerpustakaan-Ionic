import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public GETBuku: any;
  constructor(
    private http: HttpClient
  ) { }

  ionViewWillEnter() {
    this._Getdatajoin();
  }


  _Getdatajoin() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/apiperpus/C_perpus/GetBukuJoin');
    data.subscribe(result => {
      this.GETBuku = result;
      console.log(result);
    });
  }

}
