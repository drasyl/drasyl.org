---
title: "drasyl 0.3.0 released with Network Separation, and Groups Plugin"
date: 2020-10-30T12:43:00+01:00
tags: ["releases"]
images: ["img/andrew/andrew-moca-r3Nl1mIKqbI-unsplash.jpg"]
author: "Heiko Bornholdt"
---

Today, we are excited to announce the release of drasyl 0.3.0 with network separation, groups plugin, and some performance tweaks.

<!--more-->

### Changelog

#### Added
- Each node now belongs to a certain network ID. Connections between nodes will occur only if both.
peers use the same network ID. The main network has ID 1 (see configuration `drasyl.network.id`).
- Added drasyl groups plugin for membership management.
- Added support for netty's Epoll channels and event loops.
- Plugins can now access the node's identity.

#### Changed
- All `drasyl.marshalling` config properties will now distinct between allowed outgoing and ingoing types. Config must be updated according to our documentation.
- `drasyl-core` now only depends on slf4j and no longer on logback. As part of this, the methods.
`DrasylNode.getLogLevel()` and `DrasylNode.setLogLevel()` have been removed and the configuration.
`drasyl.loglevel` has been removed.
- Nodes now only accept children joins if they are configured as a super-peer (`drasyl.super-peer.enabled = false`).
- Removed grandchildren nodes. The hierarchy is now limited in depth.
- All-new plugin interface.
- Changed docker base image from `drasyl/drasyl-build-images:jre-11-curl-7.64.0` to `openjdk:11-jre-slim` and removed default HEALTHCHECK.
- Enhanced JavaDoc.
- Changed `TypeValidator` to distinguish between in- and outbound messages.
- EmbeddedPipeline was generalized to simplify handler testing.
- Node now checks if the permissions of the identity file are too open (POSIX file systems only).
- Changed `Pipeline.processInbound` to accept `RelayableMessage`.
- Endpoints defined in `drasyl.super-peer.endpoints` must now always include the super peer's public key.

#### Fixed
- Fixed memory-leaks of certain immutable classes.
- Fixed `DefaultPipeline.addBefore` method.
- Fixed error in IntraVM discovery which has delivered events around the pipeline directly to the application.
- Several minor bug fixes.

---

Photo by [Andrew Moca](https://unsplash.com/@mocaandrew) on [Unsplash](https://unsplash.com/)