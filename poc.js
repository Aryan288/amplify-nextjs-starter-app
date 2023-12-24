const { STSClient, GetCallerIdentityCommand } = require("@aws-sdk/client-sts"); // CommonJS import
const client = new STSClient();
const input = {};

async function myfunction() {
    const command = new GetCallerIdentityCommand(input);
    const response = await client.send(command);
    console.log(response);
}

myfunction();