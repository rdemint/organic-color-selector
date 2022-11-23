import '../styles/globals.css'
import AppShell from '@/components/AppShell'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <link rel="icon" href="/color_designer_fav.png" type="image/png"/>
            <title>Bouldering pad color designer</title>

        </Head>
        <AppShell>
            <Component {...pageProps} />
        </AppShell>
        </>
)

}

export default MyApp
