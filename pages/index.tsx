import { Container, Group, SimpleGrid, useMantineTheme } from "@mantine/core";
import { Inter } from "@next/font/google";
import { IconPlus, IconQuestionMark } from "@tabler/icons";
import { Footer } from "../components/footer";
import { HeaderTabsColored } from "../components/header";
import { ArticleCard } from "../components/item_card";
import { PurchaseActionButton } from "../components/purchase_action_button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useMantineTheme();
  let card = (
    <ArticleCard
      image="https://media.licdn.com/dms/image/C4D03AQHlzYosnRmIcg/profile-displayphoto-shrink_800_800/0/1603479055239?e=1678320000&v=beta&t=fAYivl8tRJbB3Xt-_H_ANvJN1c539_00pbYSnRCeoag"
      link="https://google.com"
      title="Cyrus's mom"
      description="Biggest whore in the world"
      author={{
        name: "Cyrus (Gay) Pellet",
        image:
          "https://media.licdn.com/dms/image/C4D03AQHlzYosnRmIcg/profile-displayphoto-shrink_800_800/0/1603479055239?e=1678320000&v=beta&t=fAYivl8tRJbB3Xt-_H_ANvJN1c539_00pbYSnRCeoag",
      }}
      tag="New"
    />
  );
  return (
    <>
      <HeaderTabsColored
        user={{
          name: "John Doe",
          image: "https://avatars.githubusercontent.com/u/1443320?v=4",
        }}
      />
      <Container>
        <Group>
          <PurchaseActionButton
            text="Sell Item"
            icon={<IconPlus size={26} />}
          />
          <PurchaseActionButton
            text="Request Item"
            icon={<IconQuestionMark size={26} />}
          />
        </Group>
        <SimpleGrid
          cols={3}
          spacing="md"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}>
          {card}
          {card}
          {card}
          {card}
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}
