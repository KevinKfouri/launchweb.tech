import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  values = [
    { title: 'Quality First', desc: 'Every pixel and line of code is intentional. We do not cut corners.' },
    { title: 'Clear Communication', desc: 'No jargon. You always know where your project stands.' },
    { title: 'Results Driven', desc: 'Pretty is not enough — we build things that perform and convert.' },
    { title: 'Long-term Partners', desc: 'We stick around after launch with support and growth strategy.' },
  ];
}
