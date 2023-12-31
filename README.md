# BookLoan Project Checklist

## Backend (Laravel 10 - BookLoan-Backend)

- [x] **Database Setup:**

  - [x] Choose a database (MySQL).
  - [x] Normalize the database further to meet additional requirements.

- [x] **API Implementation:**

  - [x] Implement CRUD REST APIs for Users, Books, and Book Loans.
  - [x] Ensure proper authentication for the APIs.

- [x] **Code Quality:**

  - [x] Follow good code practices.
  - [x] Implement reusable patterns.

- [x] **Deployment:**
  - [x] Deploy the Laravel backend to a server of your choice.

## Frontend (Vue 3 - BookLoan-Frontend)

- [x] **Vue Project Setup:**

  - [x] Create a Vue 3 project named "bookloan-frontend."
  - [x] Set up the project structure following best practices.

- [x] **API Consumption:**

  - [x] Consume the CRUD REST APIs from the Laravel backend in the Vue frontend.

- [x] **Frontend Design:**

  - [x] Design a user-friendly interface for user registration, book management, and book loans.
  - [x] Implement additional features like reports and graphs to showcase mastery of frontend design.

- [x] **Code Quality:**

  - [x] Follow good code practices.
  - [x] Ensure code is modular and reusable.

- [x] **Deployment:**
  - [x] Deploy the Vue frontend to a server of your choice.

## General Project Information

- [x] **Project Name:**

  - [x] Both the backend and frontend projects should be named "BookLoan."

- [x] **Version Control:**

  - [x] Upload your code to the version control system of your choice (e.g., GitHub, GitLab).

- [x] **Additional Information:**
  - [x] Demonstrate skills in normalizing the database.
  - [x] Showcase additional features beyond the basic requirements.

## Running the Project

- [x] **Backend (Laravel 10 - BookLoan-Backend):**

  - [x] Clone the repository.
  - [x] Install dependencies: `composer install`.
  - [x] Set up the database: `php artisan migrate`.
  - [x] Run the server: `php artisan serve`.
  - [x] seed database: `php artisan db:seed`
  - [x] Link storage: `php artisan storage:link`
  - [x] You can clear configurations and caches: `php artisan config:clear && php artisan cache:clear`
  - [x] running the backend in e.g a debian server in detached mode: `nohup php artisan serve --host=0.0.0.0 --port=9008 > laravel.log 2>&1 &`
  - [x] Run the cron/scheduler: `php artisan schedule:run >> /dev/null 2>&1`

- [x] **Frontend (Vue 3 - BookLoan-Frontend):**

  - [x] Clone the repository.
  - [x] Install dependencies: `npm install`.
  - [x] Run the development server: `npm run serve`.(development)
  - [x] Build the assets in production (minify and optimize): `npm run build` the load it on the server or run it as a seperate instance in the server.

- [x] **Accessing the Application:**

  - [x] Visit the provided URLs for the Laravel backend and Vue frontend.

- [x] **Login Credentials (If Deployed):**
  - [x] Share login credentials for admin and user roles.

## Deployment Status

- [x] [Deployed Version Link](http://95.217.156.101:9008/)

- [x] **Login Credentials:**

  - [x] Admin Email: admin@admin.com
  - [x] Admin Password: admin

  - [x] User Email: johndoe@gmail.com
  - [x] User Password: pass
  - You can login as admin and create a user and test with that user to.
  -
