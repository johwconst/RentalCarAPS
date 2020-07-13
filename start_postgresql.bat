cd postgresql

SET POSTGRES_SVC=RentalPostresSQL

MKDIR "data"
icacls data /grant "postgres":(OI)(CI)F /T
.\bin\initdb.exe --username=postgres --auth=trust --encoding=utf8 --locale=pt_BR  data\ 
NET start RentalPostgresql
.\bin\psql.exe --username=postgres --port=5000 -c "ALTER USER postgres WITH PASSWORD 'postgres';"
.\bin\psql.exe --username=postgres --port=5000 -c "CREATE DATABASE backend"
.\bin\psql.exe -U postgres --port=5000 --dbname=backend --command="CREATE SCHEMA backend"
.\bin\psql.exe -U postgres --port=5000 --dbname=backend --command="GRANT ALL PRIVILEGES ON SCHEMA backend TO postgres"

PAUSE
