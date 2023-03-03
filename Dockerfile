#Sample Dockerfile for NodeJS Apps

FROM node:16

ENV PORT 5000

ENV MONGODB_URL mongodb+srv://mozohack4:dFY8Oo4fDtGcXhJS@cluster0.4pc4jkz.mongodb.net/?retryWrites=true&w=majority.git

ENV SECRET mozohack4

ENV RAZAR_PAY_ID rzp_test_5WMsmI1QXStZDX

ENV RAZAR_PAY_SECRET 6gXKHDtpSf1DQvWb2GZGPch3

WORKDIR /server

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]
