import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: 'Warza - Jasa Pembuatan Software dan IT Konsultan',
  description: 'UMKM Pembuatan Software, Website, Aplikasi, Android, Ios.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const brevoScript = `
    (function(d, w, c) {
      w.BrevoConversationsID = '68a11d06cc6cb9aa7c089999';
      w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
      };
      var s = d.createElement('script');
      s.async = true;
      s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'BrevoConversations');
  `;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="brevo-conversations-script" // ID unik
          dangerouslySetInnerHTML={{ __html: brevoScript }}
          strategy="lazyOnload" // Strategi pemuatan
        />
        <Analytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
