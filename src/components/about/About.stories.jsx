import React from "react";
import About from "./About";

export default {
    title: 'IvanMontes/About',
    component: About,
}

const Template = args => <About {...args}/>
export const DefaultAbout = Template.bind({});