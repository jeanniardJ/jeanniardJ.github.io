import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr" className="scroll-smooth">
        <head>
            <link rel="icon" href="images/jj_logo_blanc.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Représentation des projets réalisé ou participe"
            />
            <link rel="apple-touch-icon" href="images/jj_logo_blanc.png" />
            <link rel="manifest" href="manifest.json" />
            <title>Jonathan Jeanniard | Portfolio</title>
        </head>
        <body className="antialiased font-sans relative">
            <div className="crt-overlay"></div>
            <div className="fixed inset-0 grid-bg -z-10"></div>
            {children}
        </body>
        </html>
    );
}
