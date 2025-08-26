# Desarrollo

### Pasos para levantar la app en desarrollo
- Levantar la base de datos ```docker compose up -d```
- Renombrar el archivo .env.template a .env
- Instalar los modulos de Node ```npm install```
- Iniciar la aplicación ```npm run dev```
- Ejecutar los siguientes comandos de Prisma:
```
npx prisma migrate dev
npx prisma generate
```
- Crear los datos de prueba [con el seed](localhost:3000/api/seed)
