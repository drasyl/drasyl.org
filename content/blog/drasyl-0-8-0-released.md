---
title: "drasyl 0.8.0 released with improved Hole Punching, Remote Controlling for CLI, and increased TUN Device performance"
date: 2022-07-10T12:14:00+01:00
tags: ["releases", "cli"]
---

![aerial photography of road](/img/jack-anstey-zS4lUqLEiNA-unsplash.jpg)

Today, we are excited to announce the release of drasyl 0.8.0 with improved hole punching protocol, remote controlling via JSON-RPC for `node` and `tun` CLI commands, and increased TUN device performance.

<!--more-->

### Changelog

#### Added

- NAT Traversal is now also able to establish a P2P connection if both devices are behind a shared
  NAT device that does not support [hairpinning](https://datatracker.ietf.org/doc/html/rfc4787#section-6).
- Node: Added `UnconfirmedAddressResolveHandler` that does send messages to unconfirmed (sender)
  addresses as last-resort (before the messages were simply dropped).
- CLI: Option `--mtu` to sub-command `tun` added.
- CLI: Option `--rc-jsonrpc-tcp` and `--rc-jsonrpc-http` to sub-command `node` added.
- CLI: `node-rc` sub-command added.
- CLI: Option `--rc-jsonrpc-tcp` and `--rc-jsonrpc-http` to sub-command `tun` added.
- CLI: `tun-rc` sub-command added.
- CLI: `tun` command will not work within docker.

#### Changed

- CLI: Improve `tun` sub-command performance by tweaking default MTU size.
- CLI: Instead of a random port, drasyl now listens on a port that is derived from the identity.
- Dependencies have been updated.

#### Fixed

- Internet discovery now regularly checks if the super peer DNS records have changed.
- DrasylNode: Groups plugin is working again.
- [guava](https://github.com/google/guava) dependency removed.

### Remote Controlling a drasyl Node

drasyl nodes started via the CLI command `node` can now be remotely controlled.
To do so, the node must be started with the parameter `--rc-jsonrpc-tcp` or `--rc-jsonrpc-http`.
A TCP or HTTP server is then started, listening on port 25421 (can be customized using the `--rc-bind` parameter).
This server waits for JSON-RPC requests.
Available methods are `events`, `identity`, `send`, `shutdown` and `start`.

Here you can see an example of how a node started via `--rc-jsonrpc-tcp` can be controlled remotely:
```bash
$ telnet localhost 25421
Trying ::1...
Connected to localhost.
Escape character is '^]'.
# get node identity
{ "jsonrpc": "2.0", "method": "identity", "id": 1}
{"jsonrpc":"2.0","result":{"agreementKeyPair":{"secretKey":"30786bd43bb65cf0e99dbf0e8ced360f2113caeec6776ffac0d0fa6befef5076","publicKey":"998685bd4d088db0f238e43c6f63a6e5884c83ce5961c4b39bea5bc298eb6f38"},"proofOfWork":-2126604734,"identityKeyPair":{"secretKey":"ba9ed4a6076ffb15413741f84df08978b9c96864b87781a5bf5b67587c4769c691fc08ba0fe62b872aa784674475adb5532aa257b4423bd48dd333555eb62d4b","publicKey":"91fc08ba0fe62b872aa784674475adb5532aa257b4423bd48dd333555eb62d4b"}},"id":1}
# start node
{ "jsonrpc": "2.0", "method": "start", "id": 2}
{"jsonrpc":"2.0","result":"","id":2}
# get received events/messages
{ "jsonrpc": "2.0", "method": "events", "id": 3}
{"jsonrpc":"2.0","result":[{"node":{"port":0,"tcpFallbackPort":0,"identity":{"agreementKeyPair":{"secretKey":"30786bd43bb65cf0e99dbf0e8ced360f2113caeec6776ffac0d0fa6befef5076","publicKey":"998685bd4d088db0f238e43c6f63a6e5884c83ce5961c4b39bea5bc298eb6f38"},"proofOfWork":-2126604734,"identityKeyPair":{"secretKey":"ba9ed4a6076ffb15413741f84df08978b9c96864b87781a5bf5b67587c4769c691fc08ba0fe62b872aa784674475adb5532aa257b4423bd48dd333555eb62d4b","publicKey":"91fc08ba0fe62b872aa784674475adb5532aa257b4423bd48dd333555eb62d4b"}}},"type":"NodeUpEvent"},{"peer":{"address":"5b4578909bf0ad3565bb5faf843a9f68b325dd87451f6cb747e49d82f6ce5f4c"},"type":"PeerDirectEvent"},{"node":{"port":0,"tcpFallbackPort":0,"identity":{"agreementKeyPair":{"secretKey":"30786bd43bb65cf0e99dbf0e8ced360f2113caeec6776ffac0d0fa6befef5076","publicKey":"998685bd4d088db0f238e43c6f63a6e5884c83ce5961c4b39bea5bc298eb6f38"},"proofOfWork":-2126604734,"identityKeyPair":{"secretKey":"ba9ed4a6076ffb15413741f84df08978b9c96864b87781a5bf5b67587c4769c691fc08ba0fe62b872aa784674475adb5532aa257b4423bd48dd333555eb62d4b","publicKey":"91fc08ba0fe62b872aa784674475adb5532aa257b4423bd48dd333555eb62d4b"}}},"type":"NodeOnlineEvent"},{"peer":{"address":"c0900bcfabc493d062ecd293265f571edb70b85313ba4cdda96c9f77163ba62d"},"type":"PeerDirectEvent"}],"id":3}
```

Alternatively, the CLI also provides a built-in client with command `node-rc`:
```bash
$ drasyl node-rc identity
{
  "agreementKeyPair" : {
    "secretKey" : "30786bd43bb65cf0e99dbf0e8ced360f2113caeec6776ffac0d0fa6befef5076",
    "publicKey" : "998685bd4d088db0f238e43c6f63a6e5884c83ce5961c4b39bea5bc298eb6f38"
  },
  "proofOfWork" : -2126604734,
  "identityKeyPair" : {
    "secretKey" : "ba9ed4a6076ffb15413741f84df08978b9c96864b87781a5bf5b67587c4769c691fc08ba0fe62b872aa784674475adb5532aa257b4423bd48dd333555eb62d4b",
    "publicKey" : "91fc08ba0fe62b872aa784674475adb5532aa257b4423bd48dd333555eb62d4b"
  }
}
```

### Modify TUN Device Routing Table at Runtime

The routing table of the TUN device introduced with [version 0.7.0](/blog/drasyl-0-7-0-released/) can now be modified at runtime.
This works the same way as the `node` command (see above).
The methods `add-route`, `identity`, `remove-route`, and `routes` are available.

Here, too, a suitable client is supplied with `tun-rc`.

---

Photo by [Jack Anstey](https://unsplash.com/@jack_anstey) on [Unsplash](https://unsplash.com/)