import type { Meta, StoryObj } from '@storybook/react';

import { ChatInputFields } from './ChatInputField';

const meta: Meta<typeof ChatInputFields> = {
  title: 'ChatTextField',
  component: ChatInputFields,
  parameters: {
      previewTabs: {
          'storybook/docs/panel': { hidden: true }
      },
      viewMode: 'canvas',
  }
};

export default meta;
type Story = StoryObj<typeof ChatInputFields>;

export const Playground: Story = {
  args: {
    assigned: false,
    label: 'Assign myself and reply',
    user: {
      name: 'Carlos Almeraz',
      img:"https://lh3.googleusercontent.com/a/AAcHTte6B1AdviEGhEEdp_I5Ikzk5lRWHaOvlIB6GqKaxjt7DUc=s83-c-mo"
    }
  },
};

// export const Assigned: Story = {
//   args: {
//     assigned: true,
//     label: '',
//     user: {
//       name: 'Carlos Almeraz',
//       img:"https://lh3.googleusercontent.com/a/AAcHTte6B1AdviEGhEEdp_I5Ikzk5lRWHaOvlIB6GqKaxjt7DUc=s83-c-mo"
//     }
//   },
// };

