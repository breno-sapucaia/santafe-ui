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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > svg {
    margin-right: 6px;
  }

  > nav {
    height: ${({ isActive }) => (isActive ? 'auto' : '0')};
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
  transition: 0.5s;

  button {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #000000;
  }
`
