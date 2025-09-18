---
title: drasyl 0.11.0 released with performance improvements, fixes, and dynamic overlay
  constructon
date: 2025-01-04 19:21:56+01:00
tags:
- releases
images:
- anton-filatov-O_5SJuSOxZA-unsplash.jpg
author: Heiko Bornholdt
---


Today, we are excited to announce the release of drasyl 0.11.0.
This maintenance release brings performance improvements, fixes and the new CLI sub-command `sdon` for the creation of dynamic overlays.

<!--more-->

### Changelog

#### 🚀 Added

- CLI: Option `--rc-start-node` to sub-command `node` added.
- CLI: Option `--unavailability-cause` to sub-command `version` added.
- CLI: Sub-command `node-rc peers` added.
- CLI: Sub-command `sdon` added.
- [`EventTypeDrasylNode`](drasyl-examples/src/main/java/org/drasyl/example/EventTypeDrasylNodeExample.java) added.
- `DrasylNode` will now check local time is correct on start as this is mandatory for drasyl protocol to work.
- [`InboundExceptionEvent`](drasyl-node/src/main/java/org/drasyl/node/event/InboundExceptionEvent.java) now contains exception in string presentation.
- `DrasylConfig`: Option `drasyl.remote.tcp-fallback.connect-port` added.
- Boolean system property `org.drasyl.pub-key.interning` added to disable interning of IdentityPublicKeys, as this could have a negative impact on performance..

#### 💅 Changed

- Dependencies have been updated.
- TCP fallback now connects to all super peers.
- Application messages are not longer passed through the `DrasylServerChannel` (this was a performance bottleneck).
- CLI: Option `--ack-interval` from sub-command `wormhole receive` removed (the new reliability layer determines this value automatically).
- CLI: Options `--window-size` and `--window-timeout` from sub-command `wormhole send` removed (the new reliability layer determines this value automatically).
- `DrasylConfig`: Options `drasyl.remote.message.mtu`, `drasyl.remote.message.max-content-length`, `drasyl.remote.message.composed-message-transfer-timeout`, `drasyl.remote.message.arq` removed (the new reliability layer determines this value automatically).
- `DrasylConfig`: Options `drasyl.remote.tcp-fallback.timeout`, `drasyl.remote.tcp-fallback.address` removed.
- Improved performance in inbound and outbound message processing by reducing task scheduling overhead. Instead of creating a separate task for each message, a single task now processes entire batches of reads and writes. Additionally, fewer Java objects are created, and zero-copy techniques are applied more frequently where possible.

#### 🐛 Fixed

- CLI: ensure wormhole sender/receiver handlers gracefully stop when connection is lost.
- CLI: fix `tunnel` sub-command.
- Receiving multiple `UNITE` messages will now trigger new `HELLO` messages only if new endpoints have been reported.

---

Photo by [Anton Filatov](https://unsplash.com/de/@antony123antony) on [Unsplash](https://unsplash.com/)
