# SVG Logo Maker - OOP Challenge

The task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site.. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## Github
[Github Repo](https://github.com/KrispyKhang/SVG-Logo-Maker)

## Table of Contents
- User Story 
- Acceptance Criteria
- Packages Installeed
- Walkthrough

## User Story
- AS a freelance web developer
- I WANT to generate a simple logo for my projects
- SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg`
- AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered


## Packages Installed
- Node Modules (run "npm i" on terminal)
- Jest package (npm i jest) - to test
- Inquirer package (npm i inquirer) - command line interface for node js to run your prompts

## Walkthrough
![](./ReadMeAssets/walkthrough.gif.sb-5b1e616b-bZ8lMR)

- As you view the walkthrough. We opened our terminal and did "npm test" from our jest package where we test to see if our js works.
- Then ran "nodemon server" where we run the inquirer prompt.
- The inquirer prompt which we're able to access through the Inquirer package asks us a series of questions on our SVG cosmetic preferences.
- After answering the series of questions on the prompt, our SVG logo is created.
- See screenshot below of the finished product.

![](./ReadMeAssets/Screenshot%202024-01-28%20at%2011.06.25%20AM.png)

