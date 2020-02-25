import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { getUsers, login, meData } from './operations/query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginRegisterJWT';

  constructor(private apollo: Apollo, private api: ApiService) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe(result => {
        console.log(result);
      });

    this.api.login('angelpuc08@gmail.com', '123456').subscribe(result => {
        console.log(result);
      });

    this.api.getMe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlNTUyZmQxMzYzYjZjMjUwODY5ZTE5MyIsIm5hbWUiOiJKYXZpZXIiLCJsYXN0bmFtZSI6IlB1YyBZYW1hIiwiZW1haWwiOiJhbmdlbHB1YzA4QGdtYWlsLmNvbSIsImlkIjoxLCJyZWdpc3RlckRhdGUiOiIyMDIwLTAyLTI1IDA4OjMxOjQ1In0sImlhdCI6MTU4MjY0NzY0MywiZXhwIjoxNTgyNzM0MDQzfQ.SV1mdbHuRtpPdUDRjltTmiS-AA14jCmK65qv42AlcgA').subscribe(result => {
        console.log(result);
      });
  }
}
