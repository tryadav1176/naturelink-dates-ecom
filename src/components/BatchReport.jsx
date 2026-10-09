import React, { useState } from 'react';
import { Search, FileCheck, CheckCircle2, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { SAMPLE_BATCH_REPORTS } from '../data/products.js';

export const BatchReport = () => {
  const [batchCodeInput, setBatchCodeInput] = useState('');
  const [activeReport, setActiveReport] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const sampleCodes = ['NL-MJ-2610-A', 'NL-AJ-2610-B', 'NL-KH-2609-C'];

  const handleSearch = (codeToSearch) => {
    const targetCode = (codeToSearch || batchCodeInput).trim().toUpperCase();
    if (!targetCode) {
      setErrorMsg('Please enter a batch code to inspect lab report.');
      setActiveReport(null);
      return;
    }

    if (SAMPLE_BATCH_REPORTS[targetCode]) {
      setActiveReport(SAMPLE_BATCH_REPORTS[targetCode]);
      setErrorMsg(null);
    } else {
      setActiveReport(null);
      setErrorMsg(`No lab analysis record found for "${targetCode}". Please try one of our sample batch codes below.`);
    }
  };

  const handleSampleClick = (code) => {
    setBatchCodeInput(code);
    handleSearch(code);
  };

  return (
    <section id="batch-report" className="py-14 sm:py-20 bg-salt-light border-y border-salt-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-palm-green/10 text-palm-green text-xs font-bold px-3 py-1 rounded-full mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparency & Quality Guarantee</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-date-brown">
            Inspect Your Batch Lab Analysis
          </h2>
          <p className="text-date-brown/70 text-sm sm:text-base mt-2">
            Every Naturelink pouch carries a batch code printed on the back label. Enter your code below to verify moisture content, pesticide clearance, and purity certifications.
          </p>
        </div>

        {/* Input & Quick Buttons */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-warm border border-salt-dark max-w-2xl mx-auto mb-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-date-brown/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={batchCodeInput}
                onChange={(e) => setBatchCodeInput(e.target.value)}
                placeholder="Enter batch code (e.g. NL-MJ-2610-A)"
                className="w-full bg-salt/60 focus:bg-white pl-11 pr-4 py-3 rounded-xl border border-salt-dark focus:border-palm-green text-sm font-mono text-date-brown outline-none transition-colors"
                aria-label="Enter batch code for lab report"
              />
            </div>
            <button
              type="submit"
              className="bg-palm-green hover:bg-palm-green-light text-salt font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-xs flex items-center justify-center space-x-2"
            >
              <FileCheck className="w-4 h-4 text-honey-gold" />
              <span>Lookup Report</span>
            </button>
          </form>

          {/* Sample Codes Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-date-brown/60">Try sample codes:</span>
            {sampleCodes.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleSampleClick(code)}
                className="text-xs font-mono font-semibold bg-salt hover:bg-honey-gold/20 text-date-brown border border-salt-dark hover:border-honey-gold px-2.5 py-1 rounded-lg transition-colors"
              >
                {code}
              </button>
            ))}
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="mt-4 p-3.5 bg-red-50 text-red-800 rounded-xl text-xs sm:text-sm flex items-start space-x-2 border border-red-200 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Lab Report Display */}
        {activeReport && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-palm-green/30 shadow-warm-lg max-w-3xl mx-auto space-y-6 animate-fade-in">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-salt-dark">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-palm-green text-salt text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                    Official Lab Analysis
                  </span>
                  <span className="text-xs font-mono text-date-brown/60">
                    Cert #{activeReport.certId}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-date-brown mt-1">
                  {activeReport.productName}
                </h3>
                <p className="text-xs text-date-brown/70">
                  Harvest Origin: <span className="font-semibold text-palm-green">{activeReport.harvestRegion}</span> • Packed: {activeReport.packDate}
                </p>
              </div>

              <div className="bg-palm-green/10 border border-palm-green/30 text-palm-green px-4 py-2 rounded-xl text-center">
                <span className="text-[10px] uppercase tracking-wider font-bold block">Status</span>
                <span className="font-serif font-bold text-sm">{activeReport.status}</span>
              </div>
            </div>

            {/* Test Results Table Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-salt/50 p-4 rounded-2xl border border-salt-dark flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-palm-green flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-date-brown/60 font-medium">Moisture Content</div>
                  <div className="font-bold text-date-brown text-sm">{activeReport.moisture}</div>
                </div>
              </div>

              <div className="bg-salt/50 p-4 rounded-2xl border border-salt-dark flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-palm-green flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-date-brown/60 font-medium">Aflatoxin Analysis</div>
                  <div className="font-bold text-date-brown text-sm">{activeReport.aflatoxin}</div>
                </div>
              </div>

              <div className="bg-salt/50 p-4 rounded-2xl border border-salt-dark flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-palm-green flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-date-brown/60 font-medium">Pesticide Residue</div>
                  <div className="font-bold text-date-brown text-sm">{activeReport.pesticideResidue}</div>
                </div>
              </div>

              <div className="bg-salt/50 p-4 rounded-2xl border border-salt-dark flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-palm-green flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-date-brown/60 font-medium">Added Sugars / Syrups</div>
                  <div className="font-bold text-date-brown text-sm">{activeReport.addedSugar}</div>
                </div>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="pt-4 border-t border-salt-dark flex items-center justify-between text-xs text-date-brown/60">
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-honey-gold" />
                <span className="italic">Sample Lab Data for Demonstration Purposes</span>
              </span>
              <span className="font-mono text-[11px]">ISO 17025 Accredited Laboratory</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
