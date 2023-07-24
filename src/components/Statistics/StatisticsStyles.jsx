import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Container = styled.section`
  margin: 20px auto 0 auto;
  width: 400px;
  background-color: #d7e3d1;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  padding: 30px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 18px;
  color: ${getRandomHexColor};
`;

export const Percentage = styled.span`
  font-size: 18px;
  color: ${getRandomHexColor};
`;
