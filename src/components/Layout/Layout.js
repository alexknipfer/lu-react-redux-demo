import Head from 'next/head'
import Navigation from '../Navigation/Navigation'

export default ({ children }) => (
    <div>
        <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' />
        </Head>
        <Navigation />
        {children}
    </div>
)