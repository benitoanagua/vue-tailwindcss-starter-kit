import MyButton from "@/components/Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args">My Button</my-button>',
});

export const Default = Template.bind({});
Default.args = {
  size: "large",
  theme: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "large",
  theme: "secondary",
};
