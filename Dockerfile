FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --silent

COPY . .

# ---- Build‑time environment variables ---- #
# These will be compiled into the static files by Vite.
ARG VITE_PROJECT_ID
ARG VITE_DATASET=production
ARG VITE_API_VERSION
ARG VITE_PORT

# Pass them through to the build step
ENV VITE_PROJECT_ID=${VITE_PROJECT_ID} \
    VITE_DATASET=${VITE_DATASET} \
    VITE_API_VERSION=${VITE_API_VERSION} \
    VITE_PORT=${VITE_PORT}

# Build the optimized production bundle
RUN npm run build

# Stage 2: Serve the static bundle with Nginx
FROM nginx:1.25-alpine AS runtime

# Clean default nginx html files
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# custom nginx.conf if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
