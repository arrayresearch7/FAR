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
      <main className="bg-gray-50 min-h-screen ">
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-purple-900">
               Applied Finance-Letters
              </h1>
              <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-700">
                Applied Finance Letters is an open-access journal publishing mainly empirical research with implications and relevance for academia and the finance industry. The aim is to encourage high-quality contributions that foster discussions among academics, policymakers, and financial practitioners. The Journal welcomes submissions from all fields of finance and is especially interested in innovative and original contributions. Applied Finance Letters is B-ranked on the 2022 ABDC Journal Ranking List, is indexed by EconLit and DOAJ, and has a self-computed 2023 Impact Factor of 0.72.
              </p>
              

              <div className="mt-10">
                <h2 className="text-3xl font-bold text-purple-900">Current Issue</h2>
                <div className="mt-6">
                  <CurrentIssue />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <Search
                onSearch={() => navigate('/current')}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
              />
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
