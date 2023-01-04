import { IconBookmark, IconHeart, IconShare } from "@tabler/icons";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Button,
  Avatar,
  createStyles,
  Stack,
} from "@mantine/core";

import { IconShoppingCart } from "@tabler/icons";

function BuyButton() {
  return (
    <Button
      component="a"
      href="#"
      variant="outline"
      size="sm"
      leftIcon={<IconShoppingCart size={18} />}>
      95 EUR
    </Button>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  tag: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps {
  image: string;
  link: string;
  title: string;
  description: string;
  tag: string;
  author: {
    name: string;
    image: string;
  };
}

export function ArticleCard({
  className,
  image,
  link,
  title,
  description,
  author,
  tag,
  ...others
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) {
  const { classes, cx, theme } = useStyles();
  const linkProps = {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <Card
      withBorder
      radius="md"
      className={cx(classes.card, className)}
      {...others}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} alt={title} height={180} />
        </a>
      </Card.Section>

      <Badge
        className={classes.tag}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}>
        {tag}
      </Badge>

      <Text className={classes.title} weight={500} component="a" {...linkProps}>
        {title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group position="apart" mb={10} className={classes.footer}>
        <Center>
          <Avatar src={author.image} size={24} radius="xl" mr="xs" />
          <Text size="sm" inline>
            {author.name}
          </Text>
        </Center>
        <Text size="sm">Apt 30.05</Text>
      </Group>
      {/* align the buybutton on the right */}
      <Stack justify="flex-end">
        <BuyButton />
      </Stack>
    </Card>
  );
}
