#  myAlpaca

- [Overview](#Overview)
  - [Team Members](#Team-Members)
  - [Team Expectations](#Team-Expectations)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Goals](#Goals)
  - [Schema](#Schema)
  - [Libraries](#Libraries)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Hierarchy](#Data-Hierarchy)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

### Team Members

Created, designed, and developed by [Misbah Ali](https://github.com/maliccny), [Jason Kang](https://github.com/kangja), and [Zulay Scottborgh](https://github.com/zulays) (Git Czar) for the General Assembly Software Engineering Immersive (July ’20 Cohort) Unit 3 Group Project.

### Team Expectations

Team values and expectations can be found on our project's [Group Expectation Setting Document](https://git.generalassemb.ly/sei-nyc-constellations/class-info/blob/master/projects/template_group-expectation-setting.md).

### Permissions

Digital assets used with full licensing and permission from  [Unsplash]().

<br>

## MVP


_The **myAlpaca** is an app that will give students who are studying abroad an easy way to maneuver their new environment. The app will allow users to register for an account and create profiles that include  the  parameters of their choice such as their area of studies, interests, hobbies, and priorities._

<br>

### Goals

- _Create a NoSQL database with MongoDB, to host all user information._
- _Create CRUD functionality for creating, updating, reading and deleting user on the backend_
- _Use  the React framework to imprement front end CRUD functionality from registering a user, updating information and deactivating/deleting an account_
- _Deploying the app to Netlify or other similar services_

<br>

### Schema
``` 
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    from_location: {type: String},
    to_location: {type: String},
    education: {type: String},
    area_of_study: {type: Array},
    interests: {type: Array},
    hobbies: {type: Array},
    assistance: {type: Array},
    priorities: {type: Array}
      },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)
```

<br>

### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Powers the application functionality/environment_ |
|   React Router   | _Allows application to be navigable without having to refresh the page._ |
| MongoDB | _A document-oriented NoSQL database used for high volume data storage._ |
|     Express      | _A Node.js web application server framework, designed for building multi-page web applications_ |
|  Express Router  | _Express router is a class which helps us to create router handlers_ |

<br>

### Client (Front End)

#### Wireframes

[myAlpaca Wireframe + Style Guide](https://scene.zeplin.io/project/5ef5492ccbfa90a42c493b76)

- Desktop Layout for Home Page, Register User, Build Profile, Delete Profile

#### Component Hierarchy


``` structure
####front end
src
|__ components/
      |__ shared/
            |__ Footer/
                  |__ Footer.jsx
                  |__ Footer.css     
            |__ Header/
                  |__ Header.jsx
                  |__ Header.css  
|__ screens/
      |__ RegisterPage/
            |__ RegisterPage.jsx
            |__ RegisterPage.css
      |__ UserCreate/
            |__ UserCreate.jsx
            |__ UserCreate.css
      |__ UserEdit/
            |__ UserEdit.jsx
            |__ UserEdit.css
      |__ UserDelete/
            |__ UserDelete.jsx
            |__ UserDelete.css
      |__ Home/
|__ services/
      |__ apiConfig.jsx
      |__ users.jsx
|__ utils/
|__ App.js
|__ index.js

####backend
|__ components/
    |__ users.js
|__ db/
    |__ connection.js
|__ models/
    |__ user.js
|__ routes/
    |__ users.js
|__ seed/
    |__ users.js
|__ .gitignore
|__ package.json
|__ server.js

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[Whimsical Diagram](https://res.cloudinary.com/zumariposa/image/upload/v1594916674/Screen_Shot_2020-07-16_at_11.23.44_AM_z0djat.png)

#### Data Hierarchy

``` structure
controllers
|__ users.js
|
db
|__ connection.js
|
models
|__ user.js
|
routes
|__ users.js
|
seed
|__ users.js
|
.gitignore
package.json
server.js
```

<br>

***

## Post-MVP

The goals for this project post-MVP are as follows:
* Homepage build-out
* Log In Page?
* Restaurant Page
* Search Bar functionality

***
