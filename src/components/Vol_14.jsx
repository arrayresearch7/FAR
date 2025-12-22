import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const articlesData = [
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
    title: "ESG Investments and Firm Value: A Global Comparative Study",
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
  {
    title:
      "Sustainable Housing And Social Equity In Rapidly Urbanizing Regions",
    authors:
      "Dr. Franklin John Selvaraj, Dr. Rishi, Dr. Sunanda I. Kittali, Dr. Saurabh Chandra, Sreedevi, Akansh Garg",
    pdfUrl: "/Env/1.pdf",
  },
  {
    title:
      "Hooked on Hearts: The Role of Social Media Validation in Behavioral Addiction",
    authors: "Payal Jain, Tehseen Saleem",
    pdfUrl: "/vol-14/1.pdf",
  },
  {
    title:
      "A Study On The Effects Of Social Pressure And Personal Control On E-Commerce Adoption",
    authors:
      "Ms. Shakti Shukla, Deepti Mehlawat, Dr. Anita Singh, Dr. Anubha Vashisht, Dr. Uma",
    pdfUrl: "/vol-14/2.pdf",
  },
  {
    title:
      "A Prospective Comparative Study Of Proximal Femoral Nailing And Bipolar Hemiarthroplasty In Comminuted Intertrochanteric Fractures",
    authors:
      "Dr. Chethan Gowda M, Dr. Mahesh D V, Dr. Rajeevratna Suresh Naik, Dr. Vineeth K S",
    pdfUrl: "/vol-14/3.pdf",
  },
  {
    title:
      "Progressive Bilateral Visual Loss Due To Vincristine Induced Optic Neuropathy",
    authors:
      "Dr. Nila C A, Dr. Latha M Sneha, Dr. Roja Raj, Mr. Selvaseelan",
    pdfUrl: "/Env/2.pdf",
  },
  {
    title:
      "A Study On Work Life Balance Of Women School Teachers Working In Private Schools In Chennai",
    authors: "Dr. R. Rethina Bai, Mrs. K. Hemalatha",
    pdfUrl: "/vol-14/7.pdf",
  },
  {
    title:
      "An Observational Study on the Therapeutic Application of Raktamokshana by Ayurvedic Practitioners in Pune City",
    authors:
      "Dr. Shrutee Diliprao Lad, Dr. Madhuri P. Bhide, Dr. Swapnil J. Biradar Patil",
    pdfUrl: "/vol-14/5.pdf",
  },
];

const Vol_14 = () => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    setFilteredArticles(
      articlesData.filter((a) => a.title.toLowerCase().includes(q))
    );
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative bg-slate-50 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-cyan-100 opacity-70" />
        <div className="relative max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-slate-900">
            Volume 14 · 2025
          </h1>
          <p className="mt-4 text-slate-600">
            Published on February 02, 2025
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <main className="lg:col-span-8 space-y-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Research Articles
          </h2>

          <div className="space-y-8">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl p-8 transition transform hover:-translate-y-1"
              >
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-slate-900 hover:text-indigo-600"
                >
                  {article.title}
                </a>

                <p className="mt-3 text-slate-600">{article.authors}</p>

                <div className="mt-6 flex items-center justify-between">
                  {/* ✅ Pages ONLY for Agentic AI and above */}
                  {index <= 7 && (
                    <span className="text-sm text-slate-500">
                      Pages · {article.pages}
                    </span>
                  )}

                  {/* ✅ View PDF ALWAYS */}
                  <a
                    href={article.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full font-semibold text-white
                    bg-gradient-to-r from-indigo-500 to-cyan-500 shadow hover:shadow-lg"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-6">
            <Search onSearch={handleSearch} />
          </div>
        </aside>
      </section>

      <Footer />
    </>
  );
};

export default Vol_14;
