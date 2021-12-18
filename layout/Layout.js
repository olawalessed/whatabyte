import Head from 'next/head'
import Footer from './child/Footer'



export default function Layout({children}) {
    return (
      
        <div className="w-screen">
          
            <Head>
              <title>Whatabyte</title>
            </Head>
            

            {children}
            <Footer />
        </div>
      
    );
}
