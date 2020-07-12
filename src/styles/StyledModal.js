import styled from "styled-components";
import Modal from "react-modal";

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
`;

export default StyledModal;
