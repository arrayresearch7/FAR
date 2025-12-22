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

          {/* Right visual */}
          <div className="hidden lg:block">
            <div className="rounded-3xl bg-white shadow-2xl p-10">
              <p className="text-sm text-slate-500">
                Structured research · Transparent access · Independent platform
              </p>
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

      {/* FEATURED SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Featured Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition"
            >
              <span className="text-xs font-semibold text-indigo-600">
                FEATURED
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                High-impact interdisciplinary research
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Selected work highlighting emerging research directions.
              </p>
            </div>
          ))}
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
