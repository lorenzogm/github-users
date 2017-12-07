# GitHub Users

## Objective

Single Page application (SPA) which displays a list of Github users by using
Github public API with an option to display detailed user data on a separate
page.

## Stack

The following stack is used:

1. React
2. Redux
3. React router
4. HTTP library
5. Bootstrap

## Details

1. A list of github users (avatar, login, details button) is displayed.

   * Show the loading spinner before all users have been fetched.
   * Infinite scroll feature.

2. When details button is clicked a new page with information about the user is
   shown. Fields (id, avatar, login, html_url) with a back button to go back to
   the initial list of users.
3. Single user page should display the user data after refreshing the page.
