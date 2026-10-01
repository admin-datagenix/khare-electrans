import './globals.css';

export const metadata = {
  title: 'KHARE | Transformer Manufacturing & Power Solutions',
  description: 'KHARE is a leading transformer manufacturing company delivering reliable power and electrical solutions for industrial, utility, and infrastructure applications.',
  icons: {
    icon: '/images/logo-khare3.png',
    shortcut: '/images/logo-khare3.png',
    apple: '/images/logo-khare3.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
