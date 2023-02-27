import styled from '@emotion/styled';
import { getRandomHexColor } from 'helpers/randomColor';

export const SectionStats = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const TitleStats = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
`;

export const ListStat = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${getRandomHexColor};
  padding: 20px;
  color: #fff;
  font-size: 16px;
`;

export const Сoefficient = styled.span`
  font-size: 30px;
  font-weight: 300;
`;
