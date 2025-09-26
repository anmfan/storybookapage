import type {Meta, StoryObj} from "@storybook/react";
import swimIcon from "@assets/icons/Swim.svg"
import AboutAchievementCard from "./AboutAchievementCard";

const meta: Meta<typeof AboutAchievementCard> = {
    component: AboutAchievementCard,
    title: "Components/AboutAchievementCard",
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof AboutAchievementCard>;

export const Primary: Story = {
    args: {
        icon: swimIcon,
        text: "В водоохранной 200 метровой зоне Байкала у нас расположена только станция добычи глубинной воды из озера"
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "880px", margin: "0 auto", padding: "0 1.25rem"}}>
                <Story />
            </div>
        )
    ]
}