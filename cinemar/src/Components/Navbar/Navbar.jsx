import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav>
                <ul className='flex gap-5'>
                    <li><Link to="/"> HOME </Link></li>
                    <li><Link to="filmes"> FILMES </Link></li>
                    <li><Link to="noticias"> NOTÍCIAS </Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;