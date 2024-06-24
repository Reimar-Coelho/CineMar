import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <>
            <header className="flex justify-around bg-primary-raul text-white p-3">
                <h1>CINEMAR</h1>
                <Navbar/>
            </header>
        </>
    );
}

export default Header;