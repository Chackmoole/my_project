import React from 'react';

import {
  StyledScaleBG,
  StyledSkill,
  StyledTextBox,
} from 'modules/portfolio/components/Skill/Skill.styled';
import Text from 'modules/portfolio/components/Typography/Text';

const Skill = () => {
  return (
    <StyledSkill>
      <StyledTextBox>
        <Text as="p" variant="h4">
          Figma
        </Text>
      </StyledTextBox>
      <StyledScaleBG />
    </StyledSkill>
  );
};

export default Skill;
