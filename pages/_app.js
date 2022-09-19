import Head from 'next/head';
import { useState } from 'react';

import { GlobalStyle } from '../src/components/UI/GlobalSyle';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from '../src/components/UI/temas';

import { useRouter } from 'next/router';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

import { Container } from '../src/components/UI';

function MyApp({ Component, pageProps }) {
  
  const { asPath, pathname } = useRouter();

  let path = asPath ? asPath.substring(1) : pathname ? pathname.substring(1) : "";
  let title = `Elder Ring ${path ? `- ${path}` : ""}`;
  
  const [tema, setTema] = useState(true);

  function mudarThema() {
    setTema((tema) => !tema);
  }

  return (
    <>
      <Head>

        <link rel="icon" type="image/png" href="/img/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta
          name="description"
          content="Web site created using Nextjs"
        />
        <title>{ title }</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={tema ? temaEscuro : temaClaro }>
        <GlobalStyle theme={tema ? temaEscuro : temaClaro }/>
        <Container>
          <Header />
          <Component {...pageProps} mudarThema={mudarThema} tema={tema}/>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
