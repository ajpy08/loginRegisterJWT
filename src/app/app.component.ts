import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginRegisterJWT';

  constructor(private apollo: Apollo) {}

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
      })
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.users;
        })
      )
      .subscribe(result => {
        console.log(result);
      });

    const login = gql`
      query login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          status
          message
          token
        }
      }
    `;

    this.apollo
      .watchQuery({
        query: login,
        variables: {
          email: 'angelpuc08@gmail.com',
          password: '123456'
        },
        fetchPolicy: 'network-only'
      })
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.login;
        })
      )
      .subscribe(result => {
        console.log(result);
      });
  }
}
