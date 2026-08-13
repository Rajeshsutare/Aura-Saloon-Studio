import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_DATA } from '../../data/salon-data';
import { ServiceItem } from '../../models/salon.models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.less']
})
export class ServicesComponent {
  @Output() selectService = new EventEmitter<string>();

  services: ServiceItem[] = SERVICES_DATA;
  selectedCategory: string = 'all';

  categories = [
    { label: 'All Services', key: 'all' },
    { label: 'Haircuts', key: 'hair' },
    { label: 'Beard & Razor', key: 'beard' },
    { label: 'Hair Spa', key: 'spa' },
    { label: 'Grooming', key: 'grooming' }
  ];

  get filteredServices() {
    if (this.selectedCategory === 'all') return this.services;
    return this.services.filter(s => s.category === this.selectedCategory);
  }

  filterCategory(key: string) {
    this.selectedCategory = key;
  }

  onBookService(serviceId: string) {
    this.selectService.emit(serviceId);
  }
}