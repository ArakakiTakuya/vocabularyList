import React, { useState, useCallback } from "react";

import TextInput from "../components/UIKit/TextInput";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import "../styles/create-list.css";
import WordCard from "../components/WordCard";

const CreateList = () => {
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [wordcards, setWordCard] = useState([
    { word: "", meaning: "" },
    { word: "", meaning: "" },
    { word: "", meaning: "" },
  ]);

  const inputListName = useCallback(
    (e) => {
      setListName(e.target.value);
    },
    [setListName]
  );

  const inputDescription = useCallback(
    (e) => {
      setDescription(e.target.value);
    },
    [setDescription]
  );

  return (
    <div className="create-list">
      <h2>新しい単語帳を作る</h2>
      <TextInput
        fullWidth={true}
        label={"単語帳の名前: "}
        multiline={false}
        required={true}
        rows={1}
        value={listName}
        onChange={inputListName}
      />
      <TextInput
        fullWidth={true}
        label={"説明: "}
        multiline={false}
        rows={1}
        value={description}
        onChange={inputDescription}
      />
      {wordcards.map((card, i) => (
        <WordCard wordcard={wordcards[i]} key={i} />
      ))}
      <IconButton
        onClick={() => {
          setWordCard([...wordcards, { word: "", meaning: "" }]);
        }}
      >
        <Icon className="addIcon" color="error" style={{ fontSize: 60 }}>
          add_circle
        </Icon>
      </IconButton>
      <Button
        onClick={() => {
          console.log("listName", listName);
          console.log("description", description);
          console.log("wordcards", wordcards);
        }}
      >
        保存する
      </Button>
    </div>
  );
};

export default CreateList;
