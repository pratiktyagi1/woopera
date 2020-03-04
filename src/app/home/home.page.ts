import { Component, OnInit } from '@angular/core';
import { HomeService } from '../api/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filterData: any = {};

  operaId: any[] = [];
  theatreId: any[] = [];
  authorId: any[] = [];
  constructor(public homeService: HomeService) {}

  ngOnInit() {
    // tslint:disable-next-line: variable-name
    this.homeService.getHomeFilterData().subscribe((data) => {
      this.filterData = data;
      console.log(this.filterData.opera);
      // this.opera = data.opera;
    });
  }

  onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);
  }

  onClickSubmit(formData) {
    console.log(formData);
    if (formData.opera_id) {
      this.homeService.getSingleOperaById(formData.opera_id).subscribe((data) => {
        this.filterData = data;
        console.log(this.filterData);
      });
    }
  }

}
