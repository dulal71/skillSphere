
import React from "react";
import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
const Review = () => {
 const   reviews=[
  {
    "id": 1,
    "name": "Rahim Uddin",
    "rating": 5,
    "comment": "This platform helped me learn web development from zero",
    "course": "Complete Web Development Bootcamp"
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "rating": 4,
    "comment": "React course is very clear and easy to understand. Highly recommended.",
    "course": "React & Next.js Mastery"
  },
  {
    "id": 3,
    "name": "Arif Hossain",
    "rating": 5,
    "comment": "UI/UX section was amazing and very practical.",
    "course": "UI/UX Design Essentials"
  },
  {
    "id": 4,
    "name": "Sadia Islam",
    "rating": 4,
    "comment": "Node.js course helped me build backend projects easily.",
    "course": "Node.js API Development"
  },
  {
    "id": 5,
    "name": "Tanvir Ahmed",
    "rating": 5,
    "comment": "Very structured and beginner friendly content.",
    "course": "JavaScript Fundamentals"
  },
  {
    "id": 6,
    "name": "Mim Akter",
    "rating": 4,
    "comment": "Great platform for beginners. I learned a lot.",
    "course": "Python for Beginners"
  }
]
    return (
        <div className="max-w-7xl mx-auto my-14 p-6">
            <Marquee>
    {
        reviews.map(review=>(     <div
            key={review.id}
            className="bg-white p-5 rounded-md shadow hover:shadow-lg transition mr-5"
          >
            <h3 className="font-semibold text-lg">{review.name}</h3>
            
            <p className="text-yellow-500 text-sm flex items-center gap-1">
              <FaStar />{review.rating}
            </p>

            <p className="text-gray-600 mt-2 text-sm">
              {review.comment}
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Course: {review.course}
            </p>
          </div>))
    }
  </Marquee> 
        </div>
    );
};

export default Review;