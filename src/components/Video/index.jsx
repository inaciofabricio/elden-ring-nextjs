import { H4 } from "../UI/index";
import { LinhaVideo, LinhaLink, Iframe, Bloco, Link, Rotulo } from "./UI/index";

export default function Video(params) {

  return (
    <>
      {
        params.dados.map((video, x) => {
          return(
            <section key={x}>
              {
                video?.tipo === "video" &&
                <LinhaVideo>
                  <H4>{video?.titulo}</H4>
                  
                    <Iframe 
                      src= { `https://www.youtube.com/embed/${video?.id}` }

                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </Iframe>
                </LinhaVideo>
              }
              {
                video?.tipo === "link" &&
                <LinhaLink>
                  <H4>{video?.titulo}</H4>
                  <Bloco>
                    <Rotulo>Confira no link:</Rotulo>
                    <Link 
                      href={`https://www.youtube.com/watch?v=${video?.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer">
                        Youtube
                    </Link>
                  </Bloco>
                </LinhaLink>
              }
            </section>
          )
        })
      }
    </>
  )
}
