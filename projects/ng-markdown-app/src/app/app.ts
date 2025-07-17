import { Component, signal } from '@angular/core';
import { NgMarkdown } from '../../../ng-markdown/src/public-api';

@Component({
  selector: 'app-root',
  imports: [NgMarkdown],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-markdown-app');

  markdownText = '# Hello, Markdown!\n\n```ts\nconsole.log("Hello World");\n```';

  toggleMarkdown() {
    this.markdownText = this.markdownText.includes('Hello')
      ? '# Updated Markdown!\n\n- List item 1\n- List item 2'
      : '# Hello, Markdown!\n\n```ts\nconsole.log("Hello World");\n```';
  }
}
