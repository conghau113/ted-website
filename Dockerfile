# Dockerfile

# Sử dụng image `node:alpine` với phiên bản mới nhất
FROM node:16-alpine

# Đặt thư mục làm thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json vào container và cài đặt các dependencies
COPY package*.json ./
RUN npm install

# Sao chép toàn bộ source code vào container
COPY . .

# Build production-ready version của ứng dụng
RUN npm run build

# Expose cổng mặc định của React
EXPOSE 3000

# Chạy lệnh để khởi động ứng dụng React
CMD [ "npm", "start" ]