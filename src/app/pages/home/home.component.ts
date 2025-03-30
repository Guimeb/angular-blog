import { Component } from '@angular/core';
import { TitleCardComponent } from '../../components/title-card/title-card.component';
import { CardPanelComponent } from '../../components/card-panel/card-panel.component';

@Component({
  selector: 'app-home',
  imports: [TitleCardComponent, CardPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
