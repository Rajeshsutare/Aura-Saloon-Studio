import { SalonInfo, ServiceItem, GroomPackage, Testimonial, GalleryItem } from '../models/salon.models';

export const SALON_INFO: SalonInfo = {
    name: 'AURA GENTLEMEN',
    tagline: 'Timeless Style Meets Modern Grooming',
    phone: '+918080387349',
    displayPhone: '+91 8080387349',
    whatsappNumber: '918080387349',
    email: 'concierge@auragentlemen.com',
    address: 'Taroda Kh., Dhanvantri Colony, Waman Nagar, Nanded, Maharashtra 431605',
    city: 'Pune, Maharashtra 411001',
    openingHours: 'Monday – Sunday: 10:00 AM – 09:00 PM',
    // googleMapsUrl: 'https://www.google.com/maps/place/SIGNATE+BEAUTY+SALON/@19.180936,77.2927241,19.75z/data=!4m6!3m5!1s0x3bd1d684994a2973:0x422ba030e373ccf5!8m2!3d19.1812291!4d77.2926139!16s%2Fg%2F11xytd5cnr?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D',
    // googleMapsEmbedUrl: 'https://www.google.com/maps/place/SIGNATE+BEAUTY+SALON/@19.180936,77.2927241,19z/data=!4m6!3m5!1s0x3bd1d684994a2973:0x422ba030e373ccf5!8m2!3d19.1812291!4d77.2926139!16s%2Fg%2F11xytd5cnr?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D',
    // Direct redirect link (opens Google Maps app / web tab)
    googleMapsUrl: 'https://www.google.com/maps/place/SIGNATE+BEAUTY+SALON/@19.1812291,77.2926139,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd1d684994a2973:0x422ba030e373ccf5!8m2!3d19.1812291!4d77.2926139!16s%2Fg%2F11xytd5cnr',

    // Embed link for iframe (works directly in website UI without getting blocked)
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8356973686883!2d77.290039!3d19.1812291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d684994a2973%3A0x422ba030e373ccf5!2sSIGNATE%20BEAUTY%20SALON!5e0!3m2!1sen!2sin',
    socials: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        youtube: 'https://youtube.com',
        whatsapp: 'https://wa.me/918080387349'
    }
};

export const SERVICES_DATA: ServiceItem[] = [
    {
        id: 'srv-1',
        name: 'Classic Precision Haircut',
        description: 'Tailored haircut with consultation, scalp wash, and precision hot-towel styling.',
        duration: '35 min',
        price: 399,
        category: 'hair',
        image: 'https://plus.unsplash.com/premium_photo-1661288528400-212e4f7c23f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlmZmVyZW50JTIwbWVucyUyMGhhaXIlMjBjdXR8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 'srv-2',
        name: 'Signature Groom Cut & Style',
        description: 'Custom textured cut, reconditioning wash, scalp massage, and Matte Clay finish.',
        duration: '45 min',
        price: 599,
        category: 'hair',
        image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'srv-3',
        name: 'Beard Sculpture & Trim',
        description: 'Razor sharp cheek lines, neck contouring, conditioning oil, and hot towel treatment.',
        duration: '30 min',
        price: 349,
        category: 'beard',
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'srv-4',
        name: 'Royal Straight Razor Shave',
        description: 'Traditional hot steam, pre-shave oil, straight razor shave, cold compress & balms.',
        duration: '35 min',
        price: 449,
        category: 'beard',
        image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA3fHxtZW5zJTIwaGFpciUyMHNhbG9vbiUyMGNlbnRlciUyMGludGVyaWFyfGVufDB8fDB8fHww'
    },
    {
        id: 'srv-5',
        name: 'Detoxifying Scalp & Hair Spa',
        description: 'Deep follicle cleanser, revitalizing hair mask, and relaxing 20-min acupressure massage.',
        duration: '45 min',
        price: 799,
        category: 'spa',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'srv-6',
        name: 'Charcoal Deep Hydration Facial',
        description: 'Activated charcoal pore cleanser, exfoliation mist, and collagen-boosting facial massage.',
        duration: '50 min',
        price: 999,
        category: 'grooming',
        image: 'https://media.istockphoto.com/id/1163483363/photo/spa-therapy-for-men-receiving-facial-black-mask.webp?a=1&b=1&s=612x612&w=0&k=20&c=PgQMo-UqtnPDPvzMirZJ9peZle5sewzXbsrxpR4WxIo='
    }
];

