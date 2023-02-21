import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    // console.log("checking useeffect..!!");
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };
    search();
  }, [term]);

  const renderResult = result.map((results) => {
    return (
      <div key={results.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
          <div className="header">{results.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          <div>{results.snippet}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui-form">
        <div className="field">
          <label>Enter Search Term</label>
          {""}
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
        <div className="ui celled list">{renderResult}</div>
      </div>
    </div>
  );
};
export default Search;
