# NgMarkdown

This is a simple Angular markdown rendering library.

![npm](https://img.shields.io/npm/dw/@manthanankolekar/ng-markdown)
![npm](https://img.shields.io/npm/dm/@manthanankolekar/ng-markdown)
![npm](https://img.shields.io/npm/dy/@manthanankolekar/ng-markdown)
![npm](https://img.shields.io/npm/dt/@manthanankolekar/ng-markdown)

## Installation

```bash
npm install @manthanankolekar/ng-markdown
```

## Usage

Import

```typescript
import { Component, signal } from '@angular/core';
import { NgMarkdownComponent } from '@manthanankolekar/ng-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgMarkdownComponent],
  template: `
    <div class="markdown-container">
      <ng-markdown [data]="markdownText"></ng-markdown>
    </div>
    <button (click)="toggleMarkdown()" class="toggle-btn">Toggle Markdown</button>
  `,
  styles: `
    .markdown-container {
      padding: 1.5rem;
      background: #fff;
      border-radius: 0.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      max-width: 42rem;
      margin: 2rem auto;
    }

    .toggle-btn {
      display: block;
      margin: 1rem auto 0 auto;
      padding: 0.5rem 1.5rem;
      background: #2563eb;
      color: #fff;
      font-weight: 600;
      border: none;
      border-radius: 0.375rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      cursor: pointer;
      transition: background 0.2s, box-shadow 0.2s;
    }
    .toggle-btn:hover, .toggle-btn:focus {
      background: #1d4ed8;
      outline: none;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.3);
    }
  `
})
export class AppComponent {
  markdownText = '# Hello, Markdown!\n\n```ts\nconsole.log("Hello World");\n```';

  toggleMarkdown() {
    this.markdownText = this.markdownText.includes('Hello')
      ? '# Updated Markdown!\n\n- List item 1\n- List item 2'
      : '# Hello, Markdown!\n\n```ts\nconsole.log("Hello World");\n```';
  }
}
```

Use

```html
<ng-markdown [data]="markdownText"></ng-markdown>
```

- `data`: The markdown string to render.

## Demo

[Stackblitz](https://stackblitz.com/edit/ng-markdown-example)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
