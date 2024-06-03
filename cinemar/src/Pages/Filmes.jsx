import { useState } from "react"

function Filmes() {

    const [filmes, setFilmes] = useState([])

    const apiKey='d1bef122d48992b960cc79c7306f5c1b'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    
    
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d1bef122d48992b960cc79c7306f5c1b')
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(erro => console.log(erro))

    console.log(filmes, setFilmes, apiKey, urlBase, urlImg)
    
    return (
        
        <>
            <h1>Filmes</h1>
            {
                filmes.map(filme => (
                    <div className="card-filme" key={filme.id}>
                        <h1>{filme.title}</h1>
                    </div>
                ))
            }
        </>
    );
    
}

export default Filmes;