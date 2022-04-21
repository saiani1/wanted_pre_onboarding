# wanted_pre_onboarding

## TAB

1. 구현방법 :
마크업은 평범하게 nav->ul->li->a태그 구조로 짜고, state에 선택한 a태그 text값을 저장하고, state에 특정text가 저장되면 (해당 탭을 클릭하면) 특정 클래스가 적용되도록 작성했다.

2. 어려웠던 점 :
- 탭을 클릭했을 때 물 흐르듯이 under-bar가 움직이게 만드는 게 어려웠다.
- li에 className을 &&연산자를 써서 적용했는데 에러가 났다. 인터넷을 보니 컴포넌트 안에 styled-component css를 작성해야 하던데 아직 그건 해본적이 없어서... 일단 실행은 되길래 그냥 놔뒀다ㅠ

3. 해결과정 & 방법 :
google서칭을 통해 a태그 border-bottom이 아닌 따로 under-bar를 생성해야 하고, ~선택자를 사용해서 특정 클래스가 적용되었을 경우, 형제 태그인 bar를 margin-left로 움직여야 한다는 걸 알아냈다.

## INPUT

1. 구현방법 :
- email
state를 이용해서 email input의 입력값을 읽고, email input에 onChange이벤트를 연결해서 입력값을 저장한다. (입력하는 즉시 유효성검사가 가능하게 하기 위해 useState를 썼다.)
이미지의 경우, 삼항연산자를 사용하여 유효한 이메일인지 아닌지를 판단하여 체크박스에 색깔이 바뀌게 하였다.
- password
눈 모양 버튼을 눌렀는지 안 눌렀는지를 확인하기 위해 state를 사용했다. state가 참이라면 input type을 text로 바꿔 비밀번호를 공개하고, 거짓이라면 password로 바꿔 비밀번호를 가리게 했다.
이미지의 경우, 삼항연산자를 사용하여 해당 이미지가 나타나게 했다.

2. 어려웠던 점 :
이메일 유효성 검사 부분이 어려웠다. 예시를 보니까 꽤나 정확한 유효성검사가 필요한 듯 했다.

3. 해결과정 & 방법 :
google서칭을 통해 이메일 유효성 부분이 정규식으로 된 코드를 찾아서 붙여넣었다.

## TOGGLE

1. 구현방법 :
label+input구조로 마크업 한 뒤에, htmlFor와 id로 두 태그를 연결해주고 input은 숨긴다. state로 선택한 input value값을 저장하고, 별개의 toggle배경을 만들어 움직이게 만들었다.

2. 어려웠던 점 & 해결과정 & 방법 :
tab과 마찬가지로 스르륵 움직이게 만드는 부분이 어려웠는데 tab부분과 같은 방법으로 해결했다.

## SLIDER

1. 구현방법 :
- 마크업 : range input기본스타일을 무효화하고, 원을 range input위에 1% / 25% / 50% / 75% / 100%부분에 위치시키고, range input의 track 배경을 깔고, progress-bar를 올려준다. button을 위의 퍼센트 부분에 위치시킨다. div태그로 수치를 보여주는 박스를 만들었다.
- 프로그래밍 : state를 써서 range value값을 저장하고, div box의 p태그에 연결하여 실시간 수치를 나타내게 하고, button에도 연결하여 특정 button을 누를때마다 range input이 특정 수치만큼 증가하도록 만들고, input태그에도 value값만큼 slider-thumb이 움직이게 만들었다. 그리고 progress-bar부분은 width부분이 state값만큼 늘어나고 줄어들도록 했다.

2. 어려웠던 점 :
- range input의 progress-bar색깔을 바꾸는 부분이 어려웠다. 계속 구글링해도 webkit에서는 progress-bar를 구현하려고 하면 input에 overflow: hidden을 주고, slider-thumb에 box-shadow를 주라고 했는데 overflow: hidden을 주면 slider-thumb부분이 잘려서 계속 서칭했었다.
- 크롬브라우저에서는 일단 정확하게 보이게 만들긴 했는데...다른 브라우저는 어떻게 보일지 잘 모르겠다.

## DROPDOWN

1. 구현방법 :
button으로 dropdown 메인을 만들고, text input과 ul<li구조를 결합해서 드롭다운 내용을 만들었다. 누른 symbol을 state에 저장해 button에 나타나게 했고, text input에 onChange이벤트를 연결해서 입력되는 값을 대문자로 변환하여 filter + map해서 필터링된 symbol들을 나타나게 했다.

2. 어려웠던 점 :
- 처음에는 select박스로 만들어보려고 했는데 option에 search box를 추가하기가 어려웠고, select/option태그를 스타일링 하는 것도 어려웠다.
- button이 아닌 바깥 부분을 눌렀을 때 dropdown list를 닫히게 만들고 싶었는데 구현을 못한 게 아쉽다.

3.해결과정 & 방법 :
구현방법에 적힌대로 해결했다. select/option에 집착을 버리니 생각보다 수월하게 진행됐다.

##