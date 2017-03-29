import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private email: string;
    private password: string;

    public hasError: boolean;
    public errorBody: string;

    constructor(private userService: UserService, private router: Router) {
        this.hasError = false;
    }

    ngOnInit() {
        this.email = "employee@employee.com";
        this.password = "123";

    }

    login(event) {
        event.preventDefault();
        const user = { email: this.email, password: this.password }
        this.userService.authenticate(user)
            .subscribe(res => {
                if (res && res.status === 200) {
                    this.router.navigate(['admin/dashboard']);
                }
            },
            err => { 
                this.hasError = true;
                this.errorBody = err._body
            });
    }

}
