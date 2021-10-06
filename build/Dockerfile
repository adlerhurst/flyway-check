ARG ENV=dev

## ###############
## base frontend
## ###############
FROM node:16 as base
WORKDIR /semverify
COPY / .

## ###############
## dev build of frontend
## ###############
FROM base AS build
RUN npm run build:dev


## ###############
## runs frontend dev server
## ###############
FROM base AS run
ARG PUBSUB_GATEWAY
ENV REACT_APP_PUBSUB_GATEWAY=${PUBSUB_GATEWAY}

EXPOSE 4200
ENTRYPOINT ["npm", "run", "dev"]
