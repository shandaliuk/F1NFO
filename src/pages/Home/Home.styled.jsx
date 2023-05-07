import styled from 'styled-components';

export const PageMain = styled.main`
  max-width: 1376px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: row;
`;

export const MainSectionWrapper = styled.div`
  width: 75%;
  border-right: 2px solid ${props => props.theme.colors.secondary};
  margin-top: 30px;
`;
