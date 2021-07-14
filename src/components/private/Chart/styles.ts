import styled from '@emotion/styled'

export const Container = styled.div`
  min-height: 285px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px 14px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
    color: #000000;
    font-weight: 400;
  }

  > span {
    opacity: 0.6;
  }
`
