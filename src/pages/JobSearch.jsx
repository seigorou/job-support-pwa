import { useState } from "react";
import { Search } from "lucide-react";
import "../styles/JobSearch.css";
import tags from "../data/tags";
import jobs from "../data/jobs";

function JobSearch() {
  return (
    <main>
      <header className="JobSearch-header">
        <h1>職種探索</h1>

        <button className="JobSearch-button">
          <Search size={22} />
        </button>
      </header>

      <section className="tag-section">
        <h2>興味のあるタグを選択</h2>

        <div className="tag-list">
          {tags.map((tag) => (
            <button key={tag.id}>{tag.name}</button>
          ))}
        </div>
      </section>
      <button className="search-condition-button">この条件で探す</button>

      <section className="jobs-section">
        <h2>おすすめの職種</h2>
        <div className="job-list">
          {jobs.map((job) => (
            <article className="job-card" key={job.id}>
              <h3>{job.name}</h3>
              <div className="job-tags">
                {PiFileJpgBold.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <p>{job.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
export default JobSearch;
