import React from 'react';
import { Review } from '../../types/reviewTypes';
import { FoodReview } from './FoodReview';

interface ReviewListProps {
    reviews: Review[];
    sortOption: string;
    setSortOption: (value: string) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, sortOption, setSortOption }) => {
    // Sort reviews based on the selected sorting option
    const sortedReviews = [...reviews].sort((a, b) => {
        if (sortOption === "mostCritical") {
            return a.rating - b.rating;
        } else if (sortOption === "highestRated") {
            return b.rating - a.rating;
        } else if (sortOption === "mostRecent") {
            return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
        } else if (sortOption === "oldest") {
            return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
        }
        
        return 0;
    });

    return (
        <div className="reviewList">
            <div className='reviewListTitle'>
                <h1>Food Reviews</h1>
                {/** Sort Reviews */}
                <div className="sortOptions">
                    <label>Sort by:</label>
                    <select aria-label='foodReviewsSortOptions' className='reviewSortChoices' value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="mostRecent">Most Recent</option>
                        <option value="mostCritical">Most Critical</option>
                        <option value="highestRated">Highest Rated</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
            
            <div className="reviewListContent">

                {sortedReviews.length > 0 ? (
                    sortedReviews.map((review, index) => (
                        <FoodReview key={index} review={review} />
                    ))
                ) : (
                    <p>No reviews available. Be the First to Review!</p>
                )}
            </div>
        </div>
    );
};

export default ReviewList;
