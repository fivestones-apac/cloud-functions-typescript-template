# Cloud Functions TypeScript Template

With this template, you can write and deploy multiple [HTTP-triggered functions](https://cloud.google.com/functions/docs/writing/http) to Google Cloud Functions. For coding, please write your functions in `src/app.ts`.

## Local Development
The application runs functions using the [Functions Framework](https://cloud.google.com/functions/docs/running/function-frameworks).

If only one function is specified, it will be served at http://localhost:8080/ after running the below command.
```bash
npm install
npm run watch --function=helloWorld
```

Besides, you could have two functions running in the same time at different ports. 
```bash
npm install
# helloWorld function will be served at default port http://localhost:8080/ 
npm run watch --function=helloWorld
# echoReqHeaders function will be served at http://localhost:3000/ 
npm run watch --function=echoReqHeaders --port=3000
```

## Cloud Function Deployment
Before deployment, please confirm that you have installed the [Google Cloud SDK](https://cloud.google.com/sdk/docs/quickstart#installing_the_latest_version) and initialized the Cloud SDK.

To deploy the local codebase to Cloud Function, please confirm your local gcloud SDK is selected the correct GCP project and run the below command.

```bash
# helloWorld function will be deployed with endpoint helloWorld and default region asia-east2 which is set in package.json
npm run deploy --function=helloWorld
# helloWorld function will be deployed with endpoint hello-world and default region asia-east2 which is set in package.json
npm run deploy --function=helloWorld --endpoint=hello-world 
# echoReqHeaders function will be deployed with endpoint echo-req-headers and region asia-northeast1
npm run deploy --function=echoReqHeaders --endpoint=echo-req-headers --region=asia-northeast1
```
