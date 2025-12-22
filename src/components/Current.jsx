import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const articles = [
  {
    title:
      "FinTech and Financial Inclusion: Empirical Evidence from Emerging Markets",
    authors:
      "Dr. Islam LEBCIR, CS Ankit Shah, Appa Rao Nagubandi, Dr. Satish Manikrao Dhoke, Dr. Gurmeet Singh Sikh, Prof Manoj Kumar Mishra",
    pages: "81–87",
    pdfUrl: "/vol-14/16.pdf",
  },
  {
    title:
      "Cryptocurrency Market Spillovers: Risk Contagion Across Global Financial Systems",
    authors:
      "Dr. Hardeep Singh, Dr. Debanjalee Bose, Appa Rao Nagubandi, S. Prabhu, Shrikanta Ganapati Naik",
    pages: "70–80",
    pdfUrl: "/vol-14/15.pdf",
  },
  {
    title:
      "ESG Investments and Firm Value: A Global Comparative Study",
    authors: "Dhiraj Sharma, Sumit Kushwaha, Ashish Gupta, Dr. Poonam",
    pages: "60–69",
    pdfUrl: "/vol-14/14.pdf",
  },
  {
    title:
      "Investor Behavior and Market Trends in the Global Green Bond and Climate Finance Landscape",
    authors:
      "Dr. R. Krishna Vardhan Reddy, Dr. B. Anjan Kumar, Dr. K. Kiran Kumar, Dr. S. Sreekanth",
    pages: "52–59",
    pdfUrl: "/vol-14/13.pdf",
  },
  {
    title:
      "Behavioural Biases in Retail Investing: Insights from Post-Pandemic Trading Patterns",
    authors: "Dr. Paladugu Yadaiah, Dr. Putti Selvaraj",
    pages: "42–51",
    pdfUrl: "/vol-14/12.pdf",
  },
  {
    title:
      "Green Bonds and Climate Finance: Market Trends and Investor Behavior",
    authors: "Aadya Jakhmola",
    pages: "33–41",
    pdfUrl: "/vol-14/11.pdf",
  },
  {
    title:
      "Exploring the Evolution of FinTech and Technology Acceptance: Bibliometric Analysis of Research Trends and Future Gaps",
    authors: "Dr. Rachna Jain, Dr. Shikha Sharma",
    pages: "10–32",
    pdfUrl: "/vol-14/10.pdf",
  },
  {
    title:
      "Agentic AI for Autonomous CI/CD: Towards Self-Adaptive Financial Infrastructure Pipelines",
    authors: "1st Avinash Reddy Segireddy",
    pages: "1–9",
    pdfUrl: "/vol-14/9.pdf",
  },
];

const Current = () => {
  return (
    <>
      <Header />

      <main className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900">
              Current Issue
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Vol. 14 (2025) · Published: 2025-05-21
            </p>
          </div>

          {/* GRID — SAME AS CurrentIssue.jsx */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-slate-200
                shadow-sm hover:shadow-xl transition-all duration-300
                flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-semibold text-slate-900
                    group-hover:text-blue-600 transition"
                  >
                    {article.title}
                  </a>

                  <p className="text-sm text-slate-600 line-clamp-3">
                    {article.authors}
                  </p>
                </div>

                <div
                  className="px-6 py-4 border-t border-slate-100
                  flex items-center justify-between"
                >
                  <span className="text-xs text-slate-500">
                    Pages: {article.pages}
                  </span>

                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600
                    hover:text-blue-700"
                  >
                    View PDF →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Current;
