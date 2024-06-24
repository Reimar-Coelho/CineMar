import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav>
                <ul className='flex gap-5 font-julius'>
                    <li><Link to="/"> CARTAZ </Link></li>
                    <li><Link to="filmes"> POPULARES </Link></li>
                    <li><Link to="noticias"> NOTÍCIAS </Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;