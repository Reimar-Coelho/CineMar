import data from "../../artigos.json";

function Noticias() {
  return (
    <>
      <main className="relative h-screen bg-black text-white">
        <h1>NOTÍCIAS</h1>
        <div className="relative w-full h-full">
          {data.slice(0, 6).map((noticia, index) => (
            <div
              key={noticia.title}
              className={`absolute ${
                index % 2 === 0 ? "left-10" : "right-10"
              } my-4 w-2/4 p-4 border-2 rounded`}
              style={{ top: `${index * 20 + 10}%` }}
            >
              <h2>{noticia.title}</h2>
              <div className="text">
                {noticia.text.map((text, i) => (
                  <span key={i}>{text}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Noticias;
