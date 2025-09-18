---
title: drasyl 0.10.0 released with performance improvements, fixes, and globally distributed
  super peers
date: 2023-01-31 20:27:00+02:00
tags:
- releases
images:
- nasa-Q1p7bh3SHj8-unsplash.jpg
author: Heiko Bornholdt
---


Today, we are excited to announce the release of drasyl 0.10.0.
This maintenance release brings performance improvements and a new set of globally distributed super peers resulting in faster peer discovery, connection establishments, and traffic relaying performance.

<!--more-->

### Changelog

#### 🚀 Added

- `DrasylConfig.newBuilder()` will now validate serialization bindings.
- CLI: Option `--no-application-arming` to sub-command `tun` added.
- Boolean system property `org.drasyl.nonce.pseudorandom` added which can be used to use cheaper nonces using pseudorandom source (should not be used in production environments).

#### 💅 Changed

- Dependencies have been updated.
- Super peers in Frankfurt, Germany and Nuremberg, Germany have been replaced with globally more distributed super peers in Baden-Baden, Germany; Logroño, Spain; New York City; and Singapore.
- General performance improvements.
- drasyl is now using kqueue or epoll on supported platforms.

#### 🐛 Fixed

- CLI: Fixed problem that prevents a `node` from being remote-controlled via HTTP.
- Class `org.drasyl.handler.PeersRttHandler.PeerRtt` is now public.

### New Super Peers

Super peers help drasyl nodes to discover peers and establish direct connections.
They also relay messages if a direct connection is not possible.

Up to now, two super seers in our home country -- Germany -- have been used for this: One in Frankfurt and another in Nüremberg.
Therefore, users from Germany benefited from fast peer discovery, connection establishment, and message relaying.
For users in other, geographically more distant regions, the latency was higher and these processes generellay took longer.
Starting with version 0.10, we have now [increased the number of super peers to four](https://docs.java.drasyl.org/public-super-peers) and also distributed them more globally.
The new super peers are located in New York City; Logroño, Spain; Baden-Baden, Germany; and Singapore.
Since drasyl automatically prefers the closest super peer, more users now benefit from faster super peer connections.

The availability of the drasyl network has also been increased, as three instead of one simultaneous super peer failures can now be tolerated.

Since the old super peers have already been retired, drasyl nodes up to version 0.9 have been automatically migrated to the two super peers in Spain and Germany.

---

Photo by [NASA](https://unsplash.com/de/@nasa) on [Unsplash](https://unsplash.com/)
