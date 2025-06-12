'use client';

import Link from 'next/link';
import { Victim } from '../app/data';

interface VictimCardProps {
  victim: Victim;
}

export default function VictimCard({ victim }: VictimCardProps) {
  const isDeceased = victim.status === "Deceased";
  const statusClass = isDeceased ? "text-danger" : "text-success";
  const statusIcon = isDeceased ? "✝" : "❤️";

  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">{victim.firstName} {victim.lastName}</h5>
          <span className={`badge ${isDeceased ? 'bg-danger' : 'bg-success'} ms-2`}>
            {statusIcon} {victim.status}
          </span>
        </div>
        <h6 className="card-subtitle mb-2 text-muted">
          {victim.age > 0 ? `${victim.age} years old • ` : ''}{victim.hometown}
        </h6>
        <p className="card-text">{victim.websiteCopy.split('.')[0] + '.'}</p>
        <div className="progress mb-3">
          <div 
            className={`progress-bar ${isDeceased ? 'bg-danger' : 'bg-success'}`}
            role="progressbar" 
            style={{ width: victim.percentageOfGoal }}
            aria-valuenow={parseInt(victim.percentageOfGoal)} 
            aria-valuemin={0} 
            aria-valuemax={100}
          >
            {victim.percentageOfGoal} of {victim.goal}
          </div>
        </div>
        <Link href={`/victims/${victim.id}`} className="btn btn-primary">
          {isDeceased ? 'View Memorial' : 'Support Recovery'}
        </Link>
      </div>
    </div>
  );
} 