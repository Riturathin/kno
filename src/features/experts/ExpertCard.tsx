import type { Expert } from "../../types/expert";

interface ExpertCardProps {
    expert: Expert;
    onClick?: () => void;
    variant?: 'default' | 'compact';
}

const ExpertCard = ({ expert, onClick, variant = 'default' }: ExpertCardProps) => {

    const domainColors: Record<string, string> = {
        Tech: "bg-blue-100 text-blue-800",
        Legal: "bg-amber-100 text-amber-800",
        Business: "bg-green-100 text-green-800",
        Design: "bg-purple-100 text-purple-800",
    };

    const badgeClass = domainColors[expert.domain] || "bg-gray-100 text-gray-800";

    const isCompact = variant === 'compact';

    return (
        <div
            onClick={onClick}
            className={`
        bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md cursor-pointer
        ${isCompact ? 'flex flex-row items-center gap-4' : 'flex flex-col items-center text-center'}
      `}
        >
            <img
                src={expert.imageUrl}
                alt={expert.name}
                className={`${isCompact ? 'w-12 h-12' : 'w-24 h-24'} rounded-full object-cover bg-gray-50`}
            />

            <div className={isCompact ? 'flex-1' : 'mt-4'}>
                <h2 className="text-lg font-bold text-gray-900">{expert.name}</h2>
                <p className="text-sm font-medium text-gray-600">{expert.title}</p>

                <div className="mt-3 flex items-center justify-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeClass}`}>
                        {expert.domain}
                    </span>
                    {!isCompact && (
                        <span className="text-sm font-bold text-gray-900">
                            ${expert.pricing.hourlyRate}/hr
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExpertCard;