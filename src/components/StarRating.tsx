import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import Font Awesome icons


interface StarRatingProps {
  rating: number; // Rating value (0 to 5)
  maxRating?: number; // Maximum rating value (default is 5)
  profileImage: string;  // Path to the image
}


const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);


  return (


   
 
    <div className="flex items-center">
    


    <div className="flex flex-col items-center text-center">
      {/* Star Rating */}
      <div className="flex items-center mb-4 p-4 rounded-lg" style={{ backgroundColor: '#E6F1FE' }}>
        {stars.map((star) => {
          if (rating >= star) {
            return <FaStar key={star} className="w-8 h-8" style={{ color: '#006FEE' }} />;
          }
          if (rating >= star - 0.5) {
            return <FaStarHalfAlt key={star} className="w-8 h-8" style={{ color: '#006FEE' }} />;
          }
          return <FaRegStar key={star} className="w-6 h-6 text-gray-300" />;
        })}
      </div>
 
     


      {/* Testimonial */}
      <div className="text-center" style={{ backgroundColor: '#E6F1FE' }}>
      <footer className="mt-4 font-bold text-gray-900" style={{ backgroundColor: '#E6F1FE' }}>
       
          “This step by step is genius. I wish I had known this guide a lot sooner.”
       
        </footer>
        <footer className="mt-4 font-bold text-gray-900" style={{ backgroundColor: '#E6F1FE' }}>
          -Michael Montoya, Freelance Designer
        </footer>
      </div>
    </div>
    </div>
  );
};


export default StarRating;
