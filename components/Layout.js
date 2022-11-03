import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
       <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
       </Head>
      <Header />
      <div className={styles.container}>
      {children}
      </div>
      <Footer />
    </div>
  )
}


Layout.defaultProps = {
    title: 'Dj Events | Find the hottest parties',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam doloremque temporibus eum deleniti quas. Amet iusto voluptatem non fugit!',
    keywords:' music, dj, edm, events'
}
