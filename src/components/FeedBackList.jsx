import PropTypes from 'prop-types';
import FeedBackItem from "./FeedBackItem";
import React from 'react';

function FeedBackList({ feedback,handleDelete }) {

    if(!feedback || feedback.length === 0) {
        return <p>No Feedback</p>
    }

    return (
        <div className="feedback-list">
            {
                feedback.map((item) => (
                    <FeedBackItem key={item.id} item={item} 
                    handleDelete={handleDelete} />
                ))
            }
        </div>
    )
}

FeedBackList.propTypes = {
    // feedback: PropTypes.array,
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedBackList;