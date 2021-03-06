import styled from 'styled-components';

export const PContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-color: #fff;
  // background-color: #e96196;
  // background-image: linear-gradient(315deg, #e96196 0%, #ffffff 74%); 
  color: #000;
`;

export const PWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const PCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const PImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #e96196;
`;

/*
  // pampaganda sa box
  box-shadow: 8px 8px #000;
*/

export const PHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const PTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const PInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const PDesc = styled.p`

  margin-bottom: 1rem;
`;

export const PPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const PButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: outline;
  background: #fff;
  color: #000;
  transition: 0.2 ease-out;
  &:hover {
    background: #000;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;