FROM node:lts as dependencies
WORKDIR /media-streaming-mesh
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /media-streaming-mesh
COPY media-streaming-mesh .
COPY --from=dependencies /node_modules ./node_modules
RUN yarn build

EXPOSE 3000
CMD ["npm", "start"]