import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rest-weekmenu',
  templateUrl: './rest-weekmenu.component.html',
  styleUrls: ['./rest-weekmenu.component.css']
})
export class RestWeekmenuComponent implements OnInit {

  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obsRest = this.http.get('https://api.github.com/users/quintennouters');
    obsRest.subscribe((response) => console.log(response));
  }

  refresh(){
    this.http.get('https://api.github.com/users/quintennouters')
    .subscribe((response) => {this.response = response});
    console.log(this.response);
  }

}
