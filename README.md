# Life Hacker

![Project Image](https://github.com/SusieCodes/lifehacker/blob/main/src/images/lifehackerdashboard.png)

> The Ultimate Life Planner to track and organize all of life's details including:

- Connections (sort by favorites, bdays, or recent)
- Activities sorted by:
  • personal
  • family
  • work
  • community
  • school
- To-Do List
- Grocery List (digital & printable)
- Digital Sticky Notes
- Journal
- Service Providers
- Recommendations sorted by:
  • movies
  • tv shows
  • books
  • podcasts
  • activities
  • restaurants
  • providers
  • other
- Wishlist (digital & printable)

---

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Life Hacker is a React App I built to track my activities, journal entries, grocery list, digital sticky notes, to-do list, service providers, recommendations, and a wishlist. My app centers around a robust contact list that lets me keep track of important information about the people I care about so I'll never forget significant dates and information. Different shades of blue were used throughout the site to instill a feeling of calm, trust, and serenity while using this web-based app.

---

#### Technologies

- React.js
- CSS
- dbdiagram
- Figma
- Canva
- Git/Github
- Postman

---

## How To Use

### Installations

Run commands inside of LifeHacker Directory.

```
npm install
```

---

### Starting the webpage

1. Clone the repo

   ```
   git clone git@github.com:SusieCodes/lifehacker.git
   ```

2. Run this command inside of the Life Hacker API directory

   ```
   json-server -p 8088 -w database.json
   ```

   ```
   npm start
   ```

3. To login, use email address 'taylor@email.com' to see full functionality using dummy data from the database OR register as a new user to create all your own content

---

### Local API using JSON server

Create database.json file inside of the src directory and paste the following JSON.

```JSON
{
  "users": [
    {
      "id": 1,
      "name": "Susie Stanley",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1636436400/susie2_vzbbqq.png",
      "email": "me@me.com",
      "phone": "615-400-5555",
      "address": "301 Plus Park Blvd",
      "city": "Nashville",
      "stateProvince": "TN",
      "zipCode": "37217",
      "country": "USA",
      "bday": "1984-01-01",
      "timestamp": 1636443563791
    },
    {
      "name": "Taylor",
      "email": "taylor@email.com",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635608386/taylor_c9zfvb.png",
      "phone": "425-555-1212",
      "address": "123 Othello Dr",
      "city": "Anytown",
      "stateProvince": "TN",
      "zipCode": "91514",
      "country": "USA",
      "bday": "1986-05-05",
      "timestamp": 1635611882958,
      "id": 2
    }
  ],
  "connections": [
    {
      "id": 1,
      "userId": 1,
      "name": "Helen Stanley",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635558439/helen_nccuaj.png",
      "email": "helen@email.com",
      "phone": "604-555-1212",
      "address": "1234 Whalley Blvd",
      "city": "Surrey",
      "stateProvince": "BC",
      "zipCode": "V3C 4X4",
      "country": "Canada",
      "work": "Costco",
      "relationship": "Sister",
      "bday": "1976-12-01",
      "family": "Spouse: Jack, Daughter: Olivia",
      "pets": "Dog: JoJo (Bday Oct 1)",
      "howWeMet": "When she was born",
      "giftIdeas": "Gloves or nutribullet",
      "faveDrink": "White wine - Moscato",
      "faveDessert": "Tiramisu",
      "notes": "She is looking for a remote customer service job, keep an eye out for open positions",
      "zodiac": "Sagittarius",
      "personality": "INFP",
      "enneagram": "6",
      "isFave": true,
      "timestamp": 1636436711830
    },
    {
      "id": 2,
      "userId": 1,
      "name": "Ruth Jones",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635561557/ruth_uzc42l.png",
      "email": "ruth@email.com",
      "phone": "604-555-1212",
      "address": "123 Columbia Valley Rd",
      "city": "New York City",
      "stateProvince": "NY",
      "zipCode": "10001",
      "country": "USA",
      "work": "Engineer",
      "relationship": "Friend",
      "bday": "1996-02-05",
      "family": "Spouse: Jim",
      "pets": "Dog: Jupiter (Bday is June 21)",
      "howWeMet": "Neighbors in NYC",
      "giftIdeas": "Games, books",
      "faveDrink": "Red wine - Shiraz",
      "faveDessert": "Cookies",
      "notes": "Doesn't like eating in restaurants",
      "zodiac": "Capricorn",
      "personality": "INFP",
      "enneagram": "5",
      "timestamp": 1635976546381,
      "isFave": false
    },
    {
      "id": 3,
      "userId": 1,
      "name": "Ashley Smith",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635555772/nyla_pwyqbs.png",
      "email": "ashley@email.com",
      "phone": "778-555-1212",
      "address": "123 Liberty Ave",
      "city": "Vancouver",
      "stateProvince": "BC",
      "zipCode": "V3C 4X3",
      "country": "Canada",
      "work": "Domestic Goddess",
      "relationship": "Friend",
      "bday": "1979-07-29",
      "family": "Spouse: Mike, Daughters: Emma & Sammy",
      "pets": "Dog: Ollie (Bday Nov 1)",
      "howWeMet": "Through Lisa",
      "giftIdeas": "Gerber daisies, peppermint schnapps",
      "faveDrink": "Red wine - Shiraz",
      "faveDessert": "Brownies",
      "notes": "Started new job in November",
      "zodiac": "Cancer",
      "personality": "INFP",
      "enneagram": "1",
      "isFave": true,
      "timestamp": 1635090847411
    },
    {
      "id": 4,
      "userId": 1,
      "name": "Nancy Matthews",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635557485/nancy_wfh93t.png",
      "email": "nancy@email.com",
      "phone": "604-555-1212",
      "address": "123 General Rd",
      "city": "Nashville",
      "stateProvince": "TN",
      "zipCode": "37064",
      "country": "USA",
      "work": "Healer",
      "relationship": "Friend",
      "bday": "1981-04-05",
      "family": "Spouse: Mason",
      "pets": "Dog: Twigge (Bday is June 15)",
      "howWeMet": "Neighbors in LV",
      "giftIdeas": "Incense, crystals",
      "faveDrink": "Apple juice",
      "faveDessert": "Cheesecake",
      "notes": "Makes awesome perogies",
      "zodiac": "Scorpio",
      "personality": "INFP",
      "enneagram": "4",
      "isFave": false,
      "timestamp": 1635959653225
    },
    {
      "userId": 1,
      "name": "Jennifer Smith",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635555498/jennifer_jnbkdh.png",
      "email": "jenn@email.com",
      "phone": "615-555-1212",
      "address": "123 Whalley Blvd",
      "city": "Surrey",
      "stateProvince": "BC",
      "zipCode": "T37 4M1",
      "country": "Canada",
      "work": "The Urban Chef",
      "relationship": "Co-Worker",
      "bday": "1989-01-01",
      "family": "Spouse: Jack",
      "pets": "Dog: Buddy (Bday Oct 3)",
      "howWeMet": "At work at Costco",
      "giftIdeas": "Kitchenware, chocolate",
      "faveDrink": "Iced Tea",
      "faveDessert": "Bananas Foster",
      "notes": "Likes deluxe nuts before dinner",
      "zodiac": "Virgo",
      "personality": "INFP",
      "enneagram": "5",
      "isFave": false,
      "timestamp": 1635090847411,
      "id": 5
    },
    {
      "id": 6,
      "userId": 1,
      "name": "Aunty Becky",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635557380/becky_eeragz.png",
      "email": "becky@email.com",
      "phone": "615-555-1212",
      "address": "123 Old Town Rd",
      "city": "Vancouver",
      "stateProvince": "BC",
      "zipCode": "V3C 2X4",
      "country": "Canada",
      "work": "Domestic Engineer",
      "relationship": "Friend",
      "bday": "1976-10-17",
      "family": "Spouse: Tim, Daughters: Kylie & Lyla",
      "pets": "Dog: Odie (Bday Jan 5)",
      "howWeMet": "Book Club",
      "giftIdeas": "Candles, craft supplies",
      "faveDrink": "Chocolate milk",
      "faveDessert": "Chocolate cupcakes",
      "notes": "Likes to bring snacks",
      "zodiac": "Libra",
      "personality": "INFP",
      "enneagram": "8",
      "isFave": false,
      "timestamp": 1636492739980
    },
    {
      "userId": 1,
      "name": "Diana Spencer",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635558854/diana_etucym.png",
      "email": "diana@email.com",
      "phone": "818-555-1212",
      "address": "123 Mayberry Rd",
      "city": "New York City",
      "stateProvince": "NY",
      "zipCode": "10001",
      "country": "USA",
      "work": "Architect",
      "relationship": "Friend",
      "bday": "1994-01-28",
      "family": "Spouse: Mark",
      "pets": "Cat: Chaos (Bday March 21)",
      "howWeMet": "Neighbors in CA",
      "giftIdeas": "Games, books",
      "faveDrink": "Apple juice",
      "faveDessert": "Cookies",
      "notes": "Allergic to seafood",
      "zodiac": "Capricorn",
      "personality": "ENSP",
      "enneagram": "5",
      "isFave": false,
      "timestamp": 1635090847411,
      "id": 7
    },
    {
      "id": 8,
      "userId": 1,
      "name": "Mary Johnson",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635561567/mary_eqnxwb.png",
      "email": "mary@email.com",
      "phone": "405-555-1212",
      "address": "123 George Blvd",
      "city": "Burnaby",
      "stateProvince": "BC",
      "zipCode": "V3C 4X6",
      "country": "Canada",
      "work": "Manager at Home Depot",
      "relationship": "Friend",
      "bday": "1988-06-01",
      "family": "Spouse: Jason, Son: Jack",
      "pets": "Dog: Bubba (Bday Feb 1)",
      "howWeMet": "Volunteering at the shelter",
      "giftIdeas": "Puzzles, art supplies",
      "faveDrink": "White wine - Pinot Grigio",
      "faveDessert": "Baked Alaska",
      "notes": "Doesnt like to drive at night",
      "zodiac": "Scorpio",
      "personality": "ENFP",
      "enneagram": "2",
      "isFave": true,
      "timestamp": 1636393595206
    },
    {
      "userId": 1,
      "name": "Priscilla Jenkins",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635561557/priscilla_age1hf.png",
      "email": "priscilla@email.com",
      "phone": "480-555-1212",
      "address": "123 Liverpool Ave",
      "city": "Port Coquitlam",
      "stateProvince": "BC",
      "zipCode": "37067",
      "country": "Canada",
      "work": "Domestic Goddess",
      "relationship": "Friend",
      "bday": "1993-07-31",
      "family": "Spouse: Mike, Daughters: Sophie & Lucy",
      "pets": "Cat: Ollie (Bday May 21)",
      "howWeMet": " School",
      "giftIdeas": "Sewing supplies",
      "faveDrink": "Red wine - Shiraz",
      "faveDessert": "Brownies",
      "notes": "Gluten Free",
      "zodiac": "Cancer",
      "personality": "INTP",
      "enneagram": "3",
      "isFave": false,
      "timestamp": 1635090847411,
      "id": 9
    },
    {
      "id": 10,
      "userId": 1,
      "name": "Wendy Morris",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635548970/wendy_fampug.png",
      "email": "wendy@email.com",
      "phone": "615-555-1212",
      "address": "123 Holiday Rd",
      "city": "Lewisville",
      "stateProvince": "UT",
      "zipCode": "77094",
      "country": "USA",
      "work": "Production Manager",
      "relationship": "Cousin",
      "bday": "1954-11-05",
      "family": "Daughter: Mackenzie",
      "pets": "Cat: Lucy - bday is Aug 15",
      "howWeMet": "Neighbors in CA",
      "giftIdeas": "Gardening supplies",
      "faveDrink": "Orange juice",
      "faveDessert": "Cheesecake",
      "notes": "Diabetic - no sugar, has a great garden",
      "zodiac": "Aries",
      "personality": "INTJ",
      "enneagram": "7",
      "isFave": false,
      "timestamp": 1635090847411
    },
    {
      "id": 11,
      "userId": 1,
      "name": "Lisa Jackson",
      "image": "https://res.cloudinary.com/dllowdq2w/image/upload/v1635555845/lisa_m6r8lq.png",
      "email": "lisa@email.com",
      "phone": "818-555-1212",
      "address": "123 Old Town Ave",
      "city": "San Francisco",
      "stateProvince": "CA",
      "zipCode": "90210",
      "country": "USA",
      "work": "Software Engineer",
      "relationship": "Friend",
      "bday": "1986-08-02",
      "family": "Spouse: Derek, Kids: Simon & Megan",
      "pets": "Bird: Mitzy - bday April 5",
      "howWeMet": "School",
      "giftIdeas": "Vintage records",
      "faveDrink": "Diet Coke",
      "faveDessert": "Chocolate cupcakes",
      "notes": "Collects spoons from global travel",
      "zodiac": "Taurus",
      "personality": "INFP",
      "enneagram": "1",
      "isFave": false,
      "timestamp": 1635090847411
    }
  ],
  "todos": [
    {
      "id": 1,
      "title": "Create capstone website",
      "byWhen": "2021-11-17",
      "isCompleted": false,
      "userId": 1
    },
    {
      "title": "Update My Resume",
      "byWhen": "2021-11-15",
      "isCompleted": false,
      "userId": 1,
      "id": 2
    },
    {
      "id": 3,
      "title": "Update LinkedIn",
      "byWhen": "2021-11-14",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 4,
      "title": "Drop-off donations",
      "byWhen": "2021-11-11",
      "isCompleted": true,
      "userId": 1
    },
    {
      "id": 5,
      "title": "Take package to USPS",
      "byWhen": "2021-11-11",
      "isCompleted": false,
      "userId": 1
    },
    {
      "title": "Clean out garage",
      "byWhen": "2021-11-08",
      "isCompleted": false,
      "userId": 1,
      "id": 6
    },
    {
      "id": 7,
      "title": "Do laundry",
      "byWhen": "2021-11-12",
      "isCompleted": true,
      "userId": 1
    },
    {
      "id": 8,
      "title": "Update budget",
      "byWhen": "2021-11-13",
      "isCompleted": false,
      "userId": 1
    },
    {
      "id": 9,
      "title": "Pay dentist bill",
      "byWhen": "2021-11-12",
      "isCompleted": false,
      "userId": 1
    },
    {
      "title": "Research Heroku",
      "byWhen": "2021-11-20",
      "isCompleted": false,
      "userId": 1,
      "id": 11
    },
    {
      "title": "Buy Daisies for Ashley",
      "byWhen": "2021-11-10",
      "isCompleted": false,
      "userId": 1,
      "id": 12
    },
    {
      "title": "Buy Helen bday gift",
      "byWhen": "2021-12-01",
      "isCompleted": false,
      "userId": 1,
      "id": 13
    }
  ],
  "activities": [
    {
      "name": "Doctor Appointment",
      "date": "2021-11-15",
      "time": "12:00",
      "address": "123 Maple St",
      "city": "San Jose, CA",
      "zipcode": "97029",
      "notes": "Bring test results",
      "tagId": 2,
      "userId": 1,
      "id": 1
    },
    {
      "name": "Book Club",
      "date": "2021-11-11",
      "time": "20:00",
      "address": "123 Jackson St",
      "city": "Brooklyn, NY",
      "zipcode": "10001",
      "notes": "Read 3 chapters",
      "tagId": 2,
      "userId": 1,
      "id": 2
    },
    {
      "id": 3,
      "name": "Volunteer At Mission",
      "date": "2021-12-11",
      "time": "13:00",
      "address": "639 Lafayette St",
      "city": "New York, NY",
      "zipcode": "17203",
      "notes": "Wear comfy shoes",
      "tagId": 4,
      "userId": 1
    },
    {
      "id": 4,
      "name": "Frank's Birthday",
      "date": "2021-09-11",
      "time": "12:00",
      "address": "123 Dutch Rd",
      "city": "San Diego, CA",
      "zipcode": "97715",
      "notes": "Post on FB",
      "tagId": 2,
      "userId": 1
    },
    {
      "name": "Hiking With Kids",
      "date": "2021-11-20",
      "time": "11:30",
      "address": "High Creek Falls",
      "city": "San Jose, CA",
      "zipcode": "37064",
      "notes": "Pack light",
      "tagId": 1,
      "userId": 1,
      "id": 6
    },
    {
      "id": 7,
      "name": "Dinner with Ashley",
      "date": "2021-11-10",
      "time": "18:15",
      "address": "823 Main Street",
      "city": "San Fran, CA",
      "zipcode": "96114",
      "notes": "Bring flowers",
      "tagId": 2,
      "userId": 1
    },
    {
      "id": 8,
      "name": "Parent Teacher Night",
      "date": "2021-11-13",
      "time": "18:00",
      "address": "Central High",
      "city": "Seattle, WA",
      "zipcode": "94126",
      "notes": "Bring paper/pen",
      "tagId": 1,
      "userId": 1
    },
    {
      "name": "Pearl Jam Concert",
      "date": "2021-11-25",
      "time": "21:00",
      "address": "123 Main St",
      "city": "Nashville, TN",
      "zipcode": "37064",
      "notes": "Bring earplugs",
      "tagId": 2,
      "userId": 1,
      "id": 10
    },
    {
      "name": "UX Design Interview",
      "date": "2021-11-27",
      "time": "15:00",
      "address": "123 Main St",
      "city": "Nashville, TN",
      "zipcode": "37064",
      "notes": "Have capstone ready to share on Zoom",
      "tagId": 3,
      "userId": 1,
      "id": 11
    },
    {
      "id": 12,
      "name": "Capstone Demo Day",
      "date": "2021-11-05",
      "time": "09:00",
      "address": "123 Main St",
      "city": "Nashville, TN",
      "zipcode": "37064",
      "notes": "Have capstone ready to share",
      "tagId": 5,
      "userId": 1
    },
    {
      "id": 13,
      "name": "Habitat 4 Humanity",
      "date": "2021-11-11",
      "time": "10:00",
      "address": "123 Main St",
      "city": "Nashville, TN",
      "zipcode": "37211",
      "notes": "Bring gloves/sunglasses",
      "tagId": 4,
      "userId": 1
    },
    {
      "id": 14,
      "name": "Thanksgiving",
      "date": "2021-11-25",
      "time": "15:00",
      "address": "456 Broadway St",
      "city": "Austin",
      "zipcode": "30210",
      "notes": "set for 3",
      "tagId": 1,
      "userId": 1
    },
    {
      "name": "Coffee with Emma",
      "date": "2021-11-14",
      "time": "11:00",
      "address": "301 Plus Park Blvd Ste ",
      "city": "Nashville",
      "zipcode": "37217",
      "notes": "Bring dish you borrowed",
      "tagId": 2,
      "userId": 1,
      "id": 15
    }
  ],
  "notes": [
    {
      "id": 1,
      "title": "Pull Trash Can In",
      "text": "Neighbors garage code is 1234",
      "dayTime": 1635871159757,
      "isFave": true,
      "userId": 1
    },
    {
      "title": "Wifi Password",
      "text": "YahRight1234",
      "dayTime": 1634354755599,
      "isFave": false,
      "userId": 1,
      "id": 2
    },
    {
      "title": "Favorite Pink",
      "text": "Hex Code #EED5D2",
      "dayTime": 1634354755599,
      "isFave": false,
      "userId": 1,
      "id": 3
    },
    {
      "title": "Screenshot By Selection",
      "text": "CMD + Shift + 4",
      "dayTime": 1635125849624,
      "isFave": false,
      "userId": 1,
      "id": 4
    },
    {
      "id": 5,
      "title": "CSS Rotate (from Colby)",
      "text": "transform: rotate(360deg);",
      "dayTime": 1635452124259,
      "isFave": false,
      "userId": 1
    },
    {
      "title": "Option + Delete (from Colin)",
      "text": "deletes whole word",
      "dayTime": 1635468153273,
      "isFave": false,
      "userId": 1,
      "id": 6
    },
    {
      "id": 7,
      "title": "TSA Pre ✔",
      "text": "My KTN number is 123456789",
      "dayTime": 1635515155785,
      "isFave": false,
      "userId": 1
    },
    {
      "id": 8,
      "title": "Report Spam",
      "text": "Forward to 7726 (SPAM)",
      "isFave": false,
      "dayTime": 1636441755133,
      "userId": 1
    },
    {
      "id": 10,
      "title": "Duplicate Line",
      "text": "Shift + ⌘ + Up/Down",
      "dayTime": 1636217803324,
      "isFave": false,
      "userId": 1
    }
  ],
  "journals": [
    {
      "title": "Creating Apps In React Is Super Interesting",
      "post": "My sister helped me come up with a brilliant idea for my capstone and I'm excited to write up my proposal",
      "dayTime": 1634274000000,
      "userId": 1,
      "id": 1
    },
    {
      "title": "Today Was A Great Day For Getting Stuff Done!",
      "post": "The sun was shining and my pup and I hung out on the back patio and soaked in the sun",
      "dayTime": 1633237200000,
      "userId": 1,
      "id": 2
    },
    {
      "title": "Life Is So Good!",
      "post": "Super stoked to get working on my project today... the next 2 weeks will be all grind baby!",
      "dayTime": 1634533200000,
      "userId": 1,
      "id": 3
    },
    {
      "title": "I Love CSS ♡",
      "post": "I've learned so much over the last 3 months of playing around with CSS. I love it because I can create anything I can visualize with just a few strokes of the keyboard... and many, many, hours!",
      "dayTime": 1636317001408,
      "userId": 1,
      "id": 4
    }
  ],
  "groceries": [
    {
      "text": "taco soft shells",
      "userId": 1,
      "id": 1
    },
    {
      "text": "guacamole",
      "userId": 1,
      "id": 2
    },
    {
      "text": "shredded cheese",
      "userId": 1,
      "id": 3
    },
    {
      "text": "ground beef",
      "userId": 1,
      "id": 4
    },
    {
      "text": "sour cream",
      "userId": 1,
      "id": 5
    },
    {
      "text": "queso",
      "userId": 1,
      "id": 6
    },
    {
      "text": "lettuce",
      "userId": 1,
      "id": 7
    },
    {
      "text": "tomatoes",
      "userId": 1,
      "id": 8
    },
    {
      "text": "seasoning",
      "userId": 1,
      "id": 9
    },
    {
      "text": "watermelon",
      "userId": 1,
      "id": 10
    },
    {
      "text": "mango",
      "userId": 1,
      "id": 11
    },
    {
      "text": "doritos",
      "userId": 1,
      "id": 12
    },
    {
      "text": "ice cream",
      "userId": 1,
      "id": 13
    },
    {
      "text": "lime",
      "userId": 1,
      "id": 14
    },
    {
      "text": "jalapeño",
      "userId": 1,
      "id": 15
    },
    {
      "text": "green onions",
      "userId": 1,
      "id": 16
    },
    {
      "text": "olives",
      "userId": 1,
      "id": 17
    },
    {
      "text": "cilantro",
      "userId": 1,
      "id": 18
    },
    {
      "text": "chipotle sauce",
      "userId": 1,
      "id": 19
    },
    {
      "text": "red wine",
      "userId": 1,
      "id": 20
    }
  ],
  "tags": [
    {
      "id": 1,
      "value": "family",
      "label": "family",
      "saveTo": "tagId",
      "icon": "family.png"
    },
    {
      "id": 2,
      "value": "personal",
      "label": "personal",
      "saveTo": "tagId",
      "icon": "personal.png"
    },
    {
      "id": 3,
      "value": "work",
      "label": "work",
      "saveTo": "tagId",
      "icon": "work.png"
    },
    {
      "id": 4,
      "value": "community",
      "label": "community",
      "saveTo": "tagId",
      "icon": "community.png"
    },
    {
      "id": 5,
      "value": "school",
      "label": "school",
      "saveTo": "tagId",
      "icon": "school.png"
    }
  ],
  "providers": [
    {
      "id": 1,
      "name": "Old Town Electric",
      "service": "Electrician",
      "notes": "Switched out old light fixture for new one. Quick, tidy, friendly and was the best price of all the estimates I called around for. Definitely use in the future",
      "stars": "★★★★★",
      "userId": 1
    },
    {
      "id": 2,
      "name": "A1 Landscaping",
      "service": "Lawn & Yard",
      "notes": "General yard maintenance. Just ok. Keep an eye out for other companies for a deal",
      "stars": "★★★",
      "userId": 1
    },
    {
      "id": 3,
      "name": "Tia's PetSitting",
      "service": "Doggy Daycare",
      "notes": "Tia was a fabulous caretaker for our furbaby. She sent him home with a new toy and gave us an extended stay discount for over 14 days",
      "stars": "★★★★★",
      "userId": 1
    },
    {
      "id": 4,
      "name": "Smith Plumbing",
      "service": "Plumber",
      "notes": "Fixed the leaky toilet to good as new. Service person's name was Angela. Ask for her again next time",
      "stars": "★★★★★",
      "userId": 1
    },
    {
      "id": 5,
      "name": "Honest Abe's",
      "service": "Car Mechanic",
      "notes": "Love Daisy for general upkeep and tune-ups. She found the cause of strange sound when no one else did and she charged half of what dealership quoted",
      "stars": "★★★★★",
      "userId": 1
    },
    {
      "id": 6,
      "name": "Mills Can Do It",
      "service": "Handyman",
      "notes": "Installed brick on fireplace",
      "stars": "★★★★★",
      "userId": 1
    }
  ],
  "recommendations": [
    {
      "id": 1,
      "name": "Westworld",
      "reclistId": 2,
      "from": "My sister",
      "notes": "HBO Max - Futuristic Drama about AI robots roleplaying",
      "userId": 1
    },
    {
      "id": 2,
      "name": "Intensity by Dean Koontz",
      "reclistId": 3,
      "from": "Taylor",
      "notes": "Suspenseful thriller about a criminal sociopath",
      "userId": 1
    },
    {
      "id": 3,
      "name": "Social Dilemma",
      "reclistId": 1,
      "from": "Everyone",
      "notes": "Netlix - Documentary about social networks",
      "userId": 1
    },
    {
      "id": 4,
      "name": "Culacinno's",
      "reclistId": 6,
      "from": "Meg",
      "notes": "Great Italian restaurant downtown",
      "userId": 1
    },
    {
      "id": 5,
      "name": "Mind Your Business",
      "reclistId": 4,
      "from": "Dad",
      "notes": "James Wedmore business podcast for entrepreneurs",
      "userId": 1
    },
    {
      "id": 6,
      "name": "Human Planet",
      "reclistId": 1,
      "from": "reading online",
      "notes": "BBC - Nature documentary",
      "userId": 1
    },
    {
      "id": 7,
      "name": "Bombay Bistro",
      "reclistId": 6,
      "from": "Neighbor Karen",
      "notes": "Indian food with lunch buffet Monday thru Friday",
      "userId": 1
    },
    {
      "id": 8,
      "name": "Women In Tech",
      "reclistId": 4,
      "from": "Friend",
      "notes": "Interviews with leaders in tech",
      "userId": 1
    },
    {
      "id": 9,
      "name": "Dr Birdwell",
      "reclistId": 7,
      "from": "Melissa",
      "notes": "She said they use painfree techniques and always has good experiences",
      "userId": 1
    },
    {
      "id": 10,
      "name": "Cupcake Wars",
      "reclistId": 2,
      "from": "My sister",
      "notes": "Food Network - baking competition",
      "userId": 1
    },
    {
      "id": 11,
      "name": "Daring Greatly - Brené Brown",
      "reclistId": 3,
      "from": "Carolina",
      "notes": "Another great read from Brené ",
      "userId": 1
    },
    {
      "id": 12,
      "name": "The Great Hack",
      "reclistId": 1,
      "from": "surfing the web",
      "notes": "Netlix - Documentary about big tech collecting data",
      "userId": 1
    },
    {
      "id": 13,
      "name": "Hattie B's Hot Chicken",
      "reclistId": 6,
      "from": "Nashville Scene",
      "notes": "Voted Nashville's best hot chicken restaurant",
      "userId": 1
    },
    {
      "id": 15,
      "name": "Biscuit Love",
      "reclistId": 6,
      "from": "My bestie",
      "notes": "Can get busy so go during off-peak hours",
      "userId": 1
    },
    {
      "id": 17,
      "name": "Haunted House",
      "reclistId": 5,
      "from": "Friend",
      "notes": "Super spooky",
      "userId": 1
    },
    {
      "id": 18,
      "name": "Center Hill Lake",
      "reclistId": 5,
      "from": "Megan & Lisa",
      "notes": "Great boating and picnicking",
      "userId": 1
    },
    {
      "id": 19,
      "name": "Heat & Air Heroes",
      "reclistId": 7,
      "from": "Jasmine",
      "notes": "Veteran based company with great integrity",
      "userId": 1
    }
  ],
  "wishlists": [
    {
      "item": "Heated Blanket",
      "isCompleted": false,
      "store": "Target",
      "url": "https://www.target.com",
      "notes": "Queen size or larger",
      "userId": 1,
      "id": 1
    },
    {
      "item": "Fuzzy Gloves",
      "isCompleted": false,
      "store": "Amazon",
      "url": "https://www.amazon.com",
      "notes": "Look for faux fur",
      "userId": 1,
      "id": 2
    },
    {
      "item": "Computer Monitor",
      "isCompleted": false,
      "store": "BestBuy",
      "url": "https://www.bestbuy.com",
      "notes": "4K under $300",
      "userId": 1,
      "id": 3
    },
    {
      "item": "Winter Boots",
      "isCompleted": false,
      "store": "DSW Shoes",
      "url": "https://www.dsw.com/en/us/product/skechers-on-the-go-glacial-ultra-timber-bootie/513712?activeColor=917",
      "notes": "Size 9",
      "userId": 1,
      "id": 4
    },
    {
      "item": "Dog Toys",
      "isCompleted": false,
      "store": "PetSense",
      "url": "https://www.petsense.com",
      "notes": "He likes 'em squeeky",
      "userId": 1,
      "id": 5
    },
    {
      "id": 6,
      "item": "New iPhone",
      "isCompleted": false,
      "store": "BestBuy",
      "url": "https://www.bestbuy.com",
      "notes": "Sale starts Monday",
      "userId": 1
    },
    {
      "item": "Vitamix",
      "isCompleted": false,
      "store": "Vitamix",
      "url": "https://www.vitamix.com",
      "notes": "Refurbished is 25% off",
      "userId": 1,
      "id": 7
    },
    {
      "item": "Daring Greatly",
      "isCompleted": false,
      "store": "B&N",
      "url": "https://www.barnesandnoble.com/w/daring-greatly-brene-brown/1111117601",
      "notes": "Hardcover",
      "userId": 1,
      "id": 8
    }
  ],
  "reclists": [
    {
      "id": 1,
      "value": "Movie",
      "label": "Movie",
      "saveTo": "reclist",
      "image": "movie.png"
    },
    {
      "id": 2,
      "value": "TV Show",
      "label": "TV Show",
      "saveTo": "reclistId",
      "image": "tvshow.png"
    },
    {
      "id": 3,
      "value": "Book",
      "label": "Book",
      "saveTo": "reclistId",
      "image": "book.png"
    },
    {
      "id": 4,
      "value": "Podcast",
      "label": "Podcast",
      "saveTo": "reclistId",
      "image": "podcast.png"
    },
    {
      "id": 5,
      "value": "Activity",
      "label": "Activity",
      "saveTo": "reclistId",
      "image": "activity.png"
    },
    {
      "id": 6,
      "value": "Restaurant",
      "label": "Restaurant",
      "saveTo": "reclistId",
      "image": "restaurant.png"
    },
    {
      "id": 7,
      "value": "Provider",
      "label": "Provider",
      "saveTo": "reclistId",
      "image": "provider.png"
    },
    {
      "id": 8,
      "value": "Other",
      "label": "Other",
      "saveTo": "reclistId",
      "image": "asterisk.png"
    }
  ]
}
```

![ERD Image](https://github.com/SusieCodes/lifehacker/blob/main/src/images/LifeHackerERD.png)

[Back To The Top](#lifehacker)

---

## License

MIT License

Copyright (c) 2021 Nashville Software School

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Back To The Top](#lifehacker)

---

## Created by Susie Stanley

#### If you have any questions about this project, please reach out via Linkedin and I would be more than happy to address any queries or comments

- LinkedIn - [Susie Stanley](https://www.linkedin.com/in/susie-stanley/)
- GitHub - [@SusieCodes](https://github.com/SusieCodes)

[Back To The Top](#lifehacker)

---
