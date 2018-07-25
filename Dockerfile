#==================== Building Stage ================================================ 

# Create the image based on the official Node 8.9.0 image from Dockerhub
FROM node:8.9.0 as node

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /p80tool

# Change directory so that our commands run inside this new directory
WORKDIR /p80tool

# Copy dependency definitions
COPY package.json /p80tool

# Install dependencies using npm post install should handle ng build
RUN npm i --save -g @angular/cli
RUN npm install

# Get all the code needed to run the app
COPY . /p80tool


#Build the app
RUN npm run start