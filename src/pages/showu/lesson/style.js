import styled from 'styled-components';

const S = {};

S.lessonMainWrapper = styled.div`
 background-color: #000;
`

S.title = styled.h1 `
    color : #ffd400;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    padding: 50px 0;
    height: 140px;
`
S.lessonMainTop =styled.div`
    margin:  0 auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
`
S.lessonCategoryWrapper = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
    border-bottom:  1px solid #fff;
& .lessonCategory {
    background-color: #000;
    width: 100px;
    height: 55px;
    border: 1px solid #ffd400;
    border-radius: 50px;
    color: #ffd400;
    padding: 16px;
    font-size: 18px;
}
`



export default S;