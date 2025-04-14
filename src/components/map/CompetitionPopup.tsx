
import React from 'react';
import { CompetitionItem } from '@/data/competitions';
import { useTranslation } from 'react-i18next';

interface CompetitionPopupProps {
  competition: CompetitionItem;
  onClose: () => void;
}

const CompetitionPopup: React.FC<CompetitionPopupProps> = ({ competition, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="absolute left-4 top-20 w-80 max-h-[calc(100%-120px)] overflow-y-auto bg-white p-4 rounded-lg shadow-lg z-10">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-red-600">{competition.name}</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      {competition.logo ? (
        <div className="mt-2 mb-3 flex justify-center">
          <img 
            src={competition.logo} 
            alt={`${competition.name} logo`} 
            className="h-16 w-auto object-contain"
          />
        </div>
      ) : null}
      
      <p className="text-sm text-gray-600 mt-1">
        {[competition.city, competition.country].filter(a => !!a).join(', ')}
      </p>
      {competition.format && (
        <p className="text-sm mt-1">{t('format')}: {competition.format}</p>
      )}
      <p className="text-sm mt-2">{competition.description}</p>
      {competition.website && (
        <div className="mt-3">
          <a 
            href={competition.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-ctf-teal hover:underline"
          >
            {t('teams.team.visit_website')}
          </a>
        </div>
      )}
    </div>
  );
};

export default CompetitionPopup;
