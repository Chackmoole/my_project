import type { TabsProps } from '@mui/material';

export interface IFiltersProps extends TabsProps {
  options: { label: string; value: null | string }[];
}
