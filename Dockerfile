FROM node:16.10-alpine3.13 as build
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm run build
RUN npm prune --production

FROM node:16.10-alpine3.13 as runner
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "start"]