import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <>
            <header className="flex text-white p-3">
                <h1 className="mr-36 ml-48 font-julius">CINEMAR</h1>
                <Navbar/>
            </header>
        </>
    );
}

export default Header;