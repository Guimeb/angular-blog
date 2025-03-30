import { Component } from '@angular/core';
import { NewsPanelComponent } from '../../components/news-panel/news-panel.component';

@Component({
  selector: 'app-news',
  imports: [NewsPanelComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
