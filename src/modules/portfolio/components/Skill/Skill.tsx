import React from 'react';

import {
  StyledScaleBG,
  StyledSkill,
  StyledTextBox,
} from 'modules/portfolio/components/Skill/Skill.styled';
import Text from 'modules/portfolio/components/Text/Text';

import { ISkill } from 'src/types';

const Skill = ({ name, level }: ISkill) => {
  return (
    <StyledSkill>
      <StyledTextBox>
        <Text as="p" variant="h4">
          {name}
        </Text>
      </StyledTextBox>
      <StyledScaleBG level={level} />
    </StyledSkill>
  );
};

export default Skill;
