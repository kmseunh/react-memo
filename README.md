# react-memo

## 💬 설명

이 프로젝트는 React와 Zustand를 사용하여 만든 간단한 메모 애플리케이션입니다. 사용자는 메모를 생성, 편집, 및 삭제할 수 있습니다. 이 애플리케이션은 반응형 디자인을 통해 깔끔하고 직관적인 사용자 인터페이스를 제공합니다.

&nbsp;

## 🎯 목표

1. 간편한 사용자 인터페이스: 사용자가 쉽게 메모를 추가, 편집, 및 삭제할 수 있도록 직관적이고 간단한 사용자 인터페이스를 제공합니다.

2. 메모 관리: 사용자는 목록에서 메모를 확인하고 필요할 때 편집하거나 삭제할 수 있습니다.

3. 모달 폼: 메모를 추가하거나 편집할 때 모달 폼을 사용하여 사용자가 직관적으로 입력할 수 있도록 합니다.

4. 상태 관리: Zustand를 사용하여 전역 상태를 효과적으로 관리하여 다양한 컴포넌트 간의 데이터 공유를 간소화합니다.

5. 스타일링: Styled Components를 사용하여 각 컴포넌트에 일관된 스타일을 적용하여 시각적으로 매력적인 UI를 제공합니다

&nbsp;

## 💻 Tech Stacks

### Environment

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### Development

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=React&logoColor=61DAFB"> <img src="https://img.shields.io/badge/zustand-2361DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

&nbsp;

## 🖥️ 화면 구성

| 메인 페이지 | 타이머 페이지 |
|:-----------:|:-------------:|
|![image](https://github.com/kmseunh/react-checklist/assets/105186724/77e6bbf6-a092-4396-973c-d3d701522922)|![image](https://github.com/kmseunh/react-checklist/assets/105186724/886d939b-8185-42c5-8b3b-8df2b1174baa)
|**메모 리스트**|
![image](https://github.com/kmseunh/react-checklist/assets/105186724/345d1bc6-f806-4b44-9bcc-a4a5fc630131)|

&nbsp;

## ✨ 주요 기능

### 메모 목록 표시
- 메모 앱의 홈 화면에서 메모 목록을 확인할 수 있습니다.
- 각 메모는 제목과 내용이 표시되어 쉬운 식별과 검토를 제공합니다.

### 메모 추가

- "Add Memo" 버튼을 클릭하면 사용자는 새로운 메모를 작성할 수 있는 모달 폼이 나타납니다.
- 모달 폼은 메모의 제목과 내용을 입력할 수 있는 입력 필드를 포함하고 있습니다.
- 사용자가 입력한 정보를 제출하면 새로운 메모가 목록에 추가됩니다.

### 메모 편집

- 사용자는 이 버튼을 클릭하여 선택한 메모를 편집할 수 있는 모달 폼을 열 수 있습니다.
- 모달 폼은 선택한 메모의 현재 정보를 불러와서 수정할 수 있도록 합니다.

### 메모 삭제

- 사용자는 이 버튼을 클릭하여 선택한 메모를 목록에서 삭제할 수 있습니다.
- 삭제할 때는 확인을 요청하는 다이얼로그 등을 활용하여 실수를 방지합니다.
