import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Printer, 
  FileText, 
  Eye, 
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'embed' | 'pages'>('embed');

  if (!isOpen) return null;

  const pdfUrl = "/Niraj_Malla_Resume.pdf";
  const pageImages = [
    "/resume-page-1.png",
    "/resume-page-2.png"
  ];

  const handlePrint = () => {
    const printWindow = window.open(pdfUrl, '_blank');
    if (printWindow) {
      printWindow.focus();
      // Most browsers will load the PDF with its native print UI
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
      
      {/* Modal Container - Kept in deep neutral styling so the PDF document inside stands out pristine */}
      <div className="relative w-full max-w-5xl bg-[#121218] rounded-2xl border border-white/10 shadow-2xl flex flex-col h-[92vh] overflow-hidden animate-fade-in text-white">
        
        {/* Top Header / Actions Bar */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#161622] shrink-0 gap-3">
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent-500/10 text-accent-500 border border-accent-500/20">
              <FileText size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-base text-white">
                  {personalInfo.name} — Official Resume
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Original PDF
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono hidden sm:block">
                Exact authentic document • 2 Pages • Computer Engineering
              </p>
            </div>
          </div>

          {/* Controls: Switch View Mode + Download + Open Tab + Print + Close */}
          <div className="flex items-center gap-2">
            
            {/* View Mode Toggle */}
            <div className="hidden md:flex items-center bg-[#0d0d14] p-1 rounded-xl border border-white/10 text-xs font-medium">
              <button
                onClick={() => setViewMode('embed')}
                className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 ${
                  viewMode === 'embed'
                    ? 'bg-accent-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye size={13} />
                <span>PDF Viewer</span>
              </button>
              <button
                onClick={() => setViewMode('pages')}
                className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 ${
                  viewMode === 'pages'
                    ? 'bg-accent-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers size={13} />
                <span>Page View</span>
              </button>
            </div>

            {/* Open in New Window */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#1e1e2d] hover:bg-[#28283d] text-slate-200 border border-white/10 transition-colors"
              title="Open full PDF in new tab"
            >
              <ExternalLink size={14} className="text-accent-500" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            {/* Print Trigger */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#1e1e2d] hover:bg-[#28283d] text-slate-200 border border-white/10 transition-colors"
              title="Print original PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Download Original PDF Button */}
            <a
              href={pdfUrl}
              download="Niraj_Malla_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-accent-500 hover:bg-accent-600 text-white shadow-glow-red-sm transition-all active:scale-95"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Resume Modal"
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
            >
              <X size={20} />
            </button>
          </div>

        </div>

        {/* Modal Body: Displays the Exact Original PDF */}
        <div className="flex-1 w-full h-full bg-[#1e1e26] overflow-hidden flex flex-col items-center justify-center p-2 sm:p-4">
          
          {viewMode === 'embed' ? (
            /* Native PDF Object / Embed */
            <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-lg border border-slate-300">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full border-none rounded-xl"
                title="Niraj Malla Resume PDF"
              />
            </div>
          ) : (
            /* High-Res Rendered Pages View (Ensures 100% visibility even on mobile devices where PDF plugins are disabled) */
            <div className="w-full h-full overflow-y-auto space-y-6 flex flex-col items-center py-4 px-2">
              {pageImages.map((pageSrc, index) => (
                <div 
                  key={index}
                  className="w-full max-w-[850px] bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-300"
                >
                  <div className="bg-slate-100 px-4 py-1.5 border-b border-slate-200 text-slate-600 text-xs font-mono flex justify-between items-center">
                    <span>Page {index + 1} of 2</span>
                    <span className="text-[11px] text-slate-400">Authentic Scan</span>
                  </div>
                  <img
                    src={pageSrc}
                    alt={`Niraj Malla Resume Page ${index + 1}`}
                    className="w-full h-auto block select-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
