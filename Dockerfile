# Use Node.js base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose the app port
EXPOSE 2000

ENV API_PORT=2000
ENV AMAZON_URL=https://www.amazon.de

# Start the app
CMD ["node", "src/server.js"]
