import type {Meta, StoryObj} from "@storybook/react";
import Footer from "./Footer";
import {BrowserRouter} from "react-router-dom";

const meta: Meta<typeof Footer> = {
    component: Footer,
    title: "Components/Footer",
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        )
    ]
}