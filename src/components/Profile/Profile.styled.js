import styled from 'styled-components';

export const Background = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  background-color: #e5edf1;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;

    img {
      width: 100%;
    }
  }
`;

export const Username = styled.p`
  color: black;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 0;
`;

export const UserData = styled.p`
  color: gray;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid #738087;
  width: 80%;
  margin: 0;
  list-style-type: none;
  padding: 0;
  border-radius: 8px;
  border-top: none;

  @media (max-width: 540px) {
    width: 60%;
    margin-right: 25%;
  }

  & > li {
    width: 33.3%;
    background-color: #c8d6dd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #738087;
    border-radius: 8px;
    padding: 10px;
  }
`;

export const Label = styled.span`
  color: black;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

export const Quantity = styled.span`
  color: #738087;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
`;
