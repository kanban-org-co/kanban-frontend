import styled from "@emotion/styled";

import { theme } from "@/shared/theme";

export const Card = styled.div`
  position: relative;
  background-color: ${theme.palette.white};
  border: 1px solid ${theme.palette.neutral[200]};
  border-radius: 12px;
  padding: 12px 36px 12px 16px;
  box-shadow: 0 1px 3px ${theme.palette.shadow};
  transition: background-color 0.2s ease;
  cursor: grab;
  user-select: none;

  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  align-items: flex-start;

  &:hover {
    background-color: ${theme.palette.neutral[100]};

    button {
      visibility: visible;
    }
  }

  button {
    position: absolute;
    top: 9px;
    right: 8px;
    visibility: hidden;
  }
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.palette.neutral[900]};
`;

export const Description = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${theme.palette.neutral[500]};
  white-space: pre-line;
`;
