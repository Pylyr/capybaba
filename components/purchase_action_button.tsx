import { Button } from "@mantine/core";

// define the props that the component will accept
interface PurchaseActionButtonProps {
  text: string;
  icon: React.ReactNode;
}

export function PurchaseActionButton({
  text,
  icon,
}: PurchaseActionButtonProps) {
  return (
    <Button
      component="a"
      leftIcon={icon}
      styles={(_) => ({
        root: {
          border: 0,
          height: 42,
          marginTop: 30,
          marginBottom: 30,
        },

        leftIcon: {
          marginRight: 10,
        },
      })}>
      {text}
    </Button>
  );
}
