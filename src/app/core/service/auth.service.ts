import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/auth.models';
import { loggedInUser } from '../helpers/utils';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User | null = null;
    data = {} as any ;

    constructor (private http: HttpClient) {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User | null {
        if (!this.user) {
            this.user = loggedInUser();
        }
        return this.user;
    }

    /**
     * Performs the login auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string): any {
            //  let data = {} as any ;
            this.data.avatar ="assets/images/users/avatar-1.jpg"
            this.data.email= "employer@jobsmonday.com"
            this.data.firstName= "Nik"
            this.data.id= 1 
            this.data.lastName= "Patel"
            this.data.location= "California, USA"
            this.data.name= "Employer"
            this.data.password= "test"
            this.data.title= "User Experience Specialist"
            this.data.token="fake-jwt-token"
            this.data.username= "test"

           sessionStorage.setItem('currentUser', JSON.stringify(this.data));
           console.log('data', this.data)
             return this.data;
           

        // return this.http.post<any>(`/api/login`, { email, password })
        //     .pipe(map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             this.user = user;
        //             console.log('this.user', this.user)
        //             // store user details and jwt in session
        //             sessionStorage.setItem('currentUser', JSON.stringify(user));
        //         }
        //         return user;
        //     }));
    }

    /**
     * Performs the signup auth
     * @param name name of user
     * @param email email of user
     * @param password password of user
     */
    signup(name: string, email: string, password: string): any {
        return this.http.post<any>(`/api/signup`, { name, email, password })
            .pipe(map(user => user));

    }



    /**
     * Logout the user
     */
    logout(): void {
        // remove user from session storage to log user out
        sessionStorage.removeItem('currentUser');
        this.user = null;
    }
}