export const PACKAGES_DATA: GroomPackage[] = [
    {
        id: 'pkg-1',
        name: 'Essential Gentleman',
        subtitle: 'The routine maintenance package for a quick refresh.',
        features: [
            'Precision Haircut & Style',
            'Beard Sculpture or Clean Shave',
            'Refreshing Hair Wash & Scalp Massage',
            'Hot Towel Finish'
        ],
        price: 799,
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'pkg-2',
        name: 'Gentleman Executive',
        subtitle: 'Our top recommended monthly grooming ritual.',
        features: [
            'Signature Haircut & Consultation',
            'Luxury Beard Trim with Razor Lines',
            'Revitalizing Hair Spa & Scalp Detox',
            'Charcoal Facial & Eye Hydration',
            'Complimentary Espresso / Beverage'
        ],
        price: 1499,
        isPopular: true,
        image: 'https://images.unsplash.com/photo-1517832606589-715006093554?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'pkg-3',
        name: 'The Royal Wedding Groom',
        subtitle: 'Ultimate luxury transformation crafted for special occasions.',
        features: [
            'Master Cut, Beard Sculpting & Hair Spa',
            'Gold Radiance Facial & De-tan Therapy',
            'Hands & Feet Care Massage',
            'Professional Event Styling',
            'Private Suite Access & Champagne/Gourmet Coffee'
        ],
        price: 2499,
        isPopular: false,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
    }
];

export const GALLERY_DATA: GalleryItem[] = [
    { id: 'g1', title: 'Classic Low Fade', category: 'hair', imageUrl: 'https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpZmZlcmVudCUyMG1lbnMlMjBoYWlyJTIwY3V0fGVufDB8fDB8fHww' },
    { id: 'g2', title: 'Contoured Beard Style', category: 'beard', imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800' },
    { id: 'g7', title: 'Contoured Beard Style', category: 'beard', imageUrl: 'https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhcmQlMjBjdXR8ZW58MHx8MHx8fDA%3D' },
    { id: 'g8', title: 'Contoured Beard Style', category: 'beard', imageUrl: 'https://plus.unsplash.com/premium_photo-1677444546747-ac6ecbf08945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXJkJTIwY3V0fGVufDB8fDB8fHww' },
    { id: 'g3', title: 'Vintage Barber Lounge', category: 'salon', imageUrl: 'https://images.unsplash.com/photo-1671750145646-0f4d791b8025?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'g4', title: 'Hot Towel Treatment', category: 'grooming', imageUrl: 'https://images.unsplash.com/photo-1653875700329-a7c8aca94c95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG90JTIwVG93ZWwlMjBUcmVhdG1lbnR8ZW58MHx8MHx8fDA%3D' },
    { id: 'g5', title: 'Textured Crop & Taper', category: 'hair', imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800' },
    { id: 'g6', title: 'Royal Grooming Suite', category: 'salon', imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: 't1',
        clientName: 'Rahul Sharma',
        role: 'Corporate Executive',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
        rating: 5,
        comment: "The precision in their haircuts is unmatched. Atmosphere is quiet, masculine, and sophisticated. Exceptional service every time.",
        serviceUsed: 'Gentleman Executive Package'
    },
    {
        id: 't2',
        clientName: 'Akshay Patil',
        role: 'Architect',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
        rating: 5,
        comment: "The beard sculpt and hot towel treatment are pure perfection. Really great barbers who understand hair types and growth directions.",
        serviceUsed: 'Beard Sculpture & Trim'
    },
    {
        id: 't3',
        clientName: 'Rohan Mehta',
        role: 'Creative Director',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
        rating: 5,
        comment: "Booked the Royal Wedding Groom package before my big day. The attention to detail and private treatment made me feel extremely relaxed and confident.",
        serviceUsed: 'The Royal Wedding Groom'
    }
];