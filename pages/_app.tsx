import {ApolloProvider} from '@apollo/client'
import {AppProps} from 'next/app';
import {useApollo} from '../apollo/client'
import {AppContextProvider} from "../contexts/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ModalContextProvider} from "../contexts/ModalContext";

export default function App({Component, pageProps}: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <AppContextProvider>
                <ModalContextProvider>
                    <Component {...pageProps} />
                </ModalContextProvider>
            </AppContextProvider>
        </ApolloProvider>
    )
}
