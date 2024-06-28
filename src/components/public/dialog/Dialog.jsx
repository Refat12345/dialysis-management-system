/* eslint-disable react/prop-types */
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
export default function AlertDialog({renderComponent , contentComponent ,titleButton}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  return (
    <React.Fragment >
      <div onClick={handleClickOpen}>
        {renderComponent}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent >
            {contentComponent}
        </DialogContent>
        <div className='flex flex-row justify-center'>
          {titleButton != undefined && <button onClick={handleClose}
            className='mb-4 bg-bgButtonColor text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg font-primaryBold '
          >{titleButton}
          </button>}
        </div>
      </Dialog>
    </React.Fragment>
  );
}