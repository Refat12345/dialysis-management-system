/* eslint-disable react/prop-types */
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

function PublicDialog({ open, setOpen , component }) {
    
    const handleClose = () => {
        setOpen(false);
};


return (
    <Dialog open={open} onClose={handleClose}>
        <DialogContent className="p-4 w-full" dir="rtl">
                {component}
        </DialogContent>
    </Dialog>
);
}

export default PublicDialog;
