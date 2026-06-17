...

# Dev Tinder

-- Create a Vite + React application
-- Remove unnecessary code and create a Hello world app
-- Install Tailwind CSS
-- Install Daisy UI
-- Add Navbar component to App.jsx
-- Create a separate NavBar.jsx component file
-- Install react router
-- Create Routes and Outlet
-- Create Footer component to App.jsx
-- Create a Login Page
-- Install axios
-- CORS - Install cors in backend => add midddleware to app with configurations: origin and credentials: true

-- Whenever you're making an API call, pass axios => {withCredentials: true} in frontend code. Else it will not send the "token" back. CHECK "token" inside Applications tab. The Cookie should have a token. It helps in authentication, while making a network request.

-- Install react-redux + @reduxjs/toolkit => https://redux-toolkit.js.org/tutorials/quick-start

-- ConfigureStore => Provider => createSlice => add reducer to Store => add data to the redux store using useDispatch hook and by dispatching an action => Subscribe(reading data from store) to the store using useSelector.

-- Add Redux devtools in chrome.
-- Login and see if data is displaying properly in the store
-- NavBar should update as soon as user logs in
-- Refactor our code to add constants file + create a components folder
-- You should not be able to access other routes without login.
-- If token is not present, redirect user to login page.
-- Logout feature
-- Get the feed and add the feed in the store
-- Built the UserCard inside Feed page
-- Built Edit Profile feature inside Profile
-- Show Toast Message on Save Profile
-- New page to see all my connections
-- New page to see all my connection requests
-- Feature - Accept/Reject connection request

Remaining:
-- Send / Ignore the user card from Feed
-- Sign up New user
-- E2E Testing

# App Structure

Body
NavBar
Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Route=/profile => Profile

# 📋 The Ultimate QA Cheat Sheet for Http status & error codes

1. 100s: "Hold on, I'm thinking." (Information) [🔍]
2. 200s: "Here you go, all good!" (Success) [🔍]
3. 300s: "Go over there instead." (Redirect) [🔍]
4. 400s: "You messed up, Frontend." (Client Error) [🔍]
5. 500s: "I messed up, Backend." (Server Error) [🔍]
