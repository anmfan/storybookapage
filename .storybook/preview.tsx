import type { Preview } from '@storybook/react-vite'
import { MemoryRouter } from "react-router-dom";

const preview: Preview = {
  decorators: [
    (Story) => (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
    )
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;