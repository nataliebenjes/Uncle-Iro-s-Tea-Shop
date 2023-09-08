# Uncle Iro's Tea Shop Inventory Tracker

Welcome to the Uncle Iro's Tea Shop Inventory Tracker! This web application is designed to help you manage your tea inventory with ease. The user is able to track their inventory of loose leaf tea after sales of 1 oz. Below, you'll find a detailed guide on how to set up and use this application effectively.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Component Structure](#component-structure)
3. [Features](#features)
4. [Themes](#themes)
5. [User Stories](#user-stories)
6. [Usage](#usage)
7. [Future Improvements](#future-improvements)
8. [Feedback and Support](#feedback-and-support)

## Getting Started

To set up the Local Tea Shop Inventory Tracker on your local machine, follow these steps:

1. Clone the repository: 

2. Install dependencies:
`npm install`
3. Start the application:
`npm start`

4. Open your preferred web browser and go to `http://localhost:3000` to access the application.

## Component Structure

Before diving into the code, it's essential to understand the component structure. This helps in navigating the codebase efficiently. You can view the component tree [here](https://www.draw.io/your-diagram-link).

## Features

The application provides the following functionalities:

1. View a list/menu of all available types of tea.
2. See details for each tea item, including name, origin, price, and type (e.g., green, black, herbal).
3. Add a new crate of tea to the inventory.
4. Click on a crate to view its detail page.
5. See the remaining ounces of tea in a crate. Each crate contains roughly 130 ounces.
6. Sell an ounce of tea with a single click. The remaining ounces will update accordingly.

## Themes

This application supports various themes, but for the purpose of this README, we'll focus on the Tea Shop theme. You'll be tracking the number of ounces of loose-leaf tea sold.

- One crate of tea contains 130 ounces of loose-leaf tea.
- Every sale decrements one ounce of tea from the crate until it is empty.

## User Stories

To ensure that the application meets your needs, consider the following user stories:

- As a user, I want to easily navigate and view available tea options.
- For each item, I want to see its name, origin, price, and type (e.g., green, black, herbal).
- As a user, I want to add a new crate of tea to the inventory with relevant details.
- I want to click on a crate to view its detailed information.
- I want to see the remaining ounces of tea in a crate.
- I want to be able to sell a pound of tea with a single click.

## Usage

1. **Viewing Available Tea Options**
- Upon opening the application, you'll see a list of available types of tea. Click on any item to view its details.

2. **Adding a New Crate of Tea**
- Navigate to the "Add New Tea Crate" page and fill in the required details (name, origin, price, type, and quantity).

3. **Viewing Tea Details**
- Click on a crate to see its detailed information, including the remaining ounces.

4. **Selling Tea**
- On the detail page, you'll find a "Sell One Ounce" button. Click it to make a sale. The remaining ounces will be updated.

## Future Improvements

Here are some potential areas for improvement:

- Implementing a feature to delete tea items from the inventory.
- Adding user authentication for secure access.
- Enhancing the UI for a more user-friendly experience.

## Feedback and Support

If you have any feedback, suggestions, or need support, please feel free to reach out via GitHub.

Enjoy using the Uncle Iro's Tea Shop Inventory Tracker!

**Happy Brewing!** 🍵
