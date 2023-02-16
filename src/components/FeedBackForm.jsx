import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedBackForm() {

    const [text, setText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleTextChange = (e) => {

        if(text === '') {
            setbtnDisabled(true);
            setMessage(null);
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Text must be atleast 10 characters in length.');
            setbtnDisabled(true);
        } else {
            setMessage(null);
            setbtnDisabled(false);
        }

        setText(e.target.value);
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>

                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review"/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedBackForm;