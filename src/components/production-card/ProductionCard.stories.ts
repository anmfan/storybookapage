import type {Meta, StoryObj} from "@storybook/react";
import bottleMidIcon from "@assets/icons/bottle-mid.png"
import ProductionCard from "./ProductionCard";

const meta: Meta<typeof ProductionCard> = {
    component: ProductionCard,
    title: "Components/ProductionCard",
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof ProductionCard>;

export const Primary: Story = {
    args: {
        icon: bottleMidIcon,
        volume: "1"
    }
}