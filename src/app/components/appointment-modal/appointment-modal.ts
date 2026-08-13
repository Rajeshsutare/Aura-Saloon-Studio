import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SERVICES_DATA, PACKAGES_DATA } from '../../data/salon-data';
import { BookingRequest } from '../../models/salon.models';

@Component({
  selector: 'app-appointment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment-modal.html',
  styleUrls: ['./appointment-modal.less']
})
export class AppointmentModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() preselectedItem: string | null = null;
  @Output() close = new EventEmitter<void>();

  services = SERVICES_DATA;
  packages = PACKAGES_DATA;

  formData: BookingRequest = {
    fullName: '',
    mobile: '',
    email: '',
    serviceOrPackageId: '',
    date: '',
    time: '11:00 AM'
  };

  isSubmitted = false;
  errorMessage = '';

  timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
    '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'
  ];

  ngOnChanges() {
    if (this.preselectedItem) {
      this.formData.serviceOrPackageId = this.preselectedItem;
    }
  }

  onCloseModal() {
    this.isSubmitted = false;
    this.errorMessage = '';
    this.close.emit();
  }

  onSubmit() {
    if (!this.formData.fullName || !this.formData.mobile || !this.formData.date) {
      this.errorMessage = 'Please complete all required fields (*).';
      return;
    }

    this.errorMessage = '';
    // Simulating API call submission
    setTimeout(() => {
      this.isSubmitted = true;
    }, 400);
  }
}