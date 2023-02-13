import React from 'react';

import {
  StyledScaleBG,
  StyledSkill,
  StyledTextBox,
} from 'modules/portfolio/components/Skill/Skill.styled';
import Text from 'modules/portfolio/components/Typography/Text';

interface IProps {
  skill: any;
  level: number;
}

const Skill = ({ skill, level }: IProps) => {
  console.log(skill);
  return (
    <StyledSkill>
      <StyledTextBox>
        <Text as="p" variant="h4">
          {skill}
        </Text>
      </StyledTextBox>
      <StyledScaleBG level={level} />
    </StyledSkill>
  );
};

export default Skill;
