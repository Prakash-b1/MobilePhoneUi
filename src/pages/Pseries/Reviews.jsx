import { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const Reviews = () => {
  const initialReviews = [
    {
      id: 1,
      clientName: "John Doe",
      date: "2024-10-01",
      review: "Great service! Highly recommend for value for money.",
      rating: 4,
      imageUrl: "https://via.placeholder.com/150", // Dummy image URL
    },
    {
      id: 2,
      clientName: "Jane Smith",
      date: "2024-09-28",
      review: "Quality work and excellent support. Will hire again.",
      rating: 5,
      imageUrl: "https://via.placeholder.com/150", // Dummy image URL
    },
  ];

  const additionalReviews = [
    {
      id: 3,
      clientName: "Alice Johnson",
      date: "2024-09-15",
      review: "Very satisfied with the results. Excellent quality!",
      rating: 5,
      imageUrl: "https://via.placeholder.com/150", // Dummy image URL
    },
    {
      id: 4,
      clientName: "Bob Brown",
      date: "2024-09-10",
      review: "Good experience overall, but there's room for improvement.",
      rating: 3,
      imageUrl: "https://via.placeholder.com/150", // Dummy image URL
    },
    {
      id: 5,
      clientName: "Charlie White",
      date: "2024-09-05",
      review: "Fantastic work! Will definitely come back for more.",
      rating: 4,
      imageUrl: "https://via.placeholder.com/150", // Dummy image URL
    },
  ];

  const [visibleReviews, setVisibleReviews] = useState(initialReviews);

  const handleReadMore = () => {
    setVisibleReviews((prev) => [...prev, ...additionalReviews]);
  };

  return (
    <div className='p-20 flex flex-col items-center'>
      <p className="text-[35px] mb-5">Top Reviews</p>
      <div className="flex flex-col space-y-5">
        {visibleReviews.map((review) => (
          <div key={review.id} className="flex items-start border p-4 rounded-lg shadow-md">
            <img src={review.imageUrl} alt={review.clientName} className="w-16 h-16 rounded-full mr-4" />
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="font-bold">{review.clientName}</p>
                <span className="ml-2 text-gray-500 text-sm">{review.date}</span>
              </div>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < review.rating ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-1">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="mt-5 text-blue-500 underline flex items-center gap-2" 
        onClick={handleReadMore}
      >
        Read More 
      <FaChevronDown/>
      </button>
    </div>
  );
};

export default Reviews;
