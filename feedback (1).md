# Checklist for NC Games Front End

## README - write your own and make sure that it:

-   [ ] has a link to the deployed version
-   [ ] provides general info about your app
-   [ ] includes links to your back end repo
-   [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
-   [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

-   [ ] Basic styling added
-   [ ] Responsive design
-   [ ] Items aligned
-   [ ] Content legible (not too wide, obstructed, etc)
-   [ ] Refreshing doesn’t cause an issue on sub-pages - please check on hosted version as well
-   [ ] No errors in the console
-   [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

-   [ ] Some indication of who is logged in (this can be hardcoded)
    -   i would like to see who i am signed up, just the username, at the top next to Progile link

### Reviews

-   [x] Serves all reviews / top reviews
-   [x] Can vote on reviews
-   [x] Can vote a maximum of once in either direction per page load
-   [x] Votes are persistent when page is refreshed
-   [x] Reviews by category pages load only relevant reviews (especially when navigating from one category page to another)
-   [x] Can sort reviews by date created / comment_count / votes

### Individual Review / Comments

-   [x] Individual reviews are served with comments
-   [x] Can vote on comments
-   [x] Can vote a maximum of once in either direction per page load
-   [x] Votes are persistent when page is refreshed
-   [x] Can post new comments, which are persistent

## Error Handling

-   [x] Bad url
-   [ ] Bad category slug in url
-   [x] Bad review_id in url
-   [ ] Post comment: (No text in comment body / Can you post without logging in?)
-   [x] when on a category link, individual reviews say they arent found, but when you grab them from all reviews page they link correctly to `/review/:id` - fix the links to go to correct place when viewing a category

## Code

-   api.js - how cat you unite getAllReviews and getQueriedReview functions? they do the same thing.
-   likewise for patchReviewVotes and patchCommentVote - create a reusable voting componentwhich invokes one api function able to differentiate between Reviews and Comments
-   handleQuery.js - some tests would look great here too!
-   DeleteComment.jsx is empty
-   you can handle OwnComment and OtherComment in the same comment component - you can render the delete button if the author's username matches the person currently logged in conditionally. Same for the paragraph stating 'you made this comment'
-   PostComment - start off body as "" - you are changing it to that once a comment has been posted, so starting value should match the datatype.
-   use button tags instead of inputs when you require a submit button
-   SortBy.jsx - why are you doing direct DOM manipulation? you can have the drop down as JSX and have an onChange react event to handle that functionality.

-   [x] Well named components
-   [ ] Components reused where possible (`Reviews` / `Voter`...)
-   [x] Minimal state - don't hold derivable data in state
-   [x] Set state correctly, using previous state where possible
-   [x] Handle asynchronicity clearly (i.e. isLoading pattern)
-   [x] Functions are DRY (`handleChange` for controlled components / api calls)
-   [x] Use object destructuring where possible
-   [x] Tidy? If not: ESLint / Prettier
-   [x] `node_modules` git ignored
-   [ ] No `console.log`s / comments
-   [ ] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

### Additional functionality:

-   [x] Can only delete comments of logged in user
-   [x] Deleted comments don’t re-appear on re-render/refresh
-   [x] sort comments by date created / votes
-   [ ] navigate over pages of reviews (if implemented in back-end)
-   [ ] navigate over pages of comments (if implemented in back-end)
-   [ ] filter / display reviews by specific user
-   [ ] post new review
-   [ ] delete logged in user's reviews

## Once everything else is complete, here are some extra challenges:

-   [ ] Use `aXe` extension to check for a11y issues
-   [ ] Make sure any pure functions are extracted and tested with `Jest`
-   [ ] Use Context API for sharing logged in user amongst components
-   [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
-   [ ] Create a view for all the reviews a user has liked. This will require additional functionality on your backend
-   [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent reviews e.g. last 10 minutes
