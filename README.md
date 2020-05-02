composer global require laravel/installer
laravel new blog



php artisan key:generate
php artisan serve --port=8080

php artisan make:migration creer_table_membres --create="membres"

php artisan make:migration add-isActive --table="users" 
php artisan make:migration add_foreignkey_userID_to_table_members --table="membres" 
php artisan migrate:rollback --step=1

php artisan make:model Article -m

php artisan make:migration creer_table_membres --create="membres"

php artisan migrate:refresh --seed 

php artisan migrate 

php artisan tinker

sqlite3 database/database.sqlite 
.tables 
.schema membre
sqlite3 database/database.sqlite -cmd '.schema membres'

# semaine 3

composer require laravel/ui
php artisan ui vue --auth 
 npm install && npm run dev 

# semaine 4
php artisan make:migration add_role_to_users_table --table=users

php artisan make:middleware CheckIsActive
