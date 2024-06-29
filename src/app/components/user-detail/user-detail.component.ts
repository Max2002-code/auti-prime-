import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.userService.getUserByName(name).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    });
  }
}
