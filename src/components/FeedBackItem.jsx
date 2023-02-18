import PropTypes from 'prop-types';
import React from 'react';
import Card from './shared/Card';
import { FaTimes,FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';

function FeedBackItem({item}) {
    const {deleteFeedBack,editFeedBack} = useContext(FeedBackContext);
    // const [rating, setRating] = useState(1);
    // const [comment, setComment] = useState("Hi!");
    
    // const handleClick = () => {
    //     setRating((prev) => {
    //         return prev + 1;
    //     });
    // }

    return (
        <Card>
        <div className="num-display">
            {item.rating}
        </div>
        <button onClick={() => deleteFeedBack(item.id)} className='close'>
            <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedBack(item)} className='edit'>
            <FaEdit color='purple' />
        </button>
        <div className="text-display">
            {item.text}
        </div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedBackItem;