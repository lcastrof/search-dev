import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const DeveloperCard  = styled.section`
  max-width: 450px;
  height: 100vh;
  padding: 3.75rem 1.5625rem 2.1875rem;
  background: var(--gray-500); 
  color: var(--gray-50);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    display: block;
    width: 298px;
    margin: 0 auto;
  }

  button {
    display: block;
    margin: 0 auto;
    border: 0;
    border-radius: 5px;
    padding: 0.75rem 0;

    width: 192px;

    background: var(--gray-50);
    color: var(--gray-500);

    font-style: italic;
    font-size: 1.125rem;
    font-weight: 300;

    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const DeveloperInfo = styled.header`
  margin-top: 2rem;
`;

export const DeveloperName = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    font-style: italic;
  }

  h2 {
    font-size: 1.75rem;
    font-style: italic;
    font-weight: 300;
  }
`;

export const DeveloperDescription = styled.div`
  margin: 1.4375rem 0;

  p {
    color: var(--gray-300);
    line-height: 1.75rem;
    font-size: 1.125rem;
  }
`;

export const DeveloperSocial = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.25rem;

  > div {
    display: flex;
    align-items: center;
  }

  svg {
    width: 22px;
    height: 22px;
  }

  span {
    font-size: 0.9rem;
    font-weight: 300;
    font-style: italic;
  }
`;

export const DeveloperLinks = styled.div`
  margin-top: 2.25rem;
`;

export const DeveloperLink = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.9375rem;
  }

  svg {
    width: 28px;
    height: 28px;
    margin-right: 0.875rem;
  }

  span, a {
    font-size: 1.25rem;
    font-style: italic;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: var(--gray-50);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Repositories = styled.section`
  width: 100%;
  height: 100vh;
  padding: 1.875rem 4.375rem;
  overflow-y: scroll;
`;

export const Repository = styled.div`
  max-width: 800px;

  a {
    font-size: 1.5rem;
    font-style: italic;
    text-decoration: none;
    color: var(--gray-500);
    font-weight: 300;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-top: 0.25rem;
    line-height: 1.75rem;
    font-size: 1.125rem;
  }
`;

export const RepositoryDetails = styled.div`
  display: flex;
  align-items: center;
  font-style: italic;
  font-weight: 300;
  margin-top: 0.3rem;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.25rem;
  }

  span {
    display: inline-block;

    & + span {
      margin-left: 1rem;
      padding-left: 1rem;
      position: relative;

      &::before{
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background: var(--gray-500);
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
      }
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  max-width: 800px;
  height: 1px;
  background: var(--gray-500);
  opacity: 0.1;
  border-radius: 5px;
  margin-top: 0.75rem;
  margin-bottom: 0.875rem;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;