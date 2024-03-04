Following step by step such below

// build the dependence images
docker-composer build

// run containers
docker-composer up -d

# laravel
// access to php container for setting necessary
exec -it php-mylove /bin/bash
cd backend -> composer install -> chmod -R 777 storage/framework/sesstion -> 
chmod -R 777 storage/framework/logs

// be setting from .env.example to .env
