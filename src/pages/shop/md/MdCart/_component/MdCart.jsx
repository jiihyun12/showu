// MD - 상세페이지
import React, { useEffect, useState } from 'react';
import S from './styleCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faCheckCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

const MdCart = () => {
  const { state } = useLocation();
  const initialSelectedOptions = state?.selectedOptions || [];
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions); 
  const [checkedItems, setCheckedItems] = useState([]); // 선택된 상품들
  const [number, setNumber] = useState([]); // 각 상품의 수량
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // selectedOptions => 배열 초기화 
    setNumber(new Array(selectedOptions.length).fill(1));
  }, [selectedOptions]);

  // 전체 상품 체크박스
  const SelectAll = () => {
    const allChecked = checkedItems.every(item => item);
    setCheckedItems(Array(selectedOptions.length).fill(!allChecked));
  };

  // 각 상품 체크박스 
  const SelectEach = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const isAllChecked = checkedItems.every(item => item);
  const isAnyChecked = checkedItems.some(item => item);

  // 수량 감소
  const decrease = (index) => {
    setNumber(prevNumber => {
      const newNumber = [...prevNumber];
      if (newNumber[index] > 1) newNumber[index] -= 1;
      return newNumber;
    });
  };

  // 수량 증가
  const increase = (index) => {
    setNumber(prevNumber => {
      const newNumber = [...prevNumber];
      if (newNumber[index] < 5) {
        newNumber[index] += 1;
      } else {
        alert("각 옵션의 수량은 5개까지 선택 가능합니다.");
      }
      return newNumber;
    });
  };

  // 상품 삭제
  const deleteProduct = async (index) => {
    const isConfirmed = window.confirm("해당 상품을 삭제하시겠습니까?");
    if (isConfirmed) {
      const updatedSelectedOptions = selectedOptions.filter((_, i) => i !== index);
      const updatedCheckedItems = checkedItems.filter((_, i) => i !== index);
      const updatedNumber = number.filter((_, i) => i !== index);
  
      // 장바구니에서만 삭제
      setSelectedOptions(updatedSelectedOptions);
      setCheckedItems(updatedCheckedItems);
      setNumber(updatedNumber);
  
      // 장바구니 업데이트
      try {
        const response = await fetch(`http://localhost:8000/shop/md/cart`, {
          method: "PUT", 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selectedOptions: updatedSelectedOptions,
          }),
        });
  
        if (!response.ok) {
          alert("장바구니 업데이트 실패");
        }
      } catch (error) {
        console.error("장바구니 업데이트 중 오류 발생:", error);
      }
    }
  };

  useEffect(() => {
    // 총 금액 계산
    let total = 0;
    selectedOptions.forEach((item, index) => {
      if (checkedItems[index]) {
        total += item.price * number[index];
      }
    });
    setTotalAmount(total);
  }, [checkedItems, number, selectedOptions]);

  if (!selectedOptions || selectedOptions.length === 0) {
    return <p>장바구니에 담긴 상품이 없습니다.</p>;
  }

  return (
    <S.CartWrapper>
      <S.CartTitle>
        <h1>장바구니</h1>
      </S.CartTitle>

      <S.Delete>
        <FontAwesomeIcon className='icon1' icon={faCircleExclamation} />
        <p>장바구니에 담긴 상품은 90일 동안 보관 후 삭제됩니다.</p>
      </S.Delete>

      <S.SelectAll>
        <S.CheckIcon1 onClick={SelectAll} checked={isAllChecked}>
          <FontAwesomeIcon className='icon2' icon={faCheckCircle} />
        </S.CheckIcon1>
        <span>해당 상품 전체 선택</span>
      </S.SelectAll>

      <S.BarWrapper>
        <S.BarName>상품명</S.BarName>
        <S.BarQuantity>수량</S.BarQuantity>
        <S.BarPrice>금액</S.BarPrice>
      </S.BarWrapper>
      <S.ProductList>
        {selectedOptions.map((selected, index) => {
          return (
            <S.ProductItem key={index}>
              <S.CheckIcon2 onClick={() => SelectEach(index)} checked={checkedItems[index]}>
                <FontAwesomeIcon className='icon2' icon={faCheckCircle} />
              </S.CheckIcon2>
              <S.ProductImage src={selected.image} alt="장바구니 상품" />
              <S.ProductInfo>
                <S.ProductName className='name'>{selected.name}</S.ProductName>
                <S.ProductName className='option'>{selected.option}</S.ProductName>
                <S.QuantityControl>
                  <S.QuantityButton onClick={() => decrease(index)}>-</S.QuantityButton>
                  {/* <span>{number[index]}</span>  */}
                  <span>{selected.quantity}</span> 
                  <S.QuantityButton onClick={() => increase(index)}>+</S.QuantityButton>
                </S.QuantityControl>
                <S.ProductPrice>{(selected.price * number[index]).toLocaleString()}원</S.ProductPrice>
                <FontAwesomeIcon className='icon3' icon={faXmark} 
                  onClick={() => deleteProduct(index)} />
              </S.ProductInfo>
            </S.ProductItem>
          );
        })}
      </S.ProductList>

      <S.Total>
        <S.TotalAmount>총 상품 금액 ({checkedItems.filter(item => item).length}개)</S.TotalAmount>
        <S.Pay>{totalAmount.toLocaleString()}원</S.Pay>
        <S.CheckoutButton 
          isAnyChecked={isAnyChecked}
          onClick={() => {
            if (isAnyChecked) {
              const confirmCheckout = window.confirm("결제 페이지로 이동하시겠습니까?");
              if (confirmCheckout) {
                navigate('/shop/md/payment', { 
                  state: { 
                    selectedOptions: selectedOptions.filter((_, index) => checkedItems[index]) 
                  }
                });
              }
            } else {
              alert("결제할 상품을 선택하세요!");
            }
          }}>
          결제 진행
        </S.CheckoutButton>
      </S.Total>
    </S.CartWrapper>
  );
};

export default MdCart;
