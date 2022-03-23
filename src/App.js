import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Followers from "./Followers";
function App() {
  const { loading, data } = useFetch();
  // console.log(data)
  return (
    <main>
      <div className="section-title">
        <h1> {loading ? "loading..." : "pagination"} </h1>
        <div className="underline" />
      </div>
      <section className="followers">
        <div className="container">
          {data.map((followers) => {
            return <Followers key={followers.id} {...followers} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
