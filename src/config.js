const env=process.env.REACT_APP_ENV;

let config={
    baseURL:"http://localhost/"
}
console.log(env)
switch (env.toUpperCase()){
    case "STAGE":
        config.baseURL="https://stages.skillsunioon.com"
        break;
    case "PRODUCTION":{
        config.baseURL="https:skillsunion.com"
        break;
    }
}

export default config;