import PropTypes from 'prop-types';
import React from 'react';
import Card from './shared/Card';
import { FaTimes} from 'react-icons/fa';

function FeedBackItem({item, handleDelete}) {

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
        <button onClick={() => handleDelete(item.id)} className='close'>
            <FaTimes color='purple' />
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