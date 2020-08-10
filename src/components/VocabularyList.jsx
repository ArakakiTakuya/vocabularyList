import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import { updateList } from "../reducks/lists/operations";

import "../styles/vocabulary-list.css";

const VocabularyList = ({ words, listId }) => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [targetWord, setTargetWord] = useState({});

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <h2 className="title">収録単語一覧({words.length})</h2>
      <div className="vocabulary_list">
        {words.map((word, i) => (
          <Paper variant="outlined" square className="paper" key={i}>
            <h4>{word.word}</h4>
            <h5> {word.meaning}</h5>
            <div className="delete_btn" id={i}>
              <IconButton
                aria-label="delete"
                onClick={(e) => {
                  const targetIdx = e.currentTarget.parentNode.getAttribute(
                    "id"
                  );
                  setTargetWord(words[targetIdx]);
                  handleClickOpen();
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Paper>
        ))}
      </div>
      <>
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogContent>
            <DialogContentText>この単語を消去しますか？</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No
            </Button>
            <Button
              onClick={() => {
                const newWordsArr = words.filter((word) => word !== targetWord);
                dispatch(updateList(listId, newWordsArr));
                handleClose();
              }}
              color="primary"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </div>
  );
};

export default VocabularyList;
