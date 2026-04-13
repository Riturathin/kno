import ExpertCard from "./ExpertCard";
import type { Expert } from "../../types/expert";

interface ExpertListProps {
    experts: Expert[];
}

const ExpertList = ({ experts: experts }: ExpertListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} />
            ))}
        </div>
    );
};

export default ExpertList;