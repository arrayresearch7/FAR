import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="font-bold text-slate-900">
            Applied Finance Insights
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Independent academic research platform providing open access
            to interdisciplinary scholarly work.
          </p>
        </div>

        <div className="text-sm text-slate-500 md:text-right">
          <p>© {new Date().getFullYear()} Applied Finance Insights</p>
          <p className="mt-1">
            Not affiliated with any university or previously existing journal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
