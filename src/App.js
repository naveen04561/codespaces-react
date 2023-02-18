import React, { useState } from "react";
import {BrowserRouter as Router,Route,Routes,NavLink} from "react-router-dom";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList"
import FeedBackData from "./data/FeedBackData";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";

//Old Way
function App() {

    const [feedBack, setFeedBack] = useState(FeedBackData);

    const deleteFeedBack = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedBack(feedBack.filter((item) => item.id !== id));
        }
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <FeedBackForm />
                        <FeedBackStats feedback={feedBack} />
                        <FeedBackList feedback={feedBack} handleDelete={deleteFeedBack}/>
                        </>
                    }>
                    </Route>
                    <Route path="/about" element={<AboutPage/>}/>
                    {/* <Route path="/post/:id/:name" element={<Post/>}/> */}
                    <Route path="/post/*" element={<Post/>}/>
                </Routes>

                {/* <Card>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </Card> */}

                <AboutIconLink />
            </div>
        </Router>
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
