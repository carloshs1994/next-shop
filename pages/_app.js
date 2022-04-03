import '../styles/globals.css'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const clientSideToEmotion = createCache({ key: 'css' })
function MyApp({ Component, pageProps, emotionCache = clientSideToEmotion }) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
