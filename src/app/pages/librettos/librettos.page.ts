import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../api/home.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-librettos',
  templateUrl: './librettos.page.html',
  styleUrls: ['./librettos.page.scss'],
})
export class LibrettosPage implements OnInit {
  public librettoData: any = {};
  public operaId: string;
  constructor(public homeService: HomeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.operaId = this.activatedRoute.snapshot.paramMap.get('opera_id');
    if (this.operaId) {
      console.log(this.operaId);
      this.homeService.getLibrettoByOpera(this.operaId).subscribe((data) => {
        this.librettoData = data;
       // Array.from(this.librettoData);
         console.log(this.librettoData);
        // this.opera = data.opera;
      });
    } else {
      console.log('no Oprea ID');
    }
  }

}
