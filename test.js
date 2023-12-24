// import { STSClient } from "@aws-sdk/client-sts";
const { STSClient, AssumeRoleCommand } = require("@aws-sdk/client-sts");
const client = new STSClient();

async function main() {
    try {
        const command = new AssumeRoleCommand({
            RoleArn: "arn:aws:iam::656375813961:role/cdk-hnb659fds-deploy-role-656375813961-us-east-1",
            RoleSessionName: "session1",
            DurationSeconds: 900,
        });
        const response = await client.send(command);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}

 main()