import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DagMenu } from './dagMenu';

@Component({
  selector: 'rest-weekmenu',
  templateUrl: './rest-weekmenu.component.html',
  styleUrls: ['./rest-weekmenu.component.css']
})
export class RestWeekmenuComponent implements OnInit {

  response: any;

  constructor(private http: HttpClient) { }

  private weekMenuLocalURL = 'http://localhost:8080/weekmenu';
  private dagMenus : DagMenu[];
  ngOnInit() {
    //let obsRest = this.http.get('https://api.github.com/users/quintennouters');
    let obsRest = this.http.get<DagMenu[]>(this.weekMenuLocalURL);
    obsRest.subscribe((data) => this.dagMenus = data);
  }

  refresh(){
    this.http.get(this.weekMenuLocalURL)
    .subscribe((response) => {this.response = response});
    console.log(this.response);
  }

}
