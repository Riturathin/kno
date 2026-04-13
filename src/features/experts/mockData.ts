import type { Expert } from '../../types/expert';

export const mockExperts: Expert[] = [
    {
        id: 1,
        name: "Alex Rivers",
        title: "Cloud Architect",
        description: "Specializing in AWS and high-scale system design.",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        domain: "Tech",
        skills: ["AWS", "Kubernetes", "Node.js"],
        timezone: "America/New_York",
        location: "New York, USA",
        pricing: {
            hourlyRate: 150,
        },
        currency: "USD",
        socialLinks: {
            github: "https://github.com/alexrivers"
        },
        availability: {
            Monday: [{ start: "09:00", end: "17:00" }],
            Tuesday: [{ start: "09:00", end: "17:00" }],
            Wednesday: [{ start: "09:00", end: "17:00" }],
            Thursday: [{ start: "09:00", end: "17:00" }],
            Friday: [{ start: "09:00", end: "17:00" }]
        }
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        title: "Legal Consultant",
        description: "Expert in intellectual property and startup law.",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        domain: "Legal",
        skills: ["IP Law", "Contracts", "Funding"],
        timezone: "Europe/London",
        location: "London, UK",
        pricing: {
            hourlyRate: 200,
        },
        currency: "GBP",

        socialLinks: {
            linkedin: "https://linkedin.com/in/sarahjenkins"
        },
        availability: {
            // Sarah's Split Shift on Tuesday
            Tuesday: [
                { start: "08:00", end: "11:00" },
                { start: "14:00", end: "18:00" }
            ],
            Saturday: [{ start: "10:00", end: "12:00" }]
        }
    },
    {
        id: 3,
        name: "Michael Lee",
        title: "Business Strategist",
        description: "Helping startups scale and optimize operations.",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        domain: "Business",
        skills: ["Scaling", "Operations", "Market Strategy"],
        timezone: "Asia/Singapore",
        location: "Singapore",
        pricing: {
            hourlyRate: 180,
        },
        currency: "SGD",
        socialLinks: {
            twitter: "https://twitter.com/michaellee"
        },
        availability: {
            Monday: [{ start: "10:00", end: "16:00" }],
            Wednesday: [{ start: "10:00", end: "16:00" }],
            Friday: [{ start: "10:00", end: "16:00" }]
        }
    },
    {
        id: 4,
        name: "Emily Davis",
        title: "UX/UI Designer",
        description: "Creating intuitive and engaging user experiences.",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        domain: "Design",
        skills: ["UX Research", "UI Design", "Prototyping"],
        timezone: "America/Los_Angeles",
        location: "San Francisco, USA",
        pricing: {
            hourlyRate: 120,
        },
        currency: "USD",
        socialLinks: {
            linkedin: "https://linkedin.com/in/emilydavis"
        },
        availability: {
            Tuesday: [{ start: "11:00", end: "19:00" }],
            Thursday: [{ start: "11:00", end: "19:00" }],
            Sunday: [{ start: "12:00", end: "16:00" }]
        }
    }
];

export default mockExperts;