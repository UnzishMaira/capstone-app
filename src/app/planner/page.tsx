export default function PlannerPage() {
    return (
      <div className="space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <h1 className="text-3xl font-extrabold text-white">Weekly Style Calendar 📅</h1>
          <p className="text-slate-400 text-sm mt-1">Schedule what to wear tomorrow, the day after, or plan the full week ahead.</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900 rounded-2xl border border-pink-500/40 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-pink-400 uppercase">Today</span>
              <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded">Active</span>
            </div>
            <h3 className="text-xl font-bold text-white">Modern Chic Ensemble</h3>
            <p className="text-xs text-slate-400">Blazer + Straight Jeans + Nude Heels + Minimal Gold Hoop Earrings</p>
          </div>
  
          <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-purple-400 uppercase">Tomorrow</span>
              <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Scheduled</span>
            </div>
            <h3 className="text-xl font-bold text-white">Desi Fusion Glam</h3>
            <p className="text-xs text-slate-400">Kurti with Denim + Statement Jhumkas + Kolhapuri Flats</p>
          </div>
  
          <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-indigo-400 uppercase">Day After Tomorrow</span>
              <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Planned</span>
            </div>
            <h3 className="text-xl font-bold text-white">Y2K Retro Look</h3>
            <p className="text-xs text-slate-400">Baby Tee + Cargo Pants + Chunky Sneakers + Glossy Makeup</p>
          </div>
        </div>
      </div>
    );
  }