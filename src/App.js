import React, { useState } from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList"
import FeedBackData from "./data/FeedBackData";

//Old Way
function App() {

    const [feedBack, setFeedBack] = useState(FeedBackData);

    const deleteFeedBack = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedBack(feedBack.filter((item) => item.id !== id));
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedBackList feedback={feedBack} handleDelete={deleteFeedBack}/>
            </div>
        </>
    )
}

// function App() {
//   const title = "Hi";
//   const body = "Hello";
//   const comments = [
//     { id: 1, name: "comment1" },
//     { id: 2, name: "comment2" },
//     { id: 3, name: "comment3" },
//   ];

//   const commentBlock = (
//     <div className="comments">
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index + comment.id}>{comment.name}</li>
//         ))}
//       </ul>
//     </div>
//   );

//   const value = true;

//   return (
//     <div className="container">
//       <h1>Hello App</h1>
//       <p>{title}</p>

//       {value && commentBlock}
//     </div>
//   );
// }

// New way
// function App() {
//     return React.createElement(
//         'div',
//         { className:'container' },
//         React.createElement(
//             'h1',{},'My App'
//         )
//     )
// }

export default App;
