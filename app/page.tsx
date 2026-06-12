import { chapters, coverImage, finalLines, galleryPhotos } from "@/lib/bookData"

function paragraphs(body: string) {
  return body
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function roman(value: number) {
  return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"][value - 1] ?? String(value)
}

export default function HomePage() {
  return (
    <main className="published-story">
      <header className="published-hero">
        <img className="published-cover" src={coverImage} alt="Winicius de terno ao lado de Mariana" />
        <div className="published-hero-copy">
          <h1>Toda mudança tem um começo.</h1>
          <p>Um presente mais do que especial para mim.</p>
          <p>
            Não é apenas um site, mas sim uma demonstração de amor e carinho na qual eu quero te proporcionar toda
            vez que você sentir ou duvidar do meu amor por você.
          </p>
          <a className="published-button" href="#capitulos">
            WINICIUS
          </a>
        </div>
      </header>

      <div id="capitulos">
        {chapters.map((chapter) => (
          <section className="published-chapter" key={chapter.number}>
            <div className="published-chapter-inner">
              <p className="published-kicker">Capitulo {roman(chapter.number)}</p>
              <h2>{chapter.title}</h2>
              <div className="published-prose">
                {paragraphs(chapter.body).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {chapter.number === 5 ? (
                <div className="published-gallery" aria-label="Álbum de fotos">
                  {galleryPhotos.map((photo) => (
                    <article className="published-photo" key={photo.src}>
                      <img src={photo.src} alt={photo.alt} />
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}

        <section className="published-chapter published-final">
          <div className="published-chapter-inner">
            <p className="published-kicker">Final</p>
            <h2>Para sempre</h2>
            {finalLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              Com todo o meu amor,
              <br />
              Winicius ❤️
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
