import React from "react";
import App from "./App";

export default {
    title: 'IvanMontes/app',
    component: App,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template = args => <App {...args}/>
export const DefaultApp = Template.bind({});
DefaultApp.args = {
    backgroundColor: 'primary',
};