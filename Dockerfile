# FROM node:14.15.4-alpine3.12

# RUN apk add --no-cache bash

# USER node

# WORKDIR /home/node/app

# Use a imagem do nodejs na versão 18 como base
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie todo o conteúdo do diretório do projeto para o diretório de trabalho do contêiner (/app)
COPY . .

# Execute os comandos necessários
RUN npm install
RUN echo "firs-migrate" | npx prisma migrate dev

# Exponha a porta necessária (3000 = APP NODE e 5555 Prisma Studio)
EXPOSE 3000
EXPOSE 5555


# Comando para iniciar o aplicativo quando o contêiner for iniciado
 CMD ["npm", "run", "start:docker"]



