import { useLocation } from 'react-router-dom';

export default function GroupBoard() {
  const { pathname } = useLocation();

  return <section>{pathname} 게시판</section>;
}
