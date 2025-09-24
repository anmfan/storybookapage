import type {Meta, StoryObj} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
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
            <BrowserRouter>
                <div style={{minHeight: "200px"}}>
                    <Story />
                </div>
            </BrowserRouter>
        )
    ]
}