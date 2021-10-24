import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../shared/services/load-scripts.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public lista: Array<number>;

  constructor(private nameJs: LoadScriptsService) {
    this.lista = [1, 2, 3];
  }

  ngOnInit(): void {
    this.nameJs.Load(["slider"]);
  }

}
