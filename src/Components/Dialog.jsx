
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, useMediaQuery, useTheme } from "@mui/material";

export default function DialogComponent({
  children,
  open,
  onClose,
  title = "default title",
  customWidth, 
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <React.Fragment>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true} 
        maxWidth="md" 
        fullScreen={fullScreen} 
        sx={{
          '& .MuiDialog-paper': {
            width: customWidth || 'auto', 
            maxWidth: customWidth || '100%', 
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
