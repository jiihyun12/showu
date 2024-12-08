import styled from "styled-components";

const S = {};

  S.Container = styled.div`
    width: 900px;
    height: 150vh;
    overflow-y: auto;
  `

  S.Fieldset = styled.fieldset`
    width: 822px;
    height: auto;

    display: flex;
    flex-direction: column;

    & input {
      background-color: black;
      color: #fff;

      width: 648px;
      height: 40px;


      border: none;
    }

    & input::placeholder{
      color: #fff;
    }

    & textarea {
      background-color: black;
      color: white;
      border: none;

      width: 680px;
      height: 460px;

      margin: 10px 0 0 0;
    }

    & textarea::placeholder{
      color: #fff;
    }

  `

  S.Label = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    gap: 30px;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }
  `

  S.LabelTextAarea = styled.label`
    width: 820px;
    height: 498px;

    border: 0.5px solid #444444;

    display: flex;
    gap: 46px;
    
    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin: 10px 0 0 10px;
    }
  `

  S.LabelSelect = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    margin-bottom: 20px;

    position: relative;
    display: flex; 
    align-items: center; 
    justify-content: space-between; 

    & p {
      font-size: 15px;
      margin-left: 10px;
    }

    & span  {
      margin-left: 10px;
    }

    & svg.down {
      margin-right: 10px;
    }
  `

  S.LabelSelectField = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }

    & span  {
      margin-left: 33px;
    }

    & svg.down {
      margin-right: 10px;
    }
  `

  S.LabelSelectTotal = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }

    & span  {
      margin-left: 45px;
    }

    & svg.down {
      margin-right: 10px;
    }
  `

  S.LabelSelectcareer = styled.label`
    width: 820px;
    height: 47px;

    border: 0.5px solid #444444;

    display: flex;
    align-items: center;
    gap: 46px;

    margin-bottom: 20px;

    & p {
      font-size: 15px;
      margin-left: 10px;
    }
  `

  S.Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `


  S.Portfolio = styled.div`

    & label::after {
      content: '+자료첨부';
      cursor: pointer;
      font-size: 15px;
        }

    & input {
      display: none;
    }
    
  `

    S.Button = styled.button`
      width: 145px;
      height: 55px;
    
      border-radius: 50px;
      background-color: #ffd400;
    
      margin: 15px auto 0 auto;

      color: black;
      font-size: 17px;
      font-weight: 800;
    `

    S.hr = styled.hr`
      width: 820px;

      margin-bottom: 20px;
      margin-top: 0;
      border: 0.5px solid #444444;
    `

    S.DropdownButton = styled.button`
      width: 600px;
      height: 40px;
      background-color: black;
      color: white;
      text-align: left;
      border: none;
      cursor: pointer;      

      &:focus {
        outline: none;
      }
    `;

    S.DropdownMenu = styled.div`
      position: absolute;
      top: 100%; 
      left: 100px;  
      width: 500px;
      background-color: #000;
      z-index: 1000;
      overflow: hidden;
      margin-top: 10px; 
    `;

export default S;