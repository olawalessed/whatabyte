import Head from 'next/head'
import Footer from './child/Footer'



export default function Layout({children}) {
    return (
      <div className="">
        
          
        

        {children}
        <Footer />
      </div>
    );
}
