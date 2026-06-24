import { Component, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  finished = output<void>();

  progress = 0;
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.progress += Math.random() * 18 + 4;
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(this.intervalId);
        setTimeout(() => this.finished.emit(), 500);
      }
    }, 120);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
