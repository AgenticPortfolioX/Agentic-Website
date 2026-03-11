import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function CompactSupport() {
  const [copiedGrams, setCopiedGrams] = useState(false);
  const [copiedSatoshi, setCopiedSatoshi] = useState(false);

  const handleCopy = (text: string, type: 'grams' | 'satoshi') => {
    navigator.clipboard.writeText(text);
    if (type === 'grams') {
      setCopiedGrams(true);
      setTimeout(() => setCopiedGrams(false), 2000);
    } else {
      setCopiedSatoshi(true);
      setTimeout(() => setCopiedSatoshi(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-sm mx-auto mt-4 px-2">
      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex items-center justify-between group hover:bg-white/[0.05] transition-colors">
        <div className="text-left flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-0.5 whitespace-nowrap">Lightning Address:</div>
          <div className="font-mono text-xs text-orange-400/90 break-all">Grams121@agenticportfoliox.github.io</div>
        </div>
        <button
          onClick={() => handleCopy('Grams121@agenticportfoliox.github.io', 'grams')}
          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-zinc-500 hover:text-white"
          title="Copy to Clipboard"
        >
          {copiedGrams ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex items-center justify-between group hover:bg-white/[0.05] transition-colors">
        <div className="text-left flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-0.5 whitespace-nowrap">Pay my Agent:</div>
          <div className="font-mono text-xs text-orange-400/90 break-all">SatoshiNodeAgent@agenticportfoliox.github.io</div>
        </div>
        <button
          onClick={() => handleCopy('SatoshiNodeAgent@agenticportfoliox.github.io', 'satoshi')}
          className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-zinc-500 hover:text-white"
          title="Copy to Clipboard"
        >
          {copiedSatoshi ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
