#!/bin/bash
sudo pkill -f 'java -jar'

cd /home/ec2-user/
rm -rf server
mkdir server

cd apache-tomcat-9.0.71/bin
./shutdown.sh