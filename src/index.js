import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './error/errorBoundary';
// locales
import ThemeLocalization from './locales';

import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './theme';
import SnackbarProvider from './components/snackbar';
import { AuthProvider } from './auth/JwtContext';
import ScrollToTop from './components/scroll-to-top';
import { MotionLazyContainer } from './components/animate';

import { ThemeSettings, SettingsProvider } from './components/settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthProvider>
		<HelmetProvider>
			<React.StrictMode>
				<SettingsProvider>
					<BrowserRouter>
						<ScrollToTop />
						<MotionLazyContainer>
							<ThemeProvider>
								<ThemeSettings>
									<ThemeLocalization>
										<SnackbarProvider>
											<Suspense fallback="Loading...">
												<ErrorBoundary>
													<App />
												</ErrorBoundary>
											</Suspense>
										</SnackbarProvider>
									</ThemeLocalization>
								</ThemeSettings>
							</ThemeProvider>
						</MotionLazyContainer>
					</BrowserRouter>
				</SettingsProvider>
			</React.StrictMode>
		</HelmetProvider>
	</AuthProvider>
);

reportWebVitals();
