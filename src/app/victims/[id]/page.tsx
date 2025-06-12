'use client';

import Link from 'next/link';
import { victims, Victim } from '../../data';
import { notFound } from 'next/navigation';

export default async function VictimPage({ params }: { params: { id: string } }) {
  const victim = await Promise.resolve(victims.find((v: Victim) => v.id === params.id));

  if (!victim) {
    notFound();
  }

  const isDeceased = victim.status === "Deceased";
  const statusIcon = isDeceased ? "✝" : "❤️";
  const statusClass = isDeceased ? "bg-danger" : "bg-success";

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 mb-4">
          <Link href="/" className="btn btn-outline-primary">
            ← Back to Memorials
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h1 className="card-title display-4 mb-0">
                  {victim.firstName} {victim.lastName}
                </h1>
                <span className={`badge ${statusClass} ms-2 fs-5`}>
                  {statusIcon} {victim.status}
                </span>
              </div>
              <h2 className="card-subtitle mb-4 text-muted">
                {victim.age > 0 ? `${victim.age} years old • ` : ''}{victim.hometown}
              </h2>
              <p className="card-text lead mb-4">{victim.websiteCopy}</p>
              <div className="progress mb-4">
                <div 
                  className={`progress-bar ${statusClass}`}
                  role="progressbar" 
                  style={{ width: victim.percentageOfGoal }}
                  aria-valuenow={parseInt(victim.percentageOfGoal)} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                >
                  {victim.percentageOfGoal} of {victim.goal}
                </div>
              </div>
              <a 
                href={victim.donationLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn btn-lg ${isDeceased ? 'btn-danger' : 'btn-success'}`}
              >
                {isDeceased ? 'Donate to Memorial Fund' : 'Support Recovery Fund'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 