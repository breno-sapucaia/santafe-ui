import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  input {
    width: 100%;
    padding: 16px;
    padding-right: 40px;
    background-color: transparent;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
    outline: 0;
    transition: 0.5s;
    border-radius: 6px;
    border: 1px solid #6200ee;

    &:focus,
    :focus-visible {
      ~ .activeBorder {
        opacity: 1;
      }
    }
  }

  .activeBorder {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border: 2px solid #6200ee;
    opacity: 0;
    transition: 0.5s;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: transparent;
    display: block;
    pointer-events: none;
    border-radius: 6px;
  }

  legend {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #6200ee;
    position: absolute;
    top: -6px;
    left: 16px;
    color: #6200ee;
    background-color: #ffffff;
    z-index: 10;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }
`
