# Book Recommendations (Team Lavendar)

## Overview

Book Recommendations is an SPA that allows users to enter/update book recommendations.  The app will organize the listing of recommendations based on the data in the events and user choices.

## Purpose

The team project is intended to give experience:
* sharing a code base with other coders
* sharing responsibilities with other coders
* prioritizing and tracking issues (bugs and feature requests)
* dealing with changes in requirements

## Minimum Functional Requirements

The page will allow the entry of a book recommendation
* A book has a single-line title
* A book has a genre from a list of the teams choice
* A book has an author
* The team may elect to have any of the above fields as optional, but the page must allow the above and must use the above when entered
* The team may decide to have more fields on a book than these
* The team must have these concepts, but does not have to show these labels to the user

The page will display all books, or books for a genre
* The team may choose to have additional filters to view books

The page will allow the user to the displayed books sorted by upvotes
* The team may choose to have additional ways to order the books

The page will allow a user to vote for a recommendation _once_. 
* When the page is reloaded the user is considered a new user and can again vote for books
* When the page is reloaded any previous votes for a book are NOT lost
* The user can tell which books they have voted for since they last reloaded

The page will allow a user to edit the title, author, or genre of a book
* The team may choose to allow other fields to be edited
* The team may choose to allow a book to be deleted
* The team may choose the process a user takes to modify these fields
    * Example: a separate edit screen vs editing in-place on the main display

The page will assume it is being used by a single user
* No login
* This is one of the few restrictions on what you can add

The page will not have persistence beyond the service life
* i.e. I can load the page and add data repeated
* If I reload the page, the data entered is still displayed
* If the service(s) restart, the data is lost
* This is one of the few restrictions on what you can add

The page appearance
* Will have an attractive and intuitive UI
    * This is subjective so avoid ugly, avoid confusing
* Will display fine on a non-widescreen monitor
* Will display fine on a widescreen monitor
* Will display fine if the browser isn't full-screen
* Is not required to work for very small browser windows
* Is not required to work for mobile displays
* The team may choose support additional viewport sizes
* The team may choose to rearrange the layout based on viewport size


## Technical Requirements

The page will be a Single Page Application
* Meaning the user loads one HTML file and no additional page reload is required

The page will work in the latest Chrome
* The team may elect to have it work in other modern browsers

The page will be written using plain HTML/JS/CSS
* **Not** React (yet)
* Webservice code in NodeJS
* Webserver code in NodeJS
* No outside JS libraries 
    * Browserify may be used to bundle multiple JS files
    * Browserify usage must include source maps
    * Polyfills of JS standards, if needed, may use code from an external source 
* No outside CSS libraries (yet)

The project repository will follow common conventions.  In particular:
* The project can be full installed by cloning the repo and running `npm install` 
* The repo does not contain improper files, such as node_modules or IDE/OS-specific files

The project will use file structure practice required for this class.  In particular:
* lowercase filenames, except for JS files that represent classes
* .html, .js, and .css file extensions
* Project files not intended to be served are not available to web users
    * e.g. I cannot visit your webserver and see your package.json
* The project will use package.json 
* The team may decide what additional directories, if any, they want for their served files

The page will use HTML best practices as outlined in class and assignments.  In particular but not limited to:
* Use HTML tags in a semantic fashion (choice of tags, grouping of content)
* Indent when going to a newline inside a tag
    * html and body tags are not required to cause an indent
* Use kebab-case class attributes
* Avoid inline JS
* Avoid inline CSS
* Declare DOCTYPE html
* Do not use table tags for layout
* Do not use tags for layout due to the browser default rendering
    * Example: This means don't use `<p>` tags to line things up
* Do not use non-breaking spaces (nbsp) to create space
* Do not use `<br>` tags to create space
   
The page will use CSS best practices as outlined in class and assignments.  In particular but not limited to:
* kebab-case css class names
* indented rules 
* class names reflect what the class content represents, not how it should be displayed
    * e.g. `task-title` is fine, `red-bold` is incorrect
* Do not use the float property to create layout
* Avoid hacks
* Avoid browser-specific prefixes
* Do not create styling that contradicts web conventions
    * e.g. creating something that looks like a button is fine
    * e.g. having blue underlined text that is not a link is incorrect
    * e.g. Clickable items should have the appropriate mouse icon (cursor property)
* Avoid over-specifying CSS selectors
* Avoid dramatic style changes to entire tags
    * It's fine to have a rule for a tag that just sets the specifics without violating expectations
    * e.g. specifying the bottom margin for all `p` tags is fine
    * e.g. specifying that all `ul` are now horizontal is incorrect

The page will use JS best practices as outlined in class and assignments.  In particular but not limited to:
* No pollution of the global namespace
    * Explicit settings of limited global variables is permitted to expose self-written libraries
* Never use `var`
    * If Browserify generates `var`, this is fine
* Use `const` when possible, `let` when necessary
* No unnecessary String(), Object(), Array() etc uses
* Use whitespace to improve clarity
* Make your code skimmable as well as readable
* Use meaningful and helpful variable names and function names
* Use small functions
* Follow the Principle of Least Knowledge
* Use modern ES6 conventions
* Use fetch() instead of XHR or an external library

The JS is not required to have unit tests
* But it is not a bad idea

The page will communicate with at least one webservice written by the team
* The team may use additional services they write
* The services have no required paradigm (REST, GraphQL, whatever)
    * GET requests must be idempotent, however
