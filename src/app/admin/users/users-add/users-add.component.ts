import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../../../class/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users-add',
    templateUrl: './users-add.component.html',
    styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

    user: User;

    confirm_password: string;

    constructor(private userService: UserService, private router: Router) {
        this.user = new User();
    }

    ngOnInit() { }

    addUser(event) {
        event.preventDefault();

        if (this.user.password !== this.confirm_password){
            alert("Password didn't match");
            return false;
        }

        this.userService.addUser(this.user)
            .subscribe(user => {
                this.router.navigate(['/admin/users']);
            });

    }

}
