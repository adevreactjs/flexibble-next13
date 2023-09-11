import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarkable developer projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <main>
        <body>
          <Navbar />
          {children}
        </body>
        <Footer />
      </main>
    </html>
  );
}
