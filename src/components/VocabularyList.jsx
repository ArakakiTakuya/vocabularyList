import React from "react";
import { Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import "../styles/vocabulary-list.css";

const VocabularyList = ({ words }) => {
  return (
    <div>
      <h2>収録単語一覧({words.length})</h2>
      <div className="vocabulary_list">
        {words.map((word, i) => (
          <Paper variant="outlined" square className="paper" key={i}>
            <h4>{word.word}</h4>
            <h5> {word.meaning}</h5>
            <div className="delete_btn">
              <IconButton
                aria-label="delete"
                onClick={() => {
                  console.log("hi");
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default VocabularyList;
