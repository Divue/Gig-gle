import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Card } from './ui/Card';
import { formatPrice } from '../lib/utils';

interface FreelancerCardProps {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  hourlyRate: number;
  description: string;
  skills: string[];
}

export const FreelancerCard = ({
  id,
  name,
  title,
  avatar,
  rating,
  hourlyRate,
  description,
  skills,
}: FreelancerCardProps) => {
  return (
    <Link to={`/freelancer/${id}`}>
      <Card>
        <div className="flex items-start space-x-4">
          <img
            src={avatar}
            alt={name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-purple-500">{title}</p>
            <div className="mt-1 flex items-center">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                {rating}
              </span>
              <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                {formatPrice(hourlyRate)}/hr
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};