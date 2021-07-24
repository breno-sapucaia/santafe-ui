import styled from '@emotion/styled'
interface ButtonProps {
  isActive?: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: #1a73e8;
  border-radius: 500px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  > svg {
    margin-right: 6px;
  }

  > nav {
    transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0)')};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
  }
`

export const ItemsList = styled.nav`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 8px 18px;
  position: absolute;
  z-index: 10;
  width: 100%;
  left: 0;
  top: 100%;
  transition: 0.25s;

  button {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #000000;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    margin: 10px 0;
  }
`
