# This is Jiajia's course note:

This is a self-learned project as an assignment of PD4 course of RRC.

## 1. Building a Weather App with AI Power

Beyond ChatGPT : what AI can do for you:
   
What is AI ? 
It is not chatbot, it is a middle transformer to transform information between users and system. It will transform information as users' prefer format.
   
Developer could use this capacity to transform human language into structured data software it can work with.

## 2. A more useful weather app
use ai to meet two functionalities:
1. get user's weather command,then figure out the location.
2. parse the weather data using other API to get the weather data.

## 3. Ideating with ChatGPT as a base
API: 
for location:
https://openweathermap.org/api/geocoding-api
for weather data:
https://openweathermap.org/current

`test the ai:`
> ChatGPT chat command: 
> 
> 1. First command: 
> 
> Act like a location string generator. Based on my prompt, create a location string following this specific format:
[city],[two-letter state code],[two-letter country code]
>
>Example:
  Me: "What's the weather like in London, Ontario?"
  You: "London, ON,CA"
>
> 2. Second command: 
> 
> What's the weather like in Winnipeg?
>
> 3. Third command: 
> 
> Do I need to wear sunscreen in Oslo?
> **the answer is wrong.
>
>  4. Fourth command: 
> 
> Based on the JSON below, describe the current weather in this location?

## 4. Sidebar: Build a React app using Vite and Github Codespaces
> Vitejs : https://vitejs.dev/guide/

4.1 create a repository in github
  then open codespaces to config a dev,enter the following,then commit the changes:
  ```
  {
  "image": "mcr.microsoft.com/devcontainers/universal:2",
  "features": {
  },
  "portsAttributes": {
    "5173": {
      "label": "Vite port",
      "onAutoForward": "OpenPreview"
    }
  },
  "forwardPorts": [5173]
}
  ```
  **OpenPreview means that it will open a preview inside VS code itself in the browser.

  ![Alt text](image.png)
  >these configuration of vite port is to work for the browser preview which the browser will connect to the port.

4.2 create a codespace on main
> This codespace is a virtual machine that runs my project inside Visual Studio Code in my browser.

Steps:
```
a. terminal run: npm create vite@latest
b. Choose React--javascript+ svm--create the folder and cd it.
c. Run: npm install
d. Run: npm run dev
```


## 5. Boot up the app in GitHub Codespaces
use online codespace or use the real local environment.

## 6.Work with the OpenWeatherMap API
1) Modify the API in `.env.local.template` file to connect the weathermap API.
    ```
    VITE_OPENAI=[Your OpenAI API Key]
    VITE_OWM=[Your Open Weather Map API Key]
    ```
    **Delete the first line, change you API key into the second line.

2) Rename the file `.env.local`.
3) Create API key.



  



