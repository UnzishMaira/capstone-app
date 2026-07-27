export default function QuizPage() {
    return (
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <h1 className="text-3xl font-extrabold text-white">AI Style Identity Engine 🧠</h1>
          <p className="text-slate-400 text-sm mt-1">Answer dynamic questions to pinpoint your personal fashion persona.</p>
        </div>
  
        <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex justify-between text-xs text-pink-400 font-bold uppercase tracking-wider">
            <span>Question 1 of 5</span>
            <span>Aesthetic Profile</span>
          </div>
  
          <h2 className="text-xl font-bold text-slate-100">Which color palette matches your vibe on a typical day?</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 bg-slate-800 hover:bg-slate-700 text-left rounded-xl border border-slate-700 transition space-y-1">
              <span className="font-bold text-pink-300 block">Dark & Moody</span>
              <span className="text-xs text-slate-400">Blacks, deep burgundies, mesh, chains (Goth / Grunge)</span>
            </button>
            <button className="p-4 bg-slate-800 hover:bg-slate-700 text-left rounded-xl border border-slate-700 transition space-y-1">
              <span className="font-bold text-purple-300 block">Vibrant & Retro</span>
              <span className="text-xs text-slate-400">Metallic, bright pinks, low-rise, baby tees (Y2K / Emo)</span>
            </button>
            <button className="p-4 bg-slate-800 hover:bg-slate-700 text-left rounded-xl border border-slate-700 transition space-y-1">
              <span className="font-bold text-indigo-300 block">Elegance & Heritage</span>
              <span className="text-xs text-slate-400">Silk, intricate embroidery, jhumkas, dupatta (Desi Couture)</span>
            </button>
            <button className="p-4 bg-slate-800 hover:bg-slate-700 text-left rounded-xl border border-slate-700 transition space-y-1">
              <span className="font-bold text-emerald-300 block">Clean & Tailored</span>
              <span className="text-xs text-slate-400">Neutrals, blazers, minimal jewelry, sleek heels (Chic)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }