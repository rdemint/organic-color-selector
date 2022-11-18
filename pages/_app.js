import '../styles/globals.css'
import AppShell from '@/components/AppShell'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <link rel="icon" href="/rd_favicon.png" type="image/png"/>
        </Head>
        <AppShell>
            <Component {...pageProps} />
        </AppShell>
        </>
)

}

export default MyApp
