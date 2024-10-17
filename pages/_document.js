import Document, { Html, Head, Main, NextScript } from 'next/document'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jeffery Bigger",
  "address": {
     "@type": "PostalAddress",
     "addressLocality": "Ortonville",
     "addressRegion": "MI",
     "postalCode": "48462",
     "addressCountry": "United States"
  },
  "colleague": [
    "https://cobertos.com"
  ],
  "email": "jdbiggerart@gmail.com",
  "url": "https://jdbigger.art"
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="canonical" href="https://jdbigger.art" />

          {/* Crawling metas */}
          <meta name="keywords" content="michigan,artist,jeffery bigger,painting,queer" />
          <meta name="author" content='Samantha / cobertos.com' />
          <meta name="description" content="JD is a Michigan-based Artist. He works in oil paint, acrylic and watercolorm and he enjoys making art that focuses on concept, aesthetics, and the feeling of the psuedoprofound." />

          <meta itemprop="image" content="https://jdbigger.art/soc.jpg" />

          <meta property="og:type" content="website"/>
          <meta property="og:description" content="JD is a Michigan-based Artist. He works in oil paint, acrylic and watercolorm and he enjoys making art that focuses on concept, aesthetics, and the feeling of the psuedoprofound." />
          <meta property="og:image" name="thumb" content="https://jdbigger.art/soc.jpg" />
          <meta property="og:title" content='Art of JD Bigger - Portraits, Figures, and Fantasies' />
          <meta property="og:url" content="https://jdbigger.art" />
          <meta property="og:site_name" content='Art of JD Bigger' />

          {/* Favicon branding */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
          <link rel="manifest" href="/site.webmanifest?v=1" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#44d2a8" />
          <link rel="shortcut icon" href="/favicon.ico?v=1" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#121212" />

          {/* JSON+LD for the entity */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />

          {/*Analytics*/}
          <script async defer data-website-id="d2f765c3-047e-41b7-b36e-1b34f90685b2" src="https://stats.cobertos.com/owo.js" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
