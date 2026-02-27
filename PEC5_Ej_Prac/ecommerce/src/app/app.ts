import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ArticleList } from './article-list/article-list';
import { ArticleNewTemplate } from './article-new-template/article-new-template';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, ArticleList, ArticleNewTemplate],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ecommerce');

  view: string = 'list';

  onViewChange(newView: string): void {
    this.view = newView;
  }
}
