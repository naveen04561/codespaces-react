// import { useParams } from "react-router-dom";
import { Navigate,useNavigate,Routes,Route } from "react-router-dom";

function Post() {
    const status = 200;

    const navigate = useNavigate();

    const onClick = () => {
        console.log('Hello');
        navigate('/about');
    }

    if(status === 404) {
        return <Navigate to='/notfound' />
    }
    return (
        <div>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path='/show' element={<h1>Hello Show</h1>}></Route>
            </Routes>
        </div>
    )
}

export default Post;