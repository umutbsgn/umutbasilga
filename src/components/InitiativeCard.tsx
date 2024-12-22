import { cn } from "@/lib/utils";

interface InitiativeCardProps {
  logo: string;
  name: string;
  ctaText: string;
  logoColors?: string;
  url?: string;
}

const InitiativeCard = ({ logo, name, ctaText, logoColors, url }: InitiativeCardProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-sm transition-all">
      <div className="flex items-center gap-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-white", logoColors)}>
          <img src={logo} alt={name} className="w-8 h-8" />
        </div>
        <span className="text-xl font-medium text-gray-800">{name}</span>
      </div>
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-900 rounded-lg border border-gray-200 text-sm font-medium transition-colors"
      >
        {ctaText}
      </a>
    </div>
  );
};

export default InitiativeCard;