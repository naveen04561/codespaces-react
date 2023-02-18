import {Link} from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            About
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </div>
    )
}

export default AboutPage;