import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  elements: string[] = [];
  inputText: string = '';

  inputToArray(): void {
    const text = this.inputText.trim();

    // Ignore empty input
    if (!text) {
      return;
    }

    this.elements.push(text);
    this.inputText = '';
  }

  remove(index: number): void {
    this.elements.splice(index, 1);
  }
}
