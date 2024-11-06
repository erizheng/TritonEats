import React from 'react';

type RecommendedItemProps = {
    name: string;
    price: string;
    rating: number;
};

const RecommendedItem: React.FC<RecommendedItemProps> = ({ name, price, rating }) => (
    <div className="recommended-item">
        <h3>{name}</h3>
        <p>{price}</p>
        <div className="stars">{'⭐'.repeat(rating)}</div>
    </div>
);

export default RecommendedItem;