import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

function Home() {

    const [filmes, setFilmes] = useState([])

    const apiKey='api_key=d1bef122d48992b960cc79c7306f5c1b'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w780/'

    
    useEffect( () => {
        fetch(`${urlBase}now_playing?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro))
    },[])


    return (
        <>
            <h1>FILMES EM CARTAZ</h1>
            <div className="listaFilmes grid grid-cols-3 gap-36 mx-48">
            {
                filmes.map(filme => (
                    <div className="card-filme" key={filme.id}>
                        
                        <Link to={`${filme.id}`}>
                            <img src={`${urlImg}${filme.poster_path}`} className="min-w-full rounded-xl"/>
                            <h1>{filme.title}</h1>
                        </Link>
                    </div>
                ))
            }
            </div>
            
        </>
    );
}

export default Home;