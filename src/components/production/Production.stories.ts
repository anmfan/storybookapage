import type {Meta, StoryObj} from "@storybook/react";
import Production from "./Production";

const meta: Meta<typeof Production> = {
    component: Production,
    title: "Components/Production",
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Production>;

export const Primary: Story = {
    args: {}
}