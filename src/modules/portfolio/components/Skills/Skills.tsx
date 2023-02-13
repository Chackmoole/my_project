import React from 'react';

import Layout from 'modules/portfolio/components/Layout/Layout';
import Skill from 'modules/portfolio/components/Skill/Skill';
import { StyledSkills } from 'modules/portfolio/components/Skills/Skills.styled';
import Text from 'modules/portfolio/components/Typography/Text';

import { SKILLS } from 'src/constants';

const Skills = () => {
  return (
    <Layout>
      <StyledSkills>
        <Text variant="h2">Навыки</Text>
        {SKILLS.map((skill) => {
          return <Skill skill={skill.skill} level={skill.level} key={skill.skill} />;
        })}
      </StyledSkills>
    </Layout>
  );
};

export default Skills;
