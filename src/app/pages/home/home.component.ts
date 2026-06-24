import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  services = [
    { icon: '⚡', title: 'Web Applications', desc: 'Custom apps built for speed, scale, and real business workflows.', link: '/services' },
    { icon: '◈', title: 'Websites', desc: 'Stunning, responsive sites that convert visitors into customers.', link: '/services' },
    { icon: '◎', title: 'SEO Strategy', desc: 'Rank higher, get found faster, and drive qualified traffic.', link: '/services' },
  ];

  stats = [
    { num: '120+', label: 'Projects launched' },
    { num: '98%', label: 'Client satisfaction' },
    { num: '3x', label: 'Avg. traffic growth' },
    { num: '24/7', label: 'Support available' },
  ];

  steps = [
    { n: '01', title: 'Discover', desc: 'We learn your business, goals, and audience.' },
    { n: '02', title: 'Design', desc: 'Wireframes and visuals you approve before we build.' },
    { n: '03', title: 'Develop', desc: 'Clean code, tested across devices and browsers.' },
    { n: '04', title: 'Launch', desc: 'Go live with SEO, analytics, and ongoing support.' },
  ];
}
