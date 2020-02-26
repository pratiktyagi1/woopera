import { Component, OnInit } from '@angular/core';
import { HomeService } from '../api/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filterData: any = {};
  opera: any[] = [];
  constructor(public homeService: HomeService) {}

  ngOnInit() {
    // tslint:disable-next-line: variable-name
    this.homeService.getHomeFilterData().subscribe((data) => {
      this.filterData = data;
      console.log(this.filterData.opera);
      // this.opera = data.opera;
    });
  }

}
