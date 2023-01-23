import type { IconButtonProps } from '@mui/material/IconButton';

export interface IIconButtonProps extends IconButtonProps {
  name: 'edit' | 'close' | 'delete' | 'check';
}
