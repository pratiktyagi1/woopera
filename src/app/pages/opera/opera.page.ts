import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-opera',
  templateUrl: './opera.page.html',
  styleUrls: ['./opera.page.scss'],
})
export class OperaPage implements OnInit {
  public operaId: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.operaId = this.activatedRoute.snapshot.paramMap.get('opera_id');
    if (this.operaId) {
      console.log(this.operaId);
    } else {
      console.log('no Oprea');
    }
  }

}
