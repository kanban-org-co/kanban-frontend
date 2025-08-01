import styled from "@emotion/styled";

import { palette } from "@/shared/theme/palette";

export const ColumnWrapper = styled.div`
  background-color: ${palette.neutral[200]};
  border-radius: 12px;
  padding: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  border: 1px solid ${palette.neutral["300"]};

  height: max-content;
`;

export const ColumnTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${palette.neutral[900]};
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60px;
  gap: 8px;
`;

export const TaskAddButton = styled.button`
    width: 100%;

  background-color: ${palette.primary["300"]};

  appearance: none;
  border: none;
  outline: none;

  height: 30px;
`;
