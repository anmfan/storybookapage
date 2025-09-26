import type {Meta, StoryObj} from "@storybook/react";
import PortalButton from "./PortalButton";

const meta: Meta<typeof PortalButton> = {
    component: PortalButton,
    title: "Components/PortalButton",
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof PortalButton>;

export const Primary: Story = {
    args: {},
    parameters: {
        layout: "centered"
    }
}