import MainContainer from '../components/MainContainer';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
      <MainContainer>
        <Component {...pageProps}/>
      </MainContainer>
    ) 
  }