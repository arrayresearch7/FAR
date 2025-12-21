import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Archives = () => {
  const volumes = [
    {
      id: "vol_14",
      title: "Vol. 14 (2025)",
      published: "2025-02-02",
      // replace with real image path
    },
    {
      id: "vol_13",
      title: "Vol. 13 (2024)",
      published: "2024-05-31",   
    },
    {
      id: "vol_12",
      title: "Vol. 12 (2023)",
      published: "2023-07-14",   
    },
    {
      id: "vol_11",
      title: "Vol. 11 (2022)",
      published: "2022-03-05",  
    },
  ];

  return (
    <>
      <Header/>

      <div className="max-w-[1100px] mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Archives</h1>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {volumes.map((vol) => (
            <Link
              to={`/${vol.id}`}
              key={vol.id}
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-4">
                <h2 className="text-lg font-bold">{vol.title}</h2>
                <p className="text-gray-600">
                  <span className="font-semibold">Published:</span> {vol.published}
                </p>
              </div>
              <img
                alt={vol.title}
                className="w-full h-auto object-contain"
              />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Archives;
