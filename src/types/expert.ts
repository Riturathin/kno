export type Days = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export interface TimeSlot {
    start: string; // e.g., "09:00"
    end: string;   // e.g., "17:00"
}

export type AvailabilitySchedule = Partial<Record<Days, TimeSlot[]>>;

export interface Expert {
    id: number;
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    socialLinks: {
        twitter?: string;
        linkedin?: string;
        github?: string;
        [key: string]: string | undefined; // Allow for additional social links
    };
    timezone: string;
    domain: string;
    skills: string[];
    pricing: {
        hourlyRate?: number;
        perSession?: number;
    };
    currency: string;
    availability: AvailabilitySchedule;
    location: string;
}
