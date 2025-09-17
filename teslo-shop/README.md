Este proyecto fue creado a la par del curso de Next.js de [Fernando Herrera](https://fernando-herrera.com/)

## Como ejecutar el proyecto en local
1. Clonar el repositório
2. Crear un archivo ```.env``` en la raiz del proyecto y configurar las variables de 
entorno

```
DB_USER=postgres
DB_NAME=teslo-shop
DB_PASSWORD=123456
DATABASE_URL="postgresql://postgres:123456@localhost:5432/teslo-shop?schema=public"
```

3. Instalar las dependencias ```npm install```
4. Levantar la base de datos ```docker-compose up -d```
5. Ejecutar las migraciones de la base de datos ```npx prisma migrate dev```
6. Ejecutar el proyecto ```npm run dev```

