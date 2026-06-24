import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = [
    {
      id: 'webapps',
      title: 'Web Applications',
      tagline: 'Built for how your business actually works',
      desc: 'We design and develop custom web applications — dashboards, portals, booking systems, internal tools, and SaaS products. Fast, secure, and built to scale with your growth.',
      features: ['Custom dashboards & admin panels', 'User auth & role management', 'API integrations', 'Real-time data & notifications', 'Cloud deployment'],
      price: 'From $5,000',
    },
    {
      id: 'websites',
      title: 'Websites',
      tagline: 'First impressions that convert',
      desc: 'Your website is your digital storefront. We build responsive, high-performance sites with modern design, clear messaging, and layouts that turn visitors into leads.',
      features: ['Responsive multi-page sites', 'Landing pages & portfolios', 'CMS setup', 'Performance optimization', 'Analytics integration'],
      price: 'From $2,500',
    },
    {
      id: 'seo',
      title: 'SEO Strategy',
      tagline: 'Get found by the right people',
      desc: 'Ranking on Google is not luck — it is strategy. We audit your site, optimize on-page SEO, build content plans, and track results so your business gets consistent organic traffic.',
      features: ['Technical SEO audit', 'Keyword research', 'On-page optimization', 'Content strategy', 'Monthly reporting'],
      price: 'From $800/mo',
    },
  ];
}
