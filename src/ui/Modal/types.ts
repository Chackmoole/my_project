import type { DialogProps } from '@mui/material';

export interface IDialogsProps extends DialogProps {
  onClickAction: () => void;
  onClose: () => void;
}
