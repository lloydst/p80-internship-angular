#==================== Building Stage ================================================ 

# Create the image based on the official Node 8.9.0 image from Dockerhub
FROM node:8.9.0 as node

RUN npm i -g @angular/cli
# Copy dependency definitions

# Install dependencies using npm post install should handle ng build

RUN npm install
RUN ng build --prod --build-optimizer
# Get all the code needed to run the app

#start server
RUN npm run start