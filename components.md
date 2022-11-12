# Llambordaires

# Data Layer

## Data

-   UsersContext
    -   Users list
        -   Friends list
        -   Enemies list
    -   User profile:
        -   Name
        -   ID
        -   Picture
        -   Email
        -   Array of friends
        -   Array of enemies
-   UIContext
    -   isLoading
    -   isError
    -   isAdded
    -   isDeleted
    -   isFriend
    -   isEnemy

## Receive interactions

-   UsersContext
    -   loadUsers - Fill the array of users
    -   addFriend - Add user to the array of friends users
    -   addEnemy - Add user to the array of enemies users
    -   removeFriend - Remove user from the array of friend users
    -   remoseEnemy - Remove user from the array of friends users
    -   editUser - Update the user profile
    -   registerUser - Add new user to database
-   UiContext
    -   setIsLoadingTrue
    -   setIsLoadingFalse
    -   setIsErrorTrue
    -   setIsErrorFalse
    -   setIsAdded
    -   setIsDeleted
    -   setIsFriend
    -   setIsEnemy

# Components

## APP

### Show data

-   Header component
-   LoginPage before user logs in if user is registered
-   RegisterPage if user is not registered
-   HomePage when user is logged in
-   FormPage when user wants to update profile
-   NotFoundPage when user tries to navigate to unknown path
-   Loading component while loading pages
-   Modal component to show feedback and error messages

###

## RegisterPage

### Show data

-   Form component with inputs:
    -   Username
    -   Password
    -   Email
    -   Picture
-   Button component with “Register” text
-   Link to loginPage

### Receive interactions

-   Submit form on click
-   Navigate to loginPage on click

## LoginPage

### Show data

-   Form component with inputs:
    -   Username
    -   Password
-   Button component with “login” text
-   Link to RegisterPage

### Receive interactions

-   Submit form on click
-   Navigate ro RegisterPage on click

## HomePage

### Show data

-   Heading level 2 with text “Users list”
-   filterList component
-   usersList component

## UsersList

### Show data

-   A userCard component for each user in the list

## FilterList

### Show data

-   Label with “Show friends/enemies”
-   Input select element with 3 options:
    -   All users
    -   friends
    -   enemies

### Receive interactions

-   Change the source of data on component UsersList depending on input selection

## UserCard

### Show data

-   Username
-   picture
-   Radio button with 3 options:
    -   Unknown
    -   Friend
    -   Enemy

### Receive interactions

-   Toggle relationship status on selection

## NotFoundPage

### Show data

-   Heading level 1 component with text “404 not found page”
-   Link to LoginPage or Homepage

### Receive interactions

-   Navigate to LoginPage or HomePage on click

## Modal

### Show data

-   Text with success or error feedback
-   Button component with “close” text

### Receive interactions

-   Close modal on click

## Loading

### Show data

-   Loading animation

## FormPage

### Show data

-   Input text for email
-   Input text for picture
-   Button component with text “Edit profile”

### Receive interactions

-   Submit form on click

## Header

### Show data

-   Heading level 1 with the application title
-   Navigation component
    -   Edit profile
    -   Remove profile
    -   Log in / Log out

### Receive interactions

-   Navigate on click
