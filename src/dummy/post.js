const title = '한국어 어학 스터디 그룹 모집! (초급/중급) 📚';
const commentCount = 1;
const date = '2024-11-20T02:00:00Z';
const nickname = '눈송이';
const likeCount = 123;
const profileUrl = undefined;
const bookmarkCount = 27;
const content = `안녕하세요!
저는 [국적]에서 온 [이름]이고, 지금 한국에서 유학 중입니다. 한국어를 더 잘하고 싶어서 함께 공부할 스터디 그룹을 만들고자 합니다. 😊

스터디 목적:
한국어 회화 및 문법을 함께 공부하고, 자연스러운 대화 능력을 키우기 위해 모입니다.
저는 한국어 초급에서 중급 수준이고, 회화 중심의 스터디를 하고 싶습니다.

모집 대상:
- 한국어 회화를 배우고 싶으신 분!
- 비슷한 수준의 한국어를 구사하는 분!
- 다양한 문화와 경험을 나누고 싶은 분!

스터디 내용:
- 주 1~2회 모임 (시간과 장소는 협의 후 결정)
- 주제별 회화 연습 (예: 자기소개, 일상 대화, 음식, 여행 등)
- 한국어 문법 복습 및 연습
- 한국 문화 관련 토픽에 대한 이야기

장소:
[예시] 서울시 [구/동], [카페/도서관/스터디룸 등]
모임 장소는 모임 인원에 맞춰 적절히 결정할 예정입니다.

참여 방법:
- 관심 있으신 분은 댓글이나 DM으로 간단히 자기소개와 한국어 수준을 알려주세요.
- 1~2주 내에 첫 모임을 가질 예정입니다!

한국어를 배우는 여정을 함께하며 서로 도울 수 있는 좋은 기회가 되었으면 좋겠습니다. 많은 참여 부탁드려요!
감사합니다! 😊`;

export const POSTS = [
  { postId: 1, title, commentCount, date, nickname, likeCount },
  { postId: 2, title, commentCount, date, nickname, likeCount },
  { postId: 3, title, commentCount, date, nickname, likeCount },
  { postId: 4, title, commentCount, date, nickname, likeCount },
  { postId: 5, title, commentCount, date, nickname, likeCount },
  { postId: 6, title, commentCount, date, nickname, likeCount },
  { postId: 7, title, commentCount, date, nickname, likeCount },
  { postId: 8, title, commentCount, date, nickname, likeCount },
  { postId: 9, title, commentCount, date, nickname, likeCount },
  { postId: 10, title, commentCount, date, nickname, likeCount },
];

export const MY_POSTS = [
  { boardId: 1, postId: 1, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 2, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 3, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 4, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 5, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 1, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 2, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 3, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 4, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 5, title, commentCount, date, nickname, likeCount },
];

export const BOOKMARK_POSTS = [
  { boardId: 1, postId: 1, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 2, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 3, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 4, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 5, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 1, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 2, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 3, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 4, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 5, title, commentCount, date, nickname, likeCount },
];

export const SEARCH_POSTS = [
  { boardId: 1, postId: 1, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 2, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 3, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 4, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 5, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 1, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 2, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 3, title, commentCount, date, nickname, likeCount },
  { boardId: 2, postId: 4, title, commentCount, date, nickname, likeCount },
  { boardId: 1, postId: 5, title, commentCount, date, nickname, likeCount },
];

export const POST = {
  title,
  profileUrl,
  nickname,
  date,
  likeCount,
  bookmarkCount,
  content,
  commentCount,
};
