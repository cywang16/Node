
FROM node:9

WORKDIR /codes
ADD flows.json .
ADD idle.sh .
ADD package.json .
ADD settings.js .

# WORKDIR /codes
RUN npm install
# CMD sh idle.sh