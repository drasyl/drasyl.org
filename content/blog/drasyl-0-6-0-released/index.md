---
title: drasyl 0.6.0 released with Support for Netty Handlers, Backpressure Mechanism,
  and Tunnel Utility
date: 2021-11-28 01:57:00+01:00
tags:
- releases
- cli
images:
- pexels-pixabay-210008.jpg
author: Heiko Bornholdt
---


Today, we are excited to announce the release of drasyl 0.6.0 with support for [Netty](https://netty.io) channel handlers, backpressure mechanism, option to disable data plane encryption, file transfer for wormhole utility, and port tunneling utility.

<!--more-->

### Changelog

#### Upgrade Notes

- We did it again: The overlay protocol has been changed with breaking changes making it impossible
  to communicate with peers running older drasyl versions.
- New Javadoc website: https://api.drasyl.org/

#### Added

- [Netty](https://netty.io/) based channels are now used to process all overlay network I/O
  operations. This change allows you to use/add many netty handlers with the drasyl overlay.
- [`DrasylNode#resolve(...)`](./drasyl-node/src/main/java/org/drasyl/DrasylNode.java) will now
  return a dedicated [`Channel`](https://netty.io/4.1/api/io/netty/channel/Channel.html) for
  communication with the given peer.
- The above mentioned [`Channel`](https://netty.io/4.1/api/io/netty/channel/Channel.html) comes with
  a backpressure mechanism (`Channel#isWritable`/`Channel#bytesBeforeWritable`
  /`Channel#bytesBeforeUnwritable`) allowing the application to control how fast traffic is written
  to the overlay.
- The encryption of overlay management messages and application messages can now be disabled
  separately in
  the [config](drasyl-node/src/main/resources/reference.conf) (`drasyl.remote.message.arm.protocol.enabled`
  /`drasyl.remote.message.arm.application.enabled`).
- CLI: `wormhole` sub-command is now able to send files as well.
- CLI: `tunnel` sub-command added.

#### Changed

- The classes `DrasylNode`, `DrasylConfig`, `DrasylException`, all `Event`s has been moved to the
  Maven module `org.drasyl:drasyl-node` and java packages `org.drasyl.node.*`.
- Dependencies have been updated.
- The monitoring feature was outdated/mostly unusable and has therefore been removed.
- Replaced protobuf with own message serialization allowing us to reduce the overlay overhead.

### Fixed

- Overwhelming application traffic will no longer cause the node to drop out of the overlay.

### Port Tunneling Utility

The CLI has been extended by the `tunnel` utility.
This utility allows (local) TCP ports to be exposed to other computers over the drasyl network.

---

Photo by [Pixabay](https://www.pexels.com/de-de/@pixabay/) on [Pexels](https://www.pexels.com/)