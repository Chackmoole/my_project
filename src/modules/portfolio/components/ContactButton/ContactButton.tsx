import React from 'react';

import Button from 'modules/portfolio/components/Button/Button';
import IconTelegram from 'modules/portfolio/components/IconTelegram/IconTelegram';

const ContactButton = () => {
  return (
    <Button as="a" href="https://t.me/chackmool21">
      <IconTelegram />
      Написать мне
    </Button>
  );
};

export default ContactButton;
