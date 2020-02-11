import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent {

  user: any;

  constructor(
    private dataService: DataService,
  ) { }

  secondaryEmpty(text: string): void {
    console.log(text);
  }

  getData() {
    this.dataService
      .getUsers()
      .subscribe(
        res => {
          this.user = res[0];
        }
      );
  }
}
