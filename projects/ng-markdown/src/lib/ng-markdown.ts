import { AfterViewInit, Component, ElementRef, inject, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { marked } from 'marked';
import hljs from 'highlight.js';

@Component({
  selector: 'ng-markdown',
  imports: [],
  template: `<div class="markdown-content" [innerHTML]="convertedHtml()"></div>`,
  styles: [`
    .markdown-content {
      font-family: sans-serif;
    }
  `]
})
export class NgMarkdown implements OnChanges, AfterViewInit {
  @Input() data: string = '';
  convertedHtml = signal<string>('');

  private elRef = inject(ElementRef);

  constructor() {
    marked.setOptions({
      breaks: true
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      const parsed = marked.parse(this.data || '');
      if (parsed instanceof Promise) {
        parsed.then(html => {
          this.convertedHtml.set(html);
          this.highlightCodeBlocks();
        });
      } else {
        this.convertedHtml.set(parsed);
        this.highlightCodeBlocks();
      }
    }
  }

  ngAfterViewInit(): void {
    this.highlightCodeBlocks();
  }

  private highlightCodeBlocks(): void {
    const blocks = this.elRef.nativeElement.querySelectorAll('pre code');
    blocks.forEach((block: HTMLElement) => {
      hljs.highlightElement(block);
    });
  }
}
