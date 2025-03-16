import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Card } from './ui/Card';

interface CategoryCardProps {
  name: string;
  icon: string;
  count?: number;
}

export const CategoryCard = ({ name, icon, count }: CategoryCardProps) => {
  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <Link to={`/category/${name.toLowerCase()}`}>
      <Card className="flex flex-col items-center p-6 text-center">
        {Icon && <Icon className="mb-4 h-12 w-12 text-purple-500" />}
        <h3 className="mb-2 text-lg font-semibold">{name}</h3>
        {count && <p className="text-sm text-gray-500">{count} gigs available</p>}
      </Card>
    </Link>
  );
};