import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 1px 1px;
  background: #1E88E5;
  position: absolute;
  bottom: 0.01rem;
  width: 100%;

  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
