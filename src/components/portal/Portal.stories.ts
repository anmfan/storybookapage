import type {Meta, StoryObj} from "@storybook/react";
import Portal from "./Portal";

const meta: Meta<typeof Portal> = {
    component: Portal,
    title: "Components/Portal",
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Portal>;

export const Primary: Story = {
    args: {}
}