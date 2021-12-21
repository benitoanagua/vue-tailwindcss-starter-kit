<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "myButton",
  props: {
    theme: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "primary", "secondary"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      buttonClass: computed(() => ({
        "text-center rounded-md": true,
        "text-white": props.theme !== "default",
        "text-gray-900": props.theme === "default",
        "bg-white hover:bg-gray-50": props.theme === "default",
        "ring-inset ring-1 ring-gray-900 hover:ring-gray-500":
          props.theme === "default",
        "bg-blue-500 hover:bg-blue-600": props.theme === "primary",
        "bg-gray-800 hover:bg-gray-900": props.theme === "secondary",
        "py-0.5 px-6 text-sm font-semibold": props.size === "small",
        "py-1 px-6 text-500": props.size === "medium",
        "py-2 px-6 text-lg font-light": props.size === "large",
      })),
    };
  },
};
</script>
