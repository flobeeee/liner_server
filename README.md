# liner_server

# 스키마

![image](https://user-images.githubusercontent.com/72782088/118912338-9c96e380-b962-11eb-99a3-b2761f0110e9.png)

- Themes 는 Users 와 1:n 관계를 가집니다.(하나의 테마는 여러유저에게 선택될 수 있고, 한 유저는 하나의 테마만 선택할 수 있습니다.)
- Users 와 Pages 는 n:m 관계를 가집니다.(한 유저는 여러 사이트에 북마크를 할 수 있고, 한 사이트도 여러유저에게 선택될 수 있습니다.)
- User_Pages 는 join table 입니다. (join table 인걸 직관적으로 알 수있게 테이블명을 설정했고, 해당 테이블에서 각각의 텍스트와 색상을 관리합니다.)
