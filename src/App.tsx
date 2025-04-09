import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { DefaultTextField, Label } from './common';

function App() {
  const [count, setCount] = useState(0);

  const onChangeEmail = (e) => {
    const value = e.target.value;
  };
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        iconAlt="아이콘 이미지"
        iconPath="/icons/ic-public-delete-dark.svg"
        onIconClick={() => {}}
        onChange={() => onChangeEmail}
        errorMessage="에러 메시지다"
        placeholder="이메일을 입력하세요"
        value=""
        isError={false}
      />

      <Label htmlFor="adress">주소</Label>
      <DefaultTextField
        id="adress"
        iconAlt="아이콘 이미지"
        iconPath="/icons/ic-public-delete-dark.svg"
        onIconClick={() => {}}
        onChange={() => {}}
        errorMessage="주소 에러다"
        placeholder="주소를 입력하세요"
        value=""
        isError={false}
      />
    </>
  );
}

export default App;
