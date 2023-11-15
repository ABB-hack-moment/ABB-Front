import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";

const WrapperBlock = styled.div`
  .mobile {
    width: 390px;
  }
  .browser {
    width: 1280px;
  }
  margin: 0 auto;
`;

const Wrapper = ({ children, ...rest }) => {
  return (
    <WrapperBlock {...rest}>
      <div className="mobile">{children}</div>
    </WrapperBlock>
  );
};

export default Wrapper;
