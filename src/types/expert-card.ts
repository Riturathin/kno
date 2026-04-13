interface ExpertCardProps {
    id: number;
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    domain: string;
    skills: string[];
    timezone: string;
    location: string;
    pricing: {
        hourlyRate: number;
        currency: string;
    };
    socialLinks: {
        twitter?: string;
        linkedin?: string;
        github?: string;
        [key: string]: string | undefined; // Allow for additional social links
    };
}

export type { ExpertCardProps };