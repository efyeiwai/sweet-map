FROM node:18 AS builder

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
# 新增偵錯步驟：列出 build 資料夾內容
RUN ls -la /app/build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
