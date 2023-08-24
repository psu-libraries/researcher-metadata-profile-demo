FROM ubuntu as BUILDER
RUN apt-get update && apt-get install zip -y 
WORKDIR /code

COPY . /code

RUN zip -r researcher-metadata-profile-demo.zip .

FROM nginxinc/nginx-unprivileged:1.25.2

COPY --from=BUILDER /code /usr/share/nginx/html

