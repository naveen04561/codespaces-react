// import PropTypes from 'prop-types';
import FeedBackItem from "./FeedBackItem";
import React from 'react';
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';

function FeedBackList() {
    const {feedback} = useContext(FeedBackContext);
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback</p>
    }

    return (
        <div className="feedback-list">
            {
                feedback.map((item) => (
                    <FeedBackItem key={item.id} item={item} />
                ))
            }
        </div>
    )
}

// FeedBackList.propTypes = {
//     // feedback: PropTypes.array,
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedBackList;