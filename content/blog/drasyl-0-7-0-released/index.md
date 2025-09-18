---
title: drasyl 0.7.0 released with TUN Device Support and Faster UDP Hole Punching
date: 2022-02-18 12:14:00+01:00
tags:
- releases
- cli
images:
- clint-adair-BW0vK-FA3eg-unsplash.jpg
author: Heiko Bornholdt
---


Today, we are excited to announce the release of drasyl 0.7.0 with TUN device support, faster UDP hole punching, IP broadcast-based peer discovery, and identity generation utility.

<!--more-->

### Changelog

#### Upgrade Notes

1. We did it again: The overlay protocol has been changed with breaking changes making it impossible
   to communicate with peers running older drasyl versions.
1. This version is introduces a new identity file format, every node will recreate a new identity on
   first start. If you would like to reuse your pre-existing identity, you have to migrate the file
   format by yourself. Asume you have the current file `drasyl.identity.json`:
```json
{
    "proofOfWork" : -2144920491,
    "identityKeyPair" : {
        "publicKey" : "feb2fa8a69e2a59ce7586349b8e8a44610d902ef2a30b1a46ebc5ff989813033",
        "secretKey" : "d716fdc9a164bea60a179eacf868416695ad8757035d0d83abd5a2b362bfa221feb2fa8a69e2a59ce7586349b8e8a44610d902ef2a30b1a46ebc5ff989813033"
    },
    "keyAgreementKeyPair" : {
        "publicKey" : "62c201382e37a50c3ed20f15ccb5ba970a264a2765f8f8c6f8e1c27b2454ca34",
        "secretKey" : "105672a9d44c3be1ba4b777f0c7d6cf711fb73defd404db7644f546ea71f0f5d"
    }
}
```
Then you need to create a **new** file `drasyl.identity` with the following format:
```ini
[Identity]
SecretKey = d716fdc9a164bea60a179eacf868416695ad8757035d0d83abd5a2b362bfa221feb2fa8a69e2a59ce7586349b8e8a44610d902ef2a30b1a46ebc5ff989813033
ProofOfWork = -2144920491
```

#### Added

- CLI: `generate-identity` sub-command added.
- CLI: `generate-pow` sub-command added.
- CLI: `tun` sub-command added.
- CLI: `generate-completion` sub-command added.
- CLI: `--no-protocol-arming` option added.
- Broadcast-based LAN Discovery added. Can be used programatically. More
  information: https://git.informatik.uni-hamburg.de/sane-public/drasyl/-/merge_requests/680

#### Changed

- Dependencies have been updated.
- Speed up direct connection establishment when traversing symmetrics NATs.
- Switch to more compact (INI-formatted) identity file format.
- CLI: `perf client`'s `--mps` option default value has changed to `0`. This causes the client to
  send messages as quickly as possible. to send messages as fast as possible.

#### Fixed

- Fix endless identity creation, when none of the available nonces result in a valid identity.
- Fix IP multicast discovery for IPv6-only environments.
- Fix SSDP discovery for IPv6-only environments.
- Stop sending IP multicast messages to super peers when node is running in TCP-fallback mode.
- Fix problem with `null` message when using `BehavioralDrasylNode`.

### TUN Device Support

The CLI has been extended by the so-called tun utility. This is a very cool feature: The utility creates a virtual local network interface on your computer, corresponding IP address, netmask, and routing table. With this interface, any computers on the Internet can be tied into one virtual network, where any-to-any communication is possible. All IP-based programs will work without any customization! Currently, Linux, macOS, and Windows are supported.

---

Photo by [Clint Adair](https://unsplash.com/@clintadair) on [Unsplash](https://unsplash.com/)