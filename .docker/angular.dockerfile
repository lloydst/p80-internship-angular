#==================== Building Stage ================================================ 

# Create the image based on the official Node 8.9.0 image from Dockerhub
FROM node:8.10.0 as node

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /internship-angular

# Change directory so that our commands run inside this new directory
WORKDIR /internship-angular

# Copy dependency definitions
COPY /package.json /internship-angular

# Install dependencies using npm
RUN npm install

# Get all the code needed to run the app
COPY . /internship-angular


#Build the app
RUN npm run build --prod --aot
