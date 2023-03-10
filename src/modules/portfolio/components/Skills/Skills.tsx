import React from 'react';

import Background from 'modules/portfolio/components/Background/Background';
import Layout from 'modules/portfolio/components/Layout/Layout';
import Skill from 'modules/portfolio/components/Skill/Skill';
import { StyledSkills, StyledWrapper } from 'modules/portfolio/components/Skills/Skills.styled';
import Text from 'modules/portfolio/components/Text/Text';

import { SKILLS } from 'src/constants';

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Background />
      <Layout>
        <StyledWrapper>
          <Text variant="h2">Навыки</Text>
          {SKILLS.map((skill) => {
            return <Skill name={skill.name} level={skill.level} key={skill.name} />;
          })}
        </StyledWrapper>
      </Layout>
    </StyledSkills>
  );
};

export default Skills;
