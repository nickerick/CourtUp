#!/usr/bin/env bash
cd /home/ec2-user/apache-tomcat-9.0.71/bin/

cd ../../dev
aws s3 cp s3://courtup/CourtUpAPI-0.0.1-SNAPSHOT.jar CourtUp.jar
sudo java -jar -Dspring.config.location=application.properties CourtUp.jar > /dev/null 2> /dev/null < /dev/null &