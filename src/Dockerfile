# Use official Node.js image as base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Angular app
RUN npm run build

# Serve the app using a lightweight HTTP server
CMD ["npx", "http-server", "dist/medipulse", "-p", "4200"]

# Expose port
EXPOSE 4200
