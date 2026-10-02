import './globals.css';

export const metadata = {
  title: 'KHARE | Transformer Manufacturing & Power Solutions',
  description: 'KHARE is a leading transformer manufacturing company delivering reliable power and electrical solutions for industrial, utility, and infrastructure applications.',
  icons: {
    icon: '/images/logo-khare2.jpg',
    shortcut: '/images/logo-khare2.jpg',
    apple: '/images/logo-khare2.jpg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
