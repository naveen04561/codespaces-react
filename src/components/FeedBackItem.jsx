import { useState } from "react";

function FeedBackItem() {

    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("Hi!");
    
    // const handleClick = () => {
    //     setRating((prev) => {
    //         return prev + 1;
    //     });
    // }

    return (
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-display">
                {comment}
            </div>
            {/* <button onClick={handleClick}>Click</button> */}
        </div>
    )
}

export default FeedBackItem;