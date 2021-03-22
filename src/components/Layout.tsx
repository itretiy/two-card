import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
`;

const Side = styled.div`
  padding: 0 2em;
`;

export interface LayoutProps {
  children: ReactNode;
  side: ReactNode;
}

export default function Layout({ children, side }: LayoutProps) {
  return (
    <Root>
      <Main>{children}</Main>
      <Side>{side}</Side>
    </Root>
  );
}
