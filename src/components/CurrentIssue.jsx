import React from "react";

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
    authors: "Avinash Reddy Segireddy",
    pages: "1–9",
    pdfUrl: "/vol-14/9.pdf",
  },
];

const CurrentIssue = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Current Issue
        </h1>
        <p className="mt-2 text-slate-600">
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8
            transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <h2 className="text-lg font-bold text-slate-900 leading-snug">
              {article.title}
            </h2>

            <p className="mt-3 text-sm text-slate-600">
              {article.authors}
            </p>

            {/* FOOTER */}
            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Pages · {article.pages}
              </span>

              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-indigo-500 to-cyan-500
                shadow hover:shadow-lg"
              >
                View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentIssue;
