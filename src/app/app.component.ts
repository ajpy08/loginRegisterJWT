import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loginRegisterJWT';

  constructor(private apollo: Apollo){}

  ngOnInit(): void {
    const getUsers = gql`
    query {
      users {
        id
        name
        lastname
        email
        registerDate
      }
    }
    `;
    this.apollo
    .watchQuery({
      query: getUsers,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((result: any) => {
      return result.data.users;
    })).subscribe((result) => {
      console.log(result);
    });
  }
}
