import React from 'react';
import Header from './Header';
import CurrentIssue from './CurrentIssue';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Dark Hero + Premium Layout */}
      <main className="bg-[#0b1f17] min-h-screen">
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div className="border-l-4 border-[#d4af37] pl-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f5f5f5]">
                  Applied Finance Insights
                </h1>
                <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-300">
                  This journal is an independent academic platform created to support the dissemination of research and scholarly discussion in finance, economics, and related interdisciplinary areas. The journal aims to provide a neutral space for researchers, educators, and professionals to share original ideas and analytical insights. The platform operates independently and does not represent or claim affiliation with any university, institution, or existing academic journal.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-700">
                <h2 className="text-3xl font-bold text-[#d4af37]">
                  Current Issue
                </h2>
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                  <CurrentIssue />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-[#122d23] border border-gray-700 rounded-xl shadow-lg p-4">
                <Search
                  onSearch={() => navigate('/current')}
                  className="bg-transparent"
                />
              </div>
            </aside>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
