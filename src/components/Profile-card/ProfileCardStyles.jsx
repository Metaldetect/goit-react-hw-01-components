import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Card = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 400px;
  background-color: #d5e3d1;
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  background-color: #edf2eb;
`;

export const UserName = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: gray;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: ${getRandomHexColor};
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${getRandomHexColor};
`;
