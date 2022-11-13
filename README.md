# Shil.me Front-end Engineer Take-home Project (2022)

👋 Hey there! Congrats for making it this far, that means we really liked you and thought you would make a great addition for our amazing team. This project is designed to see if your frontend abilities are complementary to ours, by putting you through three tasks similar to what you will face day to day at Shil.me.

## What We're Looking For

- **Independence / Autonomy:** We value all of our team members taking initiative and working with minimal management and deadlines.
- **Resourcefulness:** When faced with a problem, we want to see your process in solving it, even if you don't end up being able to solve it.
- **Obsession:** Everyone in the Shil.me Team is striving for perfection. There's a way to finish all of these tasks in a minimal way, and a way to ✨finish✨ these tasks in a way that's over and beyond. We wanna see that special something.

## Tasks
The project consists of two tasks of intermediate difficulty.

### Task 1: Programmatic component creation [FRONT-END, INTERMEDIATE]
⚡️ !sudo make ui

**Task**
Make a general component which takes in a `config` and builds a UI based on that config. The idea here is we want to create a component that can be used for various scenarios/configurations. In the example config below, we are creating a UI for a user to mint NFTs. Given this config, the component should be able to account for different titles, descriptions, styles, sub-components, etc.

**Flow**
1. Task1.js takes a configuration as props such as:

```
   {
      title: "Mint NFT",
      description: "Select how many NFTs from the collection you’d like to mint.",
      style: {
         backgroundColor: '#F2F2F2',
         color: 'black'
      },
      components: [
         {
            type: "input-number",
            placeholder: 42,
            title: "Number of NFTs",
            description: null
         },
         {
            type: 'button',
            title: 'Mint!',
            style: {
               backgroundColor: 'green',
               color: 'white'
            },
            callback: () => {
               console.log("button from Builder2 pressed!")
            }
         }
      ]
   }
```

2. Task1.js creates a Builder component and passes in the configuration.
3. The Builder component goes through the config and build the element using components from /builder-components.
4. Builder component keeps a state of the values of all the sub-components

**Implementation**
Please implement the folders `/builder` and files `Task1.js` and `task-1.js`.

### Task 2: Create a protected REST API [EASY]
⚡️ Full throttle.

**Task**
Create a rate-throttled, protected REST API for accessing data which requires an API key.

**Requirements**
- A NodeJS endpoint which filters and returns results from a custom data source (Firebase). (IMPORTANT: PLEASE PROVIDE AN EMAIL ADDRESS TO gokhan@shil.me TO HAVE ACCESS TO THE FIREBASE)
- A rate throttle such that no more than 100 calls can be made every 5 minutes per API key.
- A data source to access how many request are made per 5 minutes per API key.
- A programmatic way to generate new API keys.
- Deploy to Heroku (or any other platform you want).
- The API key check needs to be up to common standards (Google “how to create a protected REST API”).

**API Endpoints**
- `/task-2-api/retrievePostsBySlug`: Return all Twitter, Discord or Twitter-and-Discord posts all specified slugs within a date interval.
   - Query parameters
      - `slug ([string])`: An array of all `slug` strings to retrieve for.
      - `platform (string, default=twitter-and-discord)`: A string defining which posts to return for the specified slugs.
         - `twitter`: Only Twitter posts
         - `discord`: Only Discord posts
         - `twitter-and-discord`: Both Twitter and Discord posts
      - `date-start (date, default=1/1/1970)`: The date to start filtering out posts.
      - `date-end (date, default=now)`: The date to end filtering out posts.
      - `limit (integer, default=15)`: Number of returned items.
      - `offset (integer, default=0)`: Index of result to start returning.
   - Returns
      - `posts ([post-object])`: An array of `post` objects returned from database.
      
- `/task-2-api/retrieveSocialEngagementBySlug`:  
   - Query parameters
      - `slug ([string])`: An array of all `slug` strings to retrieve for.
      - `platform (string, default=twitter-and-discord)`: A string defining which engagements to return for the specified slugs.
         - `twitter`: Only Twitter engagements
         - `discord`: Only Discord engagements
         - `twitter-and-discord`: Both Twitter and Discord engagements
      - `date-start (date, default=1/1/1970)`: The date to start filtering out engagements.
      - `date-end (date, default=now)`: The date to end filtering out engagements.
      - `limit (integer, default=15)`: Number of returned items.
      - `offset (integer, default=0)`: Index of result to start returning.
   - Returns
      - `posts (dict)`: An dictionary with `slug`s as the keys and `{"twitter-engagement": [integer], "discord-engagement": [integer]}` as values.

**Calling the API**
The API needs to be callable by:
`curl --header "X-API-KEY: <API_KEY>" --request GET -i --url '<HOST_URL>/task-2-api/<API_ENDPOINT>?<QUERY_KEY_1>=<QUERY_VALUE_1>&<QUERY_KEY_2>=<QUERY_VALUE_2>...'`

**Implementation**
Please implement the API endpoint at `/api/task-2-api.js` or using any other NodeJS server file (meaning the API does not need to be attached to this project). If you choose to implement the bonus front-end for requesting new API keys, please implement this on the file `task-2.js`.