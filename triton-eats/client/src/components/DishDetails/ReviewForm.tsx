import React, { useState } from 'react';

type ReviewFormProps = {
    onSubmit: (reviewData: { rating: number; reviewText: string; recommend: boolean; }) => void;
};

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {

    const [rating, setRating] = useState<number>(-1); 
    const [reviewText, setReviewText] = useState<string>(''); 
    const [recommend, setRecommend] = useState<boolean | null>(null); 
    
    
    const handleStarClick = (star: number) => {
        if (star === rating) {
            setRating(0); // Reset if the same star is clicked again
        } else {
            setRating(star); // Otherwise, set the new rating
        }
    };
    
    const handleSubmit = () => {
        // Alert user if recommend or like is unanswered (null)
        if (recommend === null || rating < 0) {
            alert("Please rate the dish and indicate whether you recommend it before submitting. If you would like to give the dish 0 stars, please click one of the stars twice.");
            return;
        }
    
        onSubmit({ rating, reviewText, recommend });
    
        // Reset all fields after submission
        setRating(-1);
        setReviewText('');
        setRecommend(null);

    };
    return (
        <div className="reviewForm">
            <div className="reviewFormTitle">
                <h2>Leave a Review</h2>

                {/* Star Rating Section: Click stars to set rating, click the same star to reset to 0, or click a different star to set to that rating */}
                <div className="starRating">
                    <p className='starRatingText'>Rate out of 5:</p>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            aria-label='reviewFormStars'
                            key={star}
                            className={`star ${rating >= star ? 'filled' : ''}`}
                            onClick={() => handleStarClick(star)}
                        >
                            ★
                        </span>
                    ))}
                    
                </div>
            </div>

            {/* Review Text Area */}
            <textarea
                aria-label='reviewFormInput'
                placeholder="Write your review here (optional)..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={5}
                cols={30}
            />

            {/** Would Recommend/Like Dish section */}
            {/** Buttons act as levers, switched on or off (true or false),
             *  If Yes is selected, and you reselect yes, deselects options and sets to null, same for No
             *  If Yes is selected, and you select no, selects no, deselects yes. Same vice versa
             */}

           
            <div className="recommendSection">
                <h4 className='likeRecTitle'>Would you recommend this dish to others?</h4>
                <div>
                    <button
                        aria-label='YesButton'
                        className={`recLikeButton ${recommend === true ? 'selected' : ''}`}
                        onClick={() => recommend === true ? setRecommend(null) : setRecommend(true)}
                    >
                        Yes
                    </button>
                    <button
                        aria-label='NoButton'
                        className={`recLikeButton ${recommend === false ? 'selected' : ''}`}
                        onClick={() => recommend === false ? setRecommend(null) : setRecommend(false)}
                    >
                        No
                    </button>
                </div>
            </div>
            

            {/* Submit Button */}
            <button aria-label='SubmitButton' onClick={handleSubmit} className="submitReview">
                Submit Review
            </button>
        </div>
    );
};

export default ReviewForm;



           