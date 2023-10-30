// import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
// const inter = Inter({ subsets: ['latin'] });


export const metadata = {
    title: 'Travel Next App',
    description: 'Manual next settings'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='text-gray-700'>
                <Navbar />
                <main className='relative overflow-hidden'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}