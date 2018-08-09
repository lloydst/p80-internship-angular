#==================== Building Stage ================================================ 

FROM node:8

# Create app directory
RUN mkdir /app
WORKDIR /app
# Install app dependencies

# where available (npm@5+)
COPY package.json /app
RUN npm install
COPY . /app
RUN npm i -g @angular/cli

# If you are building your code for production
RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]