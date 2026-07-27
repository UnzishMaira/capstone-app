export default function OccasionsPage() {
    return (
      <div className="space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <h1 className="text-3xl font-extrabold text-white">Occasion & Event Styling 🥂</h1>
          <p className="text-slate-400 text-sm mt-1">Select an event type to generate tailored attire, jewelry, and footwear.</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-xl font-bold text-pink-400">💍 Weddings & Formal Galas</h3>
            <p className="text-xs text-slate-400">Heavy Desi Formals, Velvet Sherwanis, Silk Sarees, Gowns, High-Jewelry Sets.</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-xl font-bold text-indigo-400">💼 Executive & Job Interviews</h3>
            <p className="text-xs text-slate-400">Tailored Blazers, Crisp Oxford Shirts, Structured Handbags, Matte Makeup.</p>
          </div>
        </div>
      </div>
    );
  }