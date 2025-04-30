import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  max = 5,
  size = 20
}) => {
  return (
    <div className="flex">
      {[...Array(max)].map((_, index) => (
        <Star
          key={index}
          size={size}
          className={`${
            index < rating 
              ? 'text-cosmic-accent fill-cosmic-accent' 
              : 'text-gray-300'
          } mr-1`}
        />
      ))}
    </div>
  );
};

export default StarRating;