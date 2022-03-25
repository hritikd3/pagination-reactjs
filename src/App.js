import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Followers from "./Followers";
function App() {
  const { loading, data } = useFetch();
  // console.log(data)
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading]);
  return (
    <main>
      <div className="section-title">
        <h1> {loading ? "loading..." : "pagination"} </h1>
        <div className="underline" />
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((followers) => {
            return <Followers key={followers.id} {...followers} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            {data.map((item, index) => {
              return (
                <button key={index} className="page-btn">
                  butt{" "}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
