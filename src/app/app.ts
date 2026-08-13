import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { SALON_INFO, PACKAGES_DATA, GALLERY_DATA, TESTIMONIALS_DATA } from './data/salon-data';

import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { AppointmentModalComponent } from './components/appointment-modal/appointment-modal';
import { FloatingActionsComponent } from './components/floating-actions/floating-actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AppointmentModalComponent,
    FloatingActionsComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.less']
})
export class AppComponent {
  private sanitizer = inject(DomSanitizer);

  salonInfo = SALON_INFO;
  packages = PACKAGES_DATA;
  gallery = GALLERY_DATA;
  testimonials = TESTIMONIALS_DATA;

  isBookingOpen = false;
  selectedBookingServiceId: string | null = null;
  selectedGalleryFilter = 'all';

  get sanitizedGoogleMapsUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.salonInfo.googleMapsEmbedUrl);
  }

  get filteredGallery() {
    if (this.selectedGalleryFilter === 'all') return this.gallery;
    return this.gallery.filter(item => item.category === this.selectedGalleryFilter);
  }

  openBookingModal(serviceOrPackageId?: string) {
    this.selectedBookingServiceId = serviceOrPackageId || null;
    this.isBookingOpen = true;
  }

  closeBookingModal() {
    this.isBookingOpen = false;
    this.selectedBookingServiceId = null;
  }

  filterGallery(cat: string) {
    this.selectedGalleryFilter = cat;
  }

  openGoogleMaps() {
    window.open(this.salonInfo.googleMapsUrl, '_blank');
  }
}