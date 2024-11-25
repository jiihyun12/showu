import styled from "styled-components";

const S = {};


  S.MainWrapper = styled.div`
    background-color: #000;
  `

  S.Md = styled.h1`
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    
    & h1 {
      margin-top : 50px;
      color: #ffd400 
    }
  `

  S.Best = styled.p`
    font-size: 30px;
    font-weight: bold;
    color : #fff;
    /* & h2 {
    font-weight: ${({theme}) => theme.FONT_WEIGHT.bold};
    } */
  `

  S.IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    height: 100%;

    .icon{
      font-size: 20px;

      path {
        color : #ffd400;
      }
    }
  `

  S.BestWrapper = styled.div`
    margin-top : 50px;
  /* align-items: center; */
    /* display: flex;
    flex-direction: row; */
  `

  S.BestImage = styled.image`

  & img {
    width: 300px;
    height: 300px;
  }
  `

  S.BestList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  `

  S.Best = styled.div`
  `

  S.BestTitle = styled.p`
  `

  S.BestPrice = styled.p`
    font-weight: bold;
  `

  S.MdWrapper = styled.div`
  margin-top: 30px;
  `

  S.MdList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  `

  S.Md2 = styled.div`
  `

  S.MdImage = styled.image`

    & img {
    width: 300px;
    height: 300px;
  }
  `

  S.MdTitle = styled.p`
  `

  S.MdPrice = styled.p`
    font-weight: bold;
  `

  S.CategoryButton = styled.div` // 상단 버튼들
    /* margin-left: 320px; */
    /* margin-top: 80px; */
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    max-width: 1050px;
    margin: 50px auto 0;
    
    div { // 버튼 간격
      display: flex;
      gap: 8px; 
    }

    button { // 버튼 스타일
      border-radius: 30px;
      padding: 10px 15px;
      background-color: black;
      color: ${({ theme }) => theme.PALLETE.white};
      border: 1px solid #ffd400;
      cursor: pointer;
      
      &:hover { // 버튼 호버
        background-color: #ffd400;
        color: ${({ theme }) => theme.PALLETE.black};
      }
    }
  `
export default S;

