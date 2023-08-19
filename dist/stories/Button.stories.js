import { Button } from "../components/Button";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: "Example/Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export var Primary = {
    args: {
        children: "BUTTON",
        className: "bg-red-500",
    },
};
export var Secondary = {
// args: {
//   label: "Button",
// },
};
export var Large = {
// args: {
//   size: "large",
//   label: "Button",
// },
};
export var Small = {
// args: {
//   size: "small",
//   label: "Button",
// },
};
