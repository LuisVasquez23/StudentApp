# Usa una imagen base de Node.js compatible con ARM
FROM node:18

# Configura el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (o yarn.lock) al contenedor
COPY package*.json ./

# Instala las dependencias, incluyendo nodemon globalmente
RUN npm install && npm install -g nodemon

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
