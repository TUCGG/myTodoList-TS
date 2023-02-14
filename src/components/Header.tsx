import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <button>
        <Link to="/">투두보러가기</Link>
      </button>
      <button>
        <Link to="/test">테스트페이지 가기</Link>
      </button>
    </div>
  );
};

export default Header;
