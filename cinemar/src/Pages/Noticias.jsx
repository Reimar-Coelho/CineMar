import data from "../../artigos.json";

function Noticias() {
  return (
    <>
      <main className="relative h-screen text-white">
        <h1 className="my-10 mx-48 font-julius">NOTÍCIAS</h1>
        <div className="relative w-full h-full">
          {data.slice(0, 5).map((noticia, index) => (
            <div
              key={noticia.title}
              className={`absolute ${
                index % 2 === 0 ? "left-10" : "right-10"
              } my-4 w-2/4 p-4 border-2 rounded mx-32 font-julius min-h-64 bg-black flex flex-row justify-center`}
              style={{ top: `${index * 40 + 3}%` }}
            >
              <div>
                <h2 className="font-bold text-xl font-julius">
                  {noticia.title}
                </h2>
                <div className="text">
                  {noticia.text.map((text, i) => (
                    <span className="font-julius" key={i}>
                      {text}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <img
                  className="h-full rounded-xl min-w-44"
                  src={noticia.image}
                  alt={noticia.title}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Noticias;
