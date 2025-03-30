// news-panel.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../news.service';
import { SmallCardComponent } from '../small-card/small-card.component';

@Component({
  selector: 'app-news-panel',
  standalone: true,
  imports: [CommonModule, SmallCardComponent],
  templateUrl: './news-panel.component.html',
  styleUrls: ['./news-panel.component.css']
})
export class NewsPanelComponent implements OnInit {
  newsList: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
    });
  }
}
