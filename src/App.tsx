import '@mantine/core/styles.css';

import { AppShell, Burger, Group, MantineProvider, Text, Title } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { useDisclosure } from '@mantine/hooks';
import { Footer } from './components/Footer/Footer';

export default function App() {

  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        footer={{ height: 40 }}
        padding="md"
      >
        <AppShell.Header>
          <Title><Text inherit variant="gradient" component="span" gradient={{ from: 'yellow', to: 'teal' }}>
            Seattle Spike Girls
          </Text></Title>
        </AppShell.Header>
        <AppShell.Main><Router /></AppShell.Main>
        <AppShell.Footer><Footer /></AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}