import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Card } from './ui/Card';
import { formatPrice } from '../lib/utils';
import type { Gig } from '../types';

interface GigCardProps {
  gig: Gig;
}

export const GigCard = ({ gig }: GigCardProps) => {
  return (
    <Link to={`/gig/${gig.id}`}>
      <Card>
        <div className="aspect-video w-full overflow-hidden rounded-md">
          <img
            src={gig.image}
            alt={gig.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {gig.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {gig.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                {gig.rating}
              </span>
            </div>
            <p className="text-lg font-semibold text-purple-500">
              {formatPrice(gig.price)}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};