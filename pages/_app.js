import Head from 'next/head'
import { Poppins } from 'next/font/google'
import { publicPath } from '../src/lib/publicPath'
import '../styles/globals.css'
import '../src/components/header/Header.css'
import '../src/components/nav/Nav.css'
import '../src/components/about/About.css'
import '../src/components/experience/Experience.css'
import '../src/components/services/Services.css'
import '../src/components/portfolio/Portfolio.css'
import '../src/components/testimonials/Testimonials.css'
import '../src/components/contact/Contact.css'
import '../src/components/footer/Footer.css'
import 'swiper/css'
import 'swiper/css/pagination'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
  const textureUrl = publicPath('/assets/bg-texture.png')
  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `body { background-image: url(${JSON.stringify(textureUrl)}); }`,
          }}
        />
      </Head>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
