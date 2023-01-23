#!/usr/bin/env bash
cd /home/ec2-user/apache-tomcat-9.0.71/bin/
./startup.sh

cd ../../dev
aws s3 cp s3://courtup/CourtUpAPI-0.0.1-SNAPSHOT.jar CourtUp.jar
java -jar CourtUp.jar > /dev/null 2> /dev/null < /dev/null &