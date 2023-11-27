import styled from "styled-components";

export const DetailsDivider = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    gap: 10px;
    height: 30px;
    align-items: center;
    margin: 10px 0;
  }
  > p,
  h3 {
    margin: 10px 0;
  }
`;

export const DetailsMain = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
`;
