'use client';

import Link from 'next/link';

interface Victim {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  hometown: string;
  websiteCopy: string;
  donationLink?: string;
}

export default function VictimCard({ victim }: { victim: Victim }) {
  return (
    <Link href={`/victims/${victim.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="aspect-w-1 aspect-h-1 mb-4">
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {victim.firstName} {victim.lastName}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Age {victim.age} • {victim.hometown}
        </p>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
          {victim.websiteCopy}
        </p>
        {victim.donationLink && (
          <div className="mt-4">
            <a
              href={victim.donationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              onClick={(e) => e.stopPropagation()}
            >
              Support Family
            </a>
          </div>
        )}
      </div>
    </Link>
  );
} 