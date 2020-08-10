import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";

import "../styles/vocabulary-list.css";

const VocabularyList = ({ words }) => {
  const [openDialog, setOpenDialog] = useState(false);

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
            <div className="delete_btn">
              <IconButton aria-label="delete" onClick={handleClickOpen}>
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
                console.log("wow");
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
