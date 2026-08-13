import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SALON_INFO } from '../../data/salon-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.less']
})
export class HeaderComponent {
  @Output() openBooking = new EventEmitter<string | void>();
  salonInfo = SALON_INFO;
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Packages', id: 'packages' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Founder', id: 'founder' },
    { label: 'Location', id: 'location' },
    { label: 'Contact', id: 'contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.isMobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  triggerBooking() {
    this.isMobileMenuOpen = false;
    this.openBooking.emit();
  }
}