import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 p-10 border border-slate-800 shadow-2xl">
        <div className="max-w-2xl space-y-4">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-300 border border-pink-500/30 rounded-full text-xs font-bold uppercase tracking-widest">
            Next-Gen Fashion AI
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Discover Your True Aesthetic & Master Your Daily Style.
          </h1>
          <p className="text-slate-300 text-base">
            From Y2K, Grunge, and Goth subcultures to elegant Desi Couture and Modern Chic—curate full looks including outfits, shoes, jewelry, and makeup.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/quiz" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-bold text-white shadow-lg hover:opacity-90 transition">
              Take AI Style Quiz →
            </Link>
            <Link href="/planner" className="px-6 py-3 bg-slate-800/80 border border-slate-700 rounded-xl font-bold text-slate-200 hover:bg-slate-800 transition">
              Open Weekly Planner
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2">
          <h3 className="text-xl font-bold text-pink-400">💄 Full-Look Matching</h3>
          <p className="text-sm text-slate-400">Garments, footwear, statement jewelry, and complementary makeup palettes.</p>
        </div>
        <div className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2">
          <h3 className="text-xl font-bold text-purple-400">📆 Day-by-Day Planner</h3>
          <p className="text-sm text-slate-400">Schedule outfits for tomorrow or special events with weather-adaptive suggestions.</p>
        </div>
        <div className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2">
          <h3 className="text-xl font-bold text-indigo-400">🖤 Subculture Hub</h3>
          <p className="text-sm text-slate-400">Explore Goth, Grunge, Emo, Y2K, Modern Chic, Professional, and Traditional Desi styles.</p>
        </div>
      </div>
    </div>
  );
}