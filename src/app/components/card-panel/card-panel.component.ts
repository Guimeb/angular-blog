import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from '../small-card/small-card.component';
import { BigCardComponent } from '../big-card/big-card.component';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-card-panel',
  standalone: true,
  imports: [CommonModule, SmallCardComponent, BigCardComponent],
  templateUrl: './card-panel.component.html',
  styleUrl: './card-panel.component.css'
})
export class CardPanelComponent implements OnInit {
  newsList: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
    });
  }
}
