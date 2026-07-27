const AESTHETICS = [
    { name: 'Y2K Cyber', tag: 'Metallic, Baby Tees, Low-Rise', color: 'from-pink-500 to-rose-500' },
    { name: 'Goth & Dark Wave', tag: 'Corselets, Lace, Leather, Silver', color: 'from-slate-800 to-zinc-900' },
    { name: 'Grunge & Emo', tag: 'Flannels, Combat Boots, Graphic Tees', color: 'from-purple-900 to-slate-900' },
    { name: 'Desi Traditional & Fusion', tag: 'Lehengas, Anarkalis, Jhumkas, Bindi', color: 'from-amber-600 to-red-600' },
    { name: 'Modern Chic', tag: 'Monochrome, Tailored Blazers, Gold Knots', color: 'from-emerald-700 to-teal-900' },
    { name: 'Professional Luxe', tag: 'Pencil Skirts, Crisp Button-Downs', color: 'from-blue-800 to-indigo-950' },
  ];
  
  export default function AestheticsPage() {
    return (
      <div className="space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <h1 className="text-3xl font-extrabold text-white">Subculture & Aesthetic Vault 🖤</h1>
          <p className="text-slate-400 text-sm mt-1">Explore fashion archetypes with curated garments, footwear, accessories, and makeup looks.</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AESTHETICS.map((item, idx) => (
            <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-slate-700 space-y-3 shadow-lg`}>
              <h3 className="text-2xl font-black text-white">{item.name}</h3>
              <p className="text-xs text-slate-200 font-medium">{item.tag}</p>
              <div className="pt-2 flex gap-2 text-xs font-bold text-white">
                <span className="bg-black/40 px-2 py-1 rounded">Outfits</span>
                <span className="bg-black/40 px-2 py-1 rounded">Shoes</span>
                <span className="bg-black/40 px-2 py-1 rounded">Jewelry</span>
                <span className="bg-black/40 px-2 py-1 rounded">Makeup</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }