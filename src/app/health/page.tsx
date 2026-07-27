export default async function HealthPage() {
    let apiStatus = 'Operational';
    let mockData = null;
  
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store' });
      mockData = await res.json();
    } catch (error) {
      apiStatus = 'Degraded';
    }
  
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-bold text-white">System Health Check ✅</h1>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold uppercase">
            {apiStatus}
          </span>
        </div>
  
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3 font-mono text-sm">
          <p><span className="text-slate-500">App Name:</span> StyleOS Capstone</p>
          <p><span className="text-slate-500">Framework:</span> Next.js 14 App Router</p>
          <p><span className="text-slate-500">Deployment Target:</span> Vercel Preview Pipeline</p>
        </div>
  
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase">Server Fetch Verification Payload</p>
          <pre className="text-xs font-mono text-emerald-400 overflow-x-auto">
            {JSON.stringify(mockData, null, 2)}
          </pre>
        </div>
      </div>
    );
  }