import type {Meta, StoryObj} from "@storybook/react";
import FooterLink from "./FooterLink";
import {BrowserRouter} from "react-router-dom";

const meta: Meta<typeof FooterLink> = {
    component: FooterLink,
    title: "Components/FooterLink",
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof FooterLink>;

export const Primary: Story = {
    args: {
        label: "BAIKALSEA Company",
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        )
    ]
}