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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900">
              Applied Finance Insights
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              An independent research platform showcasing peer-reviewed and
              interdisciplinary scholarly work across finance, economics,
              technology, and policy.
            </p>

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => navigate("/archives")}
                className="px-7 py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-indigo-500 to-cyan-500 shadow"
              >
                Explore Research
              </button>

              <button
                onClick={() => navigate("/submissions")}
                className="px-7 py-3 rounded-xl font-semibold
                border border-slate-300 bg-white"
              >
                Submit Your Work
              </button>
            </div>
          </div>

          {/* RIGHT PREMIUM INFO CARD */}
          <div className="hidden lg:block">
            <div
              className="relative rounded-3xl p-10
              bg-white/70 backdrop-blur-xl
              shadow-2xl border border-white/60"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl
              bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

              {/* Badge */}
              <span className="inline-block text-xs font-semibold tracking-wide
              text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                ACADEMIC PLATFORM
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Research with Integrity & Impact
              </h3>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                We promote rigorous, transparent, and ethically grounded
                research—supporting scholars, institutions, and independent
                researchers worldwide.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200
              text-xs font-medium text-slate-500 flex flex-wrap gap-x-3 gap-y-1">
                <span>Peer-Reviewed</span>
                <span>•</span>
                <span>Open Access</span>
                <span>•</span>
                <span>Interdisciplinary</span>
                <span>•</span>
                <span>Independent</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SEARCH TOOL */}
      <section className="-mt-20 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
          <Search onSearch={() => navigate("/archives")} />
        </div>
      </section>

      {/* FEATURED RESEARCH */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Featured Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
            <span className="text-xs font-semibold text-indigo-600">FEATURED</span>
            <h3 className="mt-3 text-lg font-bold text-slate-900">
              Interdisciplinary Research Frontiers
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Research integrating finance, technology, management, and social
              sciences to address complex real-world challenges.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
            <span className="text-xs font-semibold text-indigo-600">FEATURED</span>
            <h3 className="mt-3 text-lg font-bold text-slate-900">
              Emerging Scholarly Perspectives
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Selected studies highlighting new academic trends, innovative
              methodologies, and evolving research directions.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">
            <span className="text-xs font-semibold text-indigo-600">FEATURED</span>
            <h3 className="mt-3 text-lg font-bold text-slate-900">
              Open-Access Academic Contributions
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Freely accessible scholarly work supporting transparent knowledge
              sharing and global academic collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENT ISSUE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <CurrentIssue />
      </section>

      <Footer />
    </>
  );
};

export default Home;
