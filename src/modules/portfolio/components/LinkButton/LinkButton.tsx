import React from 'react';

import Button from 'modules/portfolio/components/Button/Button';

interface IProps {
  children: React.ReactNode;
  href: string;
}

const LinkButton = ({ children, href }: IProps) => {
  return (
    <Button as="a" href={href}>
      {children}
    </Button>
  );
};

export default LinkButton;
