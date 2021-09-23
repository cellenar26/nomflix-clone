# Popcorn Clone
### [click me](https://cellenar26.github.io/popcorn-clone/#/)
## 에러를 해결하며 느낀 점
- 서드파티 라이브러리의 훅스 지원 여부 확인.
- api 정책 변화 등으로 인해 응답 결과가 변할 수 있으므로 이를 고려 할 것.
- Browser Router를 사용하여 배포시 [다음](https://bit.ly/3u3DPwl)을 참조 할 것.
- 함수 컴포넌트 작성시 아래의 vscode 플러그인을 설치하면 편리한 자동완성 가능.
- [자세한 에러 해결 내역 확인](https://mountain-axolotl-824.notion.site/popcorn-clone-c95fcf35762f45eb8450cebaf4501c31)
## 목표
- [팝콘타임](https://popcorntime-online.ch)을 클론 코딩.
- 클래스 컴포넌트로 구현된 프로젝트를 함수 컴포넌트로 컨버전.
- 이를 통해 함수 컴포넌트로 구현 시 어떤 이점이 있는지 파악한다.

## 구현 기능 및 활용한 api
- [x] [Now playing](https://developers.themoviedb.org/3/movies/get-now-playing) (Movie)
- [x] [Upcoming](https://developers.themoviedb.org/3/movies/get-upcoming) (Movie)
- [x] [Top Rated](https://developers.themoviedb.org/3/tv/get-top-rated-tv) (TV)
- [x] [Popular](https://developers.themoviedb.org/3/tv/get-popular-tv-shows) (TV)
- [x] [Popular](https://developers.themoviedb.org/3/movies/get-popular-movies) (Movie)
- [x] [Airing Today](https://developers.themoviedb.org/3/tv/get-tv-airing-today) (TV)
- [x] [TV Show Detail](https://developers.themoviedb.org/3/tv/get-tv-details)
- [x] [Movie Detail](https://developers.themoviedb.org/3/movies/get-movie-details)
- [x] [Search](https://developers.themoviedb.org/3/search/search-tv-shows) (TV)
- [x] [Search](https://developers.themoviedb.org/3/search/search-movies) (Movie)
