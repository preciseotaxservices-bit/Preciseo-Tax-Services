
import React from 'react';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-5 px-4 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none shadow-2xl flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
        Chat with us on WhatsApp
        <div className="absolute top-full right-6 -translate-y-1 w-2 h-2 bg-slate-900 rotate-45"></div>
      </div>

      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:animate-none group-active:opacity-0"></div>

      {/* Main Button */}
      <a 
        href="https://wa.me/14699427997" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.03 0C5.402 0 .01 5.393.007 12.025c0 2.12.554 4.189 1.602 6.006L0 24l6.135-1.61a11.83 11.83 0 005.89 1.57h.005c6.627 0 12.02-5.393 12.022-12.026a11.82 11.82 0 00-3.633-8.504z" />
        </svg>
      </a>
    </div>
  );
};
