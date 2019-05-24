# :sweat_drops: Project Title
How to build a docker image using nodejs and express

##:octocat:Getting Started

  :one: Create a Dockerfile (no extension is required)
  :two: Create a .dockerignore file. List all of the folders to exclude from the production code. 


### :alien: Command line to build

```
docker build -t <yourname>/new_web_api .
e.g. docker build -t michaelganesan/new_web_api .
```
### :pushpin: Command Line switches
* The -t switch operator is used to create the tag name for the image.
* If the image **fails** to compile a tag will not be created for the image. You will have to rebuild the image again. Always check the log file.  

### :ok_hand: Image created successfully

:pushpin: Run the following command to create a container from the image.
```
docker run -p 49816:8080 -d <yourname>/new_web_api
  
```
:cyclone:  **-p** (map the external port 49816 to the internal container port 8080)
:cyclone: **-d** run the container in the background
:sunny: always run the container in the background

### :cop: Logging and monitoring the container
```
# Return the running container ids
  docker ps 
```

:cyclone: dockers logs <container id> (Command will display the console messages!)

### :pencil: Make Changes
* to makes change to the container 
```
  docker exec -it <contaier id> /bin/bash
```
:cyclone: This will give you access to the folder for the image

#### :pencil: Command line to test the website
:cyclone: use the following command line to test the data returned from the url
```
curl -i http://localhost:49816


HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 88
ETag: W/"58-yUvcBpZZwNLPwz3NpHQPq7Z/biI"
Date: Fri, 24 May 2019 18:53:05 GMT
Connection: keep-alive

Response from the server: Fri May 24 2019 18:53:05 GMT+0000 (Coordinated Universal Time)

``` 
###:pencil: How to attach a file path to a docker container
```
  docker run -p 8080:8080 -d -v /$(pwd):/user/src/app <container name>

```
Note: This will attach the local file path with the code to run from the container. You can even restrict the amount of memory docker uses. 

:cyclone: You can inspect the "union file system" of the container by running the following command

```
docker inspect -f "{{json .Mounts}}" <container id> | jq
```
Note: jq is a command line json processor (really handy tool)

## :boy: Authors
* Michael Ganesan
* Date: 05/24/2019