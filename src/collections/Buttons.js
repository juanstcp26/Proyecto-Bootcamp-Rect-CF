import styled, { css } from "styled-components";

export const PrimaryButtonStyle = css`
  padding: 1rem 0.5rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  text-transform: uppercase;
  background-color: grey;
  color: white;
  cursor: pointer;
  border: none;
`;

export const SecondaryButtonStyle = css`
  display: block;
  font-weight: bold;
  text-decoration-thickness: 3px;
  background: transparent;
  color: #e1f0ef;
  border: 0;
  font-size: 1.2em;
  display: inline-block;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  ${PrimaryButtonStyle}
  margin-top: 100px;
  margin-bottom: 200px;
`;

export const SecondaryButton = styled.button`
  ${SecondaryButtonStyle}
`;