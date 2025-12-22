import React from "react";
import Header from "./Header";
import CurrentIssue from "./CurrentIssue";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="bg-slate-50">

        {/* HERO — FULL WIDTH */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
              Applied Finance Insights
            </h1>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
              This journal is an independent academic platform created to support the dissemination of research and scholarly discussion in finance, economics, and related interdisciplinary areas.
            </p>
          </div>
        </section>

        {/* ACTION STRIP */}
        <section className="-mt-16 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
            <Search onSearch={() => navigate("/current")} />
          </div>
        </section>

        {/* CONTENT ZONE */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Current Issue
            </h2>
            <button
              onClick={() => navigate("/archives")}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              View Archives →
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <CurrentIssue />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;
