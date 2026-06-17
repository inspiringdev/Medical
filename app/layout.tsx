import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: {
    default: 'MedCare Clinic | Expert Medical & Dental Care',
    template: '%s | MedCare Clinic',
  },
  description: 'Comprehensive medical and dental care for your entire family. Board-certified physicians and dentists providing compassionate, expert healthcare.',
  keywords: ['medical care', 'dental care', 'family physician', 'health clinic', 'appointment booking'],
  openGraph: {
    title: 'MedCare Clinic | Expert Medical & Dental Care',
    description: 'Comprehensive medical and dental care for your entire family.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
      <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1A2A3A',
              color: '#fff',
              borderRadius: '10px',
            },
            success: {
              iconTheme: { primary: '#10B981', secondary: '#fff' },
            },
            error: {
              iconTheme: { primary: '#EF4444', secondary: '#fff' },
            },
          }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
  );
}