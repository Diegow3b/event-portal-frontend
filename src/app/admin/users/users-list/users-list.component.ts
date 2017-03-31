import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../../../class/user';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    users: User[];
    usersAmount: number;

    constructor(private user0Service: UserService) { 
        this.users = new Array();
    }

    ngOnInit() {
        this.getAllUsers();
    }

    _sortByDate(path = [], order = "asc", comparator = (a: any, b: any, order: string) => {
        switch (order) {
            case "asc":
                return new Date(a).getTime() - new Date(b).getTime();

            case "desc":
                return new Date(a).getTime() + new Date(b).getTime();
        }
    }) {
        return (a, b) => {
            let _a = a
            let _b = b
            for (let key of path) {
                _a = _a[key]
                _b = _b[key]
            }
            return comparator(_a, _b, order)

        }
    }

    getAllUsers() {
        this.user0Service.getUsers()
            .subscribe(users => {
                this.users = users.sort(this._sortByDate(['created_at']));
                this.usersAmount = users.length;
            });
    }

}
