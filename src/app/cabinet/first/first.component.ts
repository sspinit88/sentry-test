import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  post: any;

  constructor(
    private dataService: DataService,
  ) { }

  firstEmptyY(text: string): void {
    console.log(text);
  }
  
  getData() {
    this.dataService
      .getPosts()
      .subscribe(
        res => {
          this.post = res[0];
        }, error => {
          console.log('error in first', error);
        }
      );
  }

}
