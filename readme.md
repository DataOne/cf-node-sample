# cf-node-sample

Super simple Node.js server. Used for being deployed on Cloud Foundry and showing service binding environment.

## Run on CF 

* `cf cups myservice -p '{"username":"admin","password":"pa55woRD"}'`
* `cf push`

## Endpoints 
* `/hello`
* `/services`