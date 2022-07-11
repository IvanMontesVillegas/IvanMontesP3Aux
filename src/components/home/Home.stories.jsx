import React from "react";
import Home from "./Home";

export default {
    title: 'IvanMontes/home',
    component: Home,
}
const Template = args => <Home {...args}/>
export const DefaultHome = Template.bind({});
