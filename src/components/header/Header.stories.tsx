import type {Meta, StoryObj} from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
    component: Header,
    title: "Components/Header",
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{minHeight: "200px"}}>
                <Story />
            </div>
        )
    ]
}