import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 720px;
  margin: 0 auto; */

  h1 {
    font-size: 2.5rem;
    font-style: italic;
    font-weight: 300;
  }

  form {
    display: flex;
    align-items: center;

    input {
      padding: 0.75rem 0.875rem;
      border-radius: 5px;
      border: 1px solid var(--gray-500);
      font-size: 1.125rem;
      width: 400px;
      color: var(--gray-400);

      &::placeholder {
        font-style: italic;
        font-weight: 300;
      }
    }

    button {
      border: 0;
      background: var(--gray-400);
      color: var(--gray-50);
      border-radius: 5px;
      height: 100%;
      display: flex;
      align-items: center;
      font-style: italic;
      font-weight: 300;
      font-size: 1.275rem;
      padding: 0 0.75rem;
      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.8);
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
      }
    }
  }
`;