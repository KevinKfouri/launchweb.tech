import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  filter = signal('all');

  projects = [
    { id: 'nova', cat: 'webapp', title: 'Nova CRM', type: 'Web Application', result: '+180% lead conversion', color: '#5b8cff' },
    { id: 'bloom', cat: 'website', title: 'Bloom Studio', type: 'Website', result: '2.1s load time', color: '#a78bfa' },
    { id: 'apex', cat: 'seo', title: 'Apex Legal', type: 'SEO Campaign', result: '#1 for 12 keywords', color: '#d4b87a' },
    { id: 'fleet', cat: 'webapp', title: 'FleetTrack', type: 'Web Application', result: '10k daily users', color: '#5b8cff' },
    { id: 'mesa', cat: 'website', title: 'Mesa Restaurant', type: 'Website', result: '+340% reservations', color: '#a78bfa' },
    { id: 'vault', cat: 'seo', title: 'Vault Finance', type: 'SEO Campaign', result: '3x organic traffic', color: '#d4b87a' },
  ];

  filters = [
    { id: 'all', label: 'All' },
    { id: 'webapp', label: 'Web Apps' },
    { id: 'website', label: 'Websites' },
    { id: 'seo', label: 'SEO' },
  ];

  setFilter(id: string): void {
    this.filter.set(id);
  }

  visible() {
    const f = this.filter();
    return f === 'all' ? this.projects : this.projects.filter((p) => p.cat === f);
  }
}
