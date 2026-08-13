import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SALON_INFO } from '../../data/salon-data';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-actions.html',
  styleUrls: ['./floating-actions.less']
})
export class FloatingActionsComponent {
  salonInfo = SALON_INFO;
  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openWhatsApp() {
    const message = encodeURIComponent('Hello, I would like to book an appointment at ' + this.salonInfo.name);
    window.open(`https://wa.me/${this.salonInfo.whatsappNumber}?text=${message}`, '_blank');
  }
}