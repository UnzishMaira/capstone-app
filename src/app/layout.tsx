import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'StyleOS — Personal AI Fashion Architect',
  description: 'AI-driven fashion planner, subculture style quiz, and complete look builder.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans">
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              StyleOS ✨
            </Link>
            <nav className="flex gap-6 text-sm font-semibold">
              <Link href="/" className="hover:text-pink-400 transition">Dashboard</Link>
              <Link href="/quiz" className="hover:text-pink-400 transition">AI Style Quiz</Link>
              <Link href="/aesthetics" className="hover:text-pink-400 transition">Aesthetics</Link>
              <Link href="/planner" className="hover:text-pink-400 transition">Weekly Planner</Link>
              <Link href="/occasions" className="hover:text-pink-400 transition">Occasions</Link>
              <Link href="/wardrobe" className="hover:text-pink-400 transition">My Closet</Link>
              <Link href="/health" className="text-emerald-400 hover:underline font-mono">Health Check</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}