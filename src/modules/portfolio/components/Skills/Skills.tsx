import React from 'react';

import Layout from 'modules/portfolio/components/Layout/Layout';
import Skill from 'modules/portfolio/components/Skill/Skill';
import { StyledSkills } from 'modules/portfolio/components/Skills/Skills.styled';
import Text from 'modules/portfolio/components/Typography/Text';

const Skills = () => {
  return (
    <Layout>
      <StyledSkills>
        <Text variant="h2">Навыки</Text>
        <Skill />
      </StyledSkills>
    </Layout>
  );
};

export default Skills;
