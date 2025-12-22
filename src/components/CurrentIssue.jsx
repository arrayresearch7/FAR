import React from "react";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    title: "FinTech and Financial Inclusion: Empirical Evidence from Emerging Markets",
    authors:
      "Dr. Islam LEBCIR, CS Ankit Shah, Appa Rao Nagubandi, Dr. Satish Manikrao Dhoke, Dr. Gurmeet Singh Sikh, Prof Manoj Kumar Mishra",
    pages: "81–87",
    pdfUrl: "/vol-14/16.pdf",
  },
  {
    title: "Cryptocurrency Market Spillovers: Risk Contagion Across Global Financial Systems",
    authors:
      "Dr. Hardeep Singh, Dr. Debanjalee Bose, Appa Rao Nagubandi, S. Prabhu, Shrikanta Ganapati Naik",
    pages: "70–80",
    pdfUrl: "/vol-14/15.pdf",
  },
  {
    title: "ESG Investments and Firm Value: A Global Comparative Study",
    authors: "Dhiraj Sharma, Sumit Kushwaha, Ashish Gupta, Dr. Poonam",
    pages: "60–69",
    pdfUrl: "/vol-14/14.pdf",
  },
  {
    title: "Investor Behavior and Market Trends in the Global Green Bond and Climate Finance Landscape",
    authors:
      "Dr. R. Krishna Vardhan Reddy, Dr. B. Anjan Kumar, Dr. K. Kiran Kumar, Dr. S. Sreekanth",
    pages: "52–59",
    pdfUrl: "/vol-14/13.pdf",
  },
  {
    title: "Behavioural Biases in Retail Investing: Insights from Post-Pandemic Trading Patterns",
    authors: "Dr. Paladugu Yadaiah, Dr. Putti Selvaraj",
    pages: "42–51",
    pdfUrl: "/vol-14/12.pdf",
  },
  {
    title: "Green Bonds and Climate Finance: Market Trends and Investor Behavior",
    authors: "Aadya Jakhmola",
    pages: "33–41",
    pdfUrl: "/vol-14/11.pdf",
  },
  {
  title: 'Exploring the Evolution of FinTech and Technology Acceptance: Bibliometric Analysis of Research Trends and Future Gaps',
  authors: 'Dr. Rachna Jain, Dr. Shikha Sharma',
  pages: '10-32',
  pdfUrl: '/vol-14/10.pdf',
  },
];

const CurrentIssue = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-slate-50">
      {/* subtle background depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 opacity-70" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Current Issue
            </h2>
            <p className="mt-2 text-slate-600">
              Volume 14 · 2025
            </p>
          </div>

          <div className="text-sm text-slate-500">
            Published · May 21, 2025
          </div>
        </div>

        {/* ARTICLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl
              p-8 flex flex-col justify-between
              transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl
              bg-gradient-to-r from-indigo-500 to-cyan-500" />

              <div className="space-y-4">
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-slate-900
                  group-hover:text-indigo-600 transition"
                >
                  {article.title}
                </a>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {article.authors}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Pages · {article.pages}
                </span>

                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full text-sm font-semibold
                  text-white bg-gradient-to-r from-indigo-500 to-cyan-500
                  shadow hover:shadow-lg transition"
                >
                  View PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-16 flex flex-wrap gap-5">
          <button
            onClick={() => navigate("/archives")}
            className="px-7 py-3 rounded-xl text-sm font-semibold
            border border-slate-300 bg-white
            hover:bg-slate-100 transition"
          >
            Browse Archives
          </button>

          <button
            onClick={() => navigate("/submissions")}
            className="px-7 py-3 rounded-xl text-sm font-semibold
            text-white bg-gradient-to-r from-indigo-500 to-cyan-500
            shadow hover:shadow-xl transition"
          >
            Make a Submission
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentIssue;
