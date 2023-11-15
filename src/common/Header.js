import styled from "styled-components";
import Wrapper from "./Wrapper";

const StyledHeader = styled.div`
  .logo {
    flex: 1;
    font-size: 2rem;
    font-weight: bold;
    align-items: center;
  }
`;

function Header() {
  return (
    <Wrapper>
      <StyledHeader>
        <div className="logo">Moment</div>
      </StyledHeader>
    </Wrapper>
  );
}
export default Header;
