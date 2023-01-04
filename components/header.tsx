import { useState } from "react";
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from "@tabler/icons";
import { SearchBar } from "./search_bar";

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderBottom: `1px solid ${
      theme.fn.variant({ variant: "filled", color: theme.primaryColor })
        .background
    }`,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      // slightly darken background on hover
      backgroundColor: theme.colors.orange[1],
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },
}));

interface HeaderTabsProps {
  user: { name: string; image: string };
}

export function HeaderTabsColored({ user }: HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Image src="/logo.png" alt="logo" width={140} />
          <SearchBar />
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color={theme.white}
          />

          <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}>
            <Menu.Target>
              <UnstyledButton className={cx(classes.user)}>
                <Group spacing={15}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={50}
                  />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                icon={
                  <IconHeart
                    size={14}
                    stroke={1.5}
                    color={theme.colors.red[6]}
                  />
                }>
                Liked posts
              </Menu.Item>
              <Menu.Item
                icon={
                  <IconStar
                    size={14}
                    stroke={1.5}
                    color={theme.colors.yellow[6]}
                  />
                }>
                Saved posts
              </Menu.Item>
              <Menu.Item
                icon={
                  <IconMessage
                    size={14}
                    stroke={1.5}
                    color={theme.colors.blue[6]}
                  />
                }>
                Your comments
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
                Logout
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
                Pause subscription
              </Menu.Item>
              <Menu.Item
                color="red"
                icon={<IconTrash size={14} stroke={1.5} />}>
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}
