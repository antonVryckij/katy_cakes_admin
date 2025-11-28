import Dialog, { type DialogProps } from '@mui/material/Dialog';
import DialogActions, { type DialogActionsProps } from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText, { type DialogContentTextProps } from '@mui/material/DialogContentText';
import DialogTitle, { type DialogTitleProps } from '@mui/material/DialogTitle';
import type { ReactNode } from 'react';

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  DialogTitleProps: DialogTitleProps;
  DialogContentTextProps?: DialogContentTextProps;
  DialogActionsProps?: DialogActionsProps;
  DialogProps?: Omit<DialogProps, 'open' | 'onClose'>;
}

const BaseDialog = ({
  open,
  onClose,
  DialogTitleProps,
  DialogContentTextProps,
  children,
  DialogProps,
  DialogActionsProps,
}: FormModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} {...DialogProps}>
      <DialogTitle {...DialogTitleProps} />
      <DialogContent>
        {DialogContentTextProps ? <DialogContentText {...DialogContentTextProps} /> : null}
        {children}
      </DialogContent>
      {DialogActionsProps ? <DialogActions {...DialogActionsProps} /> : null}
    </Dialog>
  );
};

export default BaseDialog;
