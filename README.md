# 나만의 trello 만들기

- 본 프로젝트는 Fast campus의 Byte Degree Javascript 강의 수강생 대상의 과제입니다.

---

## 프로젝트 소개
트렐로는 프로젝트 진행 현황을 시각화해주는 좋은 서비스입니다. 그런데 이 trello 서비스를 자세히 살펴보면 일종의 todo-list의 확장임을 알 수 있습니다. 아마, 한번 쯤 todo-list 만들기를 진행해보셨거나, 아니면 todo-list 예제를 블로그로 보신 적이 있으실 겁니다. trello가 우리가 보았던 todo-list 보다 복잡해보이는 이유는 우리가 경험했던 todo-list 를 감싸는 board 개념이 있기 때문입니다. (듣고보니 조금 쉬워지지 않으셨나요?)  
여러분이 강의를 통해 배운 html/css/js 내용 만으로 충분히 trello의 일부 기능들을 구현해 낼 수 있습니다!  
트렐로에 모든 기능을 구현하는게 목표가 아닙니다. 아래와 같이 프로젝트 목표에 맞춰 나만의 트렐로 보드를 만들어보세요!

## 프로젝트 목표
1. 트렐로 화면 board / list / card 마크업
2. list / card 추가 기능 (각각, Add Another List 버튼과, Add Card 버튼을 통해서만 list / card를 추가합니다.)
3. 보드에 있는 card를 선택할 경우 card 상세에 대한 modal 구현하기
4. modal 화면 내에서 card description / title 수정하기

## 프로젝트 참고하기
- 먼저 사용할 데이터들의 구조를 설계해보세요!
- js코드를 짤 때 추상화를 통한 class 구조 사용을 권장합니다.
- event 를 등록할땐 delegation 개념을 사용해봅니다.
- 반복되는 string 연산을 template literal 로 간단하게 바꿔보세요.
- 너무 똑같은 디자인을 구현하기 위해 힘쓰지 마세요! 중요한건 html / css / js 의 상호작용을 이해하는 것 입니다.

__아래 기능들은 프로젝트 목표애 포함되지 않지만, 나중에 도전해보세요!__
- list/card 제거하기
- list/card 순서 조정하기
- json파일 또는 api를 통한 데이터 저장 / 호출 / 수정 / 삭제