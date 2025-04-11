import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { DefaultTextField, Label, TagList } from './common';
import { NavigationBar } from './special';

function App() {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col gap-y-3 mb-10">
        <Label htmlFor="email">이메일</Label>
        <DefaultTextField
          id="email"
          iconAlt="아이콘 이미지"
          iconPath="/icons/ic-public-delete-dark.svg"
          onIconClick={() => {}}
          onChangeInput={onChangeHandler}
          errorMessage="에러 메시지다"
          placeholder="이메일을 입력하세요"
          value={value}
          isError={isError}
          styleName="parent"
        />
      </div>

      <div className="flex flex-col gap-y-3 mb-10">
        <Label htmlFor="adress">주소</Label>
        <DefaultTextField
          id="adress"
          iconAlt="아이콘 이미지"
          iconPath="/icons/ic-public-delete-dark.svg"
          onIconClick={() => {}}
          errorMessage="주소 에러다"
          placeholder="주소를 입력하세요"
          value=""
          isError={isError}
          styleName="parent"
        />
      </div>
      <button onClick={() => setIsError((prev) => !prev)}>에러 토글</button>
      <br />
      <br />
      <NavigationBar>
        <h1>타이틀</h1>
      </NavigationBar>

      <br />
      <br />

      <div className="bg-primary p-20">
        <TagList
          tagList={['react', 'typescript', 'storybook']}
          onTagClick={console.log}
        />
      </div>
    </div>
  );
}

export default App;
