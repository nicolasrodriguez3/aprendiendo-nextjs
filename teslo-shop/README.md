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
AUTH_SECRET=your-secret-key
```

> Es posible generar la clave secreta con `openssl rand -base64 32` 

3. Instalar las dependencias ```pnpm install```
4. Levantar la base de datos ```docker-compose up -d```
5. Ejecutar las migraciones de la base de datos ```pnpx prisma migrate dev```
6. Ejecutar el seed de la base de datos ```pnpm seed```
7. Ejecutar el proyecto ```pnpm dev```

