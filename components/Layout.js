import Head from 'next/head'



export default function Layout({children}) {
    return (
      
        <div className="container">
          
            <Head>
              <title>Whatabyte</title>
            </Head>
            

            {children}
          
        </div>
      
    );
}
