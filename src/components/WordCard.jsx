import React, { useState, useCallback } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextInput from "../components/UIKit/TextInput";

const WordCard = (props) => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  props.wordcard.word = word;
  props.wordcard.meaning = meaning;

  const inputWord = useCallback(
    (e) => {
      setWord(e.target.value);
    },
    [setWord]
  );

  const inputMeaning = useCallback(
    (e) => {
      setMeaning(e.target.value);
    },
    [setMeaning]
  );

  return (
    <div>
      <Card className="card">
        <CardContent>
          <TextInput
            label={"単語: "}
            multiline={false}
            rows={1}
            value={word}
            onChange={inputWord}
          />
          <TextInput
            label={"意味: "}
            multiline={false}
            rows={1}
            value={meaning}
            onChange={inputMeaning}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default WordCard;
