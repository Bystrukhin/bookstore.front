import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private route: ActivatedRoute,
      private router: Router,
  ) {
      this.authService.logout();
      this.router.navigateByUrl('/');
  }

  ngOnInit() {
  }

}
