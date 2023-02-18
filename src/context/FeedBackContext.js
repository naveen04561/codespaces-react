import { createContext,useState } from "react";

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {

    const [feedback, setFeedBack] = useState([{
        id: 1,
        text: 'This item is from context',
        rating: 10,
    }]);

    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedBack = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedBack(feedback.filter((item) => item.id !== id));
        }
    }

    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true,
        });
    }

    return (
        <FeedBackContext.Provider value={{
            feedback, // or just feedback
            deleteFeedBack,
            editFeedBack,
            feedBackEdit,
        }}>
            {children}
        </FeedBackContext.Provider>
    )
}

export default FeedBackContext;