import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../../../class/user';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit, OnDestroy  {

    user: User;

    private sub: any;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { 
      this.user = new User();
  }

  ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.user._id = params['id'];

            this.getUser(this.user._id);
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    getUser(_id: string) {
        if(!_id) return;
        this.userService.filterUsers({ _id: _id })
            .subscribe(user => {
                if (user.length == 1) this.user = user[0];
                console.log(user);
            });
    }

    updateUser(event) {
        event.preventDefault();

        this.userService.updateUser(this.user)
            .subscribe(data => {
                this.router.navigate(['/admin/users']);
            })
    }


}
