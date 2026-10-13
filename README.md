# Installation

## Backend

1. **Install dependencies**

   ```bash
   composer install
   ```

2. **Configure environment variables**
   - Fill in the variables in `.env-default`.
   - Rename `.env-default` to `.env`.

3. **Set up the database**
   - Import the SQL file into the database.

4. **Create a user**
   - Use phpMyAdmin to create a username manually.
   - Leave the password field as `NULL`.
   - Use the `/change_password` form to set a password for the newly created user.

## Frontend

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**
   - Fill in the variables in `.env-default`.
   - Rename `.env-default` to `.env`.
