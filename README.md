# Project Journey Japan
Journey Japan is a web application that will captivate those who are traveling, planning, or thinking of going to Japan. Japan is easily one of the world's most visited country and there seems to be a stigma around the cost of actually going to Japan. The goal for Journey Japan is cultivate real user reviews on the top attractions and places to eat for each of the top cities in Japan. Think of it as a mixture of Tripadvisor and Yelp where users will be able to create an account and post their real reviews. There is also a section that will provide meaningful do's and don'ts for travelers so they can save money where they can and just make their overall experience in Japan one they will never forget!

# User Story
- On the "Journey Japan" landing page users will be provided a short introduction of what the web application will provide.
- Users will be able to navigate the navbar to explore based on cities.
- After choosing the city they will be redirected to that city's show page which will be filled with userful information introducing them to the city. It will also include restaurants and attractions specific to that city.
- Users can pick from a list of restaurants or attractions that peak their interests which will take them to the show page for that restaurant/attraction. 
- Users can leave reviews for that restaurant/attraction.
- Users can login/signup for a account and upon doing so they will be able to create, edit, and delete their own reviews.

# Wireframes
![Landing Page](https://user-images.githubusercontent.com/85213417/132397340-0a684ed9-2f86-4292-bc9d-df3eb97c9f8c.png)

![Profile Page](https://user-images.githubusercontent.com/85213417/132394600-dba3e17e-f088-4852-8c6b-9082dcf6630d.png)

![City Show Page](https://user-images.githubusercontent.com/85213417/132394634-4f889b99-9451-4b73-8dfc-e99fa7a13908.png)

![Restaurant:Attraction Show Page](https://user-images.githubusercontent.com/85213417/132394639-e88c6b33-a9e6-459d-9bb6-2f85df638e65.png)

![Do's   Don'ts Page](https://user-images.githubusercontent.com/85213417/132394649-82a9fd59-04ee-4efd-a7a8-c93888128a6f.png)

# User Flow
![User Flow](https://user-images.githubusercontent.com/85213417/132397366-877b8b96-7fe7-49a7-bc71-03ae282b1056.png)

# ERD
![ERD](https://user-images.githubusercontent.com/85213417/132442202-47380da2-0871-4877-888b-729b50e82e80.png)

# Milestones
### Sprint 1: 9/10
- Create routes
- Create skeleton setup of page looks
- Establish db
- Create base seed

### Sprint 2: 9/11 
- Finish full crud for user reviews 
- Start and finish creation of user auth

### Sprint 3: 9/13
- Add and finish User Authorization access on routes
- Start adding CSS framework and custom styling

### Sprint 4: 9/15
- Finish CSS styling and touch up the pages 
- Check on feature creep to add with time left
- Do a full test on features and making sure each work correctly  

# Technologies Used
- Express.js
- Express-sessions
- Bcryptjs
- Ejs
- Method-override
- Mongoose
- Sass
- Bootstrap.css
- jQuery
- Particle.js
- Google Maps Api

# Scripts Used
Bootstrap
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
```

jQuery
```
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
```