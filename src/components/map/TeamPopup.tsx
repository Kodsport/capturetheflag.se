
import React from 'react';
import { TeamItem } from '@/data/teams';
import { useTranslation } from 'react-i18next';

interface TeamPopupProps {
  team: TeamItem;
  onClose: () => void;
}

const TeamPopup: React.FC<TeamPopupProps> = ({ team, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="absolute left-4 top-20 w-80 max-h-[calc(100%-120px)] overflow-y-auto bg-white p-4 rounded-lg shadow-lg z-10">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-ctf-blue">{team.name}</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-1">
        {[team.city, team.country].filter(a => !!a).join(', ')}
      </p>
      <p className="text-sm mt-2">{team.description}</p>
      <div className="mt-3">
        {team.website && (
          <div className="mt-1">
            <a 
              href={team.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-ctf-teal hover:underline"
            >
              {t('teams.team.visit_website')}
            </a>
          </div>
        )}
        {team.achievements && team.achievements.length > 0 && (
          <div className="mt-2">
            <span className="text-sm font-medium">Notable achievements:</span>
            <ul className="text-xs mt-1 list-disc list-inside">
              {team.achievements.slice(0, 2).map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPopup;
