import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  padding: 24px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    padding: 12px 24px;
  }

  @media (max-width: 576px) {
    padding: 12px 24px;
  }
`;
