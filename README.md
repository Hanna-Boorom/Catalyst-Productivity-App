## Catalyst Productivity

## Project Description

Catalyst Productivity is your to-do list reimagined. From the homepage, the user is able to keep track of current tasks/to-dos. Add new tasks as they arise and cross items off the list when you complete them. Beautiful pictures and inspiring quotes help keep you on track and motivated. Catalyst is a React app utilizing an Airtable API and is my version of Momentum, the popular Chrome extension.

## Wireframes

**Desktop View Wireframe:** https://imgur.com/a/doKRaiO
This app is desktop-first, but will be fully-responsive. The background will be a high quality, beautiful image. The user will be greeted differently depending on the time of day (good morning, good afternoon, good evening) and asked to input their name. A clock will show the current time in 12 hour display. The user will be able to add tasks to do and check them off as they accomplish them.
This is the wireframe for the form link where users will be able to add their own tasks - desktop view: https://imgur.com/a/BJpJxKM

**Tablet View Wireframe:** https://imgur.com/a/1KI2WmS
The tablet view will be very similar to the desktop view except that the width will be more narrow. The user may see the tasks wrap to multiple lines depending on how long the task is.
Form link wireframe for tablet view: https://imgur.com/a/OUVWXT2

**Smartphone View Wireframe:** https://imgur.com/LTKzyhx
The smartphone view will be much slimmer and shorter so the clock, greeting, and quote will shrink to fit the screen better. The user will probably also see the task text wrap to multiple lines depending on how long the task is.
form link wireframe for smartphone view: https://imgur.com/a/YIoDYDM

## Component Hierarchy

See my Component Hierarchy here: https://imgur.com/a/AMTy8Pd

## API and Data Sample

```json
{
  "records": [
    {
      "id": "recP31YVSLNB4eoZe",
      "fields": {
        "title": "Crush Goals!",
        "isCompleted": "false"
      },
      "createdTime": "2021-02-15T20:45:13.000Z"
    },
    {
      "id": "recMuEX9dizvwF6OE",
      "fields": {
        "title": "Have an awesome day",
        "isCompleted": "false"
      },
      "createdTime": "2021-02-15T20:45:13.000Z"
    }
  ],
  "offset": "recMuEX9dizvwF6OE"
}
```

### MVP/PostMVP

#### MVP

- Homepage displays the default tasks from Airtable
- User can use a form to add and/or delete tasks
- Clock accurately displays user's current time
- User can input their name and it will accurately show on page

#### PostMVP

- Utilize OpenWeather API to add local weather
- Display a different quote each time a user uses the page
- Toggle messages/greetings the user will see

## Project Schedule

| Day       | Deliverable                                      | Status     |
| --------- | ------------------------------------------------ | ---------- |
| Feb 16    | Project Proposal & Approval                      | Complete   |
| Feb 17    | Component Creation/ Route Setup                  | Complete   |
| Feb 17    | Get, Set, & Delete Data & Basic Homepage Styling | Complete   |
| Feb 19    | Component Styling & MVP                          | Incomplete |
| Feb 20-22 | Advanced CSS Styling & Post MVP                  | Incomplete |
| Feb 23    | Presentations                                    | Incomplete |

## Timeframes

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                |    H     |      2hrs      |      1hr      |     1hr     |
| Component Outline       |    H     |      2hrs      |      1hr      |     1hr     |
| Route Setup             |    H     |      1hrs      |     30min     |    30min    |
| Connect Airtable        |    H     |      2hrs      |      1hr      |     1hr     |
| Clock Comp Setup        |    H     |      2hrs      |      1hr      |     1hr     |
| UserGreeting Comp Setup |    H     |      3hrs      |      2hr      |     2hr     |
| Form Comp Setup         |    H     |      3hrs      |      2hr      |     2hr     |
| Form Add Task           |    H     |      2hrs      |      2hr      |     2hr     |
| Form Delete Task        |    H     |      2hrs      |      1hr      |     1hr     |
| Footer Comp Setup       |    L     |      1hrs      |       -       |      -      |
| Quote Comp Setup        |    H     |      2hrs      |       -       |      -      |
| Basic Homepage Styling  |    H     |      2hrs      |       -       |      -      |
| Basic Component Styling |    H     |      3hrs      |       -       |      -      |
| Advanced CSS            |    H     |      4hrs      |       -       |      -      |
| Total                   |    H     |     31hrs      |       -       |      -      |

## SWOT Analysis

### Strengths:

I know what I want my application to look like and think a solid plan will help me reach MVP in good time. I am pretty confident with my styling abilities and tend to enjoy it greatly. I feel that last week especially prepared me for this assignment and I'm confident in my ability to apply the concepts we've learned. I'm excited and eager to get started!

### Weaknesses:

Using params and routes/links has been a little confusing to wrap my head around at some points during this unit. I'll likely need a bit of a recap on some of the earlier concepts to make sure I understand them correctly.

### Opportunities:

At first, working with React was a little uncomfortable. At the end of Unit 1, I was just getting comfortable with vanilla JavaScript and then we were introduced to React. Over the course of the 2 weeks, however, I've grown to thoroughly enjoy using React! It's easy to see how it can be scalable and I really like using functional components. This project is an opportunity for me to show all that I've learned in the past couple weeks and make a functional and beautiful app.

### Threats:

It's sometimes difficult for me to accurately gauge how long certain tasks will take me. Sometimes I overestimate and other times I underestimate. I think I will improve with time, but it's something I'll need to be aware of during this project. Without the structure of class - with regular breaks - I also tend to power through tasks and can end up going too long without a break. I'll also have to be mindful of this and will try my best to set timers so I can take regular breaks and not get burned out.
