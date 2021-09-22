import Head from 'next/head'
import Footer from './Footer'



export default function Layout({children}) {
    return (
      
        <div className="container">
          
            <Head>
              <title>Whatabyte</title>
            </Head>
            

            {children}
            <Footer />
        </div>
      
    );
}
