import NextNProgress from 'nextjs-progressbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import AuthProvider from '@/components/Providers/AuthProvider'
import { TypeComponentAuthFields } from '@/types/page.interface'

type TypeApp = AppProps & TypeComponentAuthFields

const App = ({ Component, pageProps }: TypeApp) => {
	return (
		<>
			<NextNProgress
				color='#29d'
				startPosition={0.7}
				stopDelayMs={200}
				height={2}
				showOnShallow={true}
				options={{ easing: 'ease', speed: 500 }}
			/>
			<Provider store={store}>
				<AuthProvider Component={Component}>
					<Component {...pageProps} />
				</AuthProvider>
			</Provider>
		</>
	)
}

export default App
