import React from "react";
const HighScoreTable = ({ scores }) => {
  let eachCountry = scores.sort((a, b) => {
    return b.name - a.name ;
  });
  return (
    <div className="container">
      <h1 className="header">High Scores per country</h1>
      {eachCountry.map(({ name, scores }, x) => {
        return (
          <div key={x} className="main-table">
            <h3 className="country">HIGH SCORES: {name}</h3>
            <ul className="table">
              {scores
                .sort((A, B) => {
                  return B.s - A.s ;
                })
                .map((person, i) => {
                  return (
                    <li key={i} className="results">
                      <span className="name-place">
                        {person.n.toUpperCase()}{" "}
                      </span>
                      <span className="score-place">{person.s}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default HighScoreTable;
