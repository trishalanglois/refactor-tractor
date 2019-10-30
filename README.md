# FitLit

### Overview

FitLit is meant to help you track your historical health in 3 main categories; Activity, Hydration, and Sleep. You can
view, track, and see trends over all of time or more recently along with the some of the data of your friends.
### How To Use

- Once you are on the splash page of the site you can enter your user ID and then be signed in and taken to the homepage where you will see a panel style layout. The first section under the title will list your account information and the current date.
<img width="1435" alt="Screen Shot 2019-10-29 at 3 38 17 PM" src="https://user-images.githubusercontent.com/47998896/67820114-9047ee80-fa7d-11e9-8369-b18f2be9a6de.png">

- Just below that you will see the form section where you can submit your data for the day by choosing one of the three tabs and submitting the form that appears.
<img width="523" alt="Screen Shot 2019-10-29 at 3 39 32 PM" src="https://user-images.githubusercontent.com/47998896/67820125-9a69ed00-fa7d-11e9-92c8-3756b767ec48.png">

- The Steps section will show you:
    1. If you have hit your step goal for today and a chart comparing your step goal vs. the average step goal amongst all users. You can hover over each section of the chart to display specific numbers for each.
    2. A ranking of you and your friends based on who has the most steps in the last week.
    3. Your total positive and negative step trends since you joined. A step trend is defined as any set of three consecutive days where your step count goes up each day or down each day when compared to the previous day.
<img width="1384" alt="Screen Shot 2019-10-29 at 3 40 43 PM" src="https://user-images.githubusercontent.com/47998896/67820137-a5248200-fa7d-11e9-853d-fbcb11fefc70.png">

- The Hydration section will show you:
    1. How many ounces of water you drank today.
    2. A bar graph showing your water consumption (oz.) for each day in the previous week.
<img width="1383" alt="Screen Shot 2019-10-29 at 3 48 24 PM" src="https://user-images.githubusercontent.com/47998896/67820185-db620180-fa7d-11e9-9eaa-b54c26447b9a.png">

- The Sleep section will show you:
    1. The amount of sleep you got last night and your average for the week.
    2. A chart showing your sleep quality and amount for each day over the past week.
    3. Your all time daily average for hours slept and sleep quality and your sleep ranking for the week.
<img width="1382" alt="Screen Shot 2019-10-29 at 3 50 30 PM" src="https://user-images.githubusercontent.com/47998896/67820196-e6b52d00-fa7d-11e9-808f-ab52a136bcad.png">

- The Activity section will show you:
    1. Activity today (steps, minutes active, and distance walked in miles and kilometers).
    2. How much over or under the average you are vs. all users in steps, minutes active, and flights of stairs for the day.
    3. You activity per day over the past week.
<img width="1385" alt="Screen Shot 2019-10-29 at 3 57 29 PM" src="https://user-images.githubusercontent.com/47998896/67820204-ee74d180-fa7d-11e9-909e-172f94e59fea.png">

### Setup

- To run locally:
    1. Clone and/or fork the repo.
    2. Run `npm install`.
    3. To launch, `npm run start` or `npm start` and copy the provided `localhost` url into your browser.

### Known Bugs/Issues

  - When adding data in one of the forms on the main page an error message will display if you try to submit the form without filling out all of the fields. This error message will not go away until the missing fields are filled out **and** the form is submitted. The error should go away when all inputs are filled out but before the form is submitted.

  - If a form element on the main page is highlighted because it was not filled out, entering an invalid character will cause the error highlighting to disappear. This should only happen if the input is valid.

  - This app is not fully optimized for smaller screen sizes and you may experience issues when viewing on a smaller screen or window.

  - A future iteration to make our charts even more readable by someone who has color blindness would be to add a pattern to each individual part of the graph. At this point, the charts are readable by people who have color blindness, but we want to make the visual look even more differentiated.

#### Contributors

  - @trishalanglois
  - @allisonjw
  - @cammac60
  - Comp/Setup created by @turingschool
