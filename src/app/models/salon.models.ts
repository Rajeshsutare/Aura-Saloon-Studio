export interface ServiceItem {
    id: string;
    name: string;
    description: string;
    duration: string;
    price: number;
    category: 'hair' | 'beard' | 'spa' | 'grooming';
    image: string;
}

export interface GroomPackage {
    id: string;
    name: string;
    subtitle: string;
    features: string[];
    price: number;
    isPopular?: boolean;
    image: string;
}

export interface Testimonial {
    id: string;
    clientName: string;
    role: string;
    avatar: string;
    rating: number;
    comment: string;
    serviceUsed: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    category: 'all' | 'hair' | 'beard' | 'grooming' | 'salon';
    imageUrl: string;
}

export interface SalonInfo {
    name: string;
    tagline: string;
    phone: string;
    displayPhone: string;
    whatsappNumber: string;
    email: string;
    address: string;
    city: string;
    openingHours: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    socials: {
        instagram: string;
        facebook: string;
        youtube: string;
        whatsapp: string;
    };
}

export interface BookingRequest {
    fullName: string;
    mobile: string;
    email: string;
    serviceOrPackageId: string;
    date: string;
    time: string;
    message?: string;
}