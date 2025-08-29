import { Component } from '@angular/core';
import { GifsListItemComponent } from "../../components/gifs-list/gifs-list-item/gifs-list-item.component";
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';


@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent { }
