import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.less']
})
export class HeroComponent implements OnInit, OnDestroy {
  @Output() openBooking = new EventEmitter<string | void>();

  slides = [
    {
      title: 'Elevate Your Style',
      description: 'Premium grooming engineered for the modern, discerning gentleman.',
      image: 'https://images.unsplash.com/photo-1671750145646-0f4d791b8025?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMHx8fGVufDB8fHx8fA%3D%3D',
      primaryCta: 'Book Experience',
      secondaryCta: 'Explore Services'
    },
    {
      title: 'Look Sharp. Feel Confident.',
      description: 'Master razor precision, tailored fade cuts, and luxury hot-towel steam therapy.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920',
      primaryCta: 'Book Appointment',
      secondaryCta: 'View Packages'
    },
    {
      title: 'Your Style, Our Craft',
      description: 'Relax in a high-end masculine atmosphere with handcrafted grooming solutions.',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1920',
      primaryCta: 'Claim Your Slot',
      secondaryCta: 'Meet Founder'
    }
  ];

  currentSlide = 0;
  autoplayInterval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  onPrimaryClick() {
    this.openBooking.emit();
  }

  scrollTo(sectionId: string) {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}