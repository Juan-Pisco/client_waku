import { Waku } from "js-waku";
const waku = await Waku.create({ bootstrap: { default: true } });

const processIncomingMessage = (wakuMessage) => {
    console.log(`Message Received: ${wakuMessage.payloadAsUtf8}`);
  };
  
  waku.relay.addObserver(processIncomingMessage, ["/my-cool-app/1/my-use-case/proto"]);
console.log("listenning");

