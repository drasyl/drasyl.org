---
title: "drasyl 0.5.0 released with E2E Encryption, LAN Discovery, and TCP Fallback"
date: 2021-06-28T23:39:00+01:00
tags: ["Releases"]
draft: true
---

![Brass Color Metal Padlock With Chain](/img/pexels-life-of-pix-4291.jpg)

Today, we are excited to announce the release of drasyl 0.5.0 with end-to-end encryption, an IP multicast-based peer discovery, and TCP-fallback if UDP is blocked.

<!--more-->

### Changelog

#### Upgrade Notes

- The identities must be replaced by a new one. Just delete the old `drasyl.identity.json` and let
  drasyl generate a new one.
- If you're using a custom configuration with super peer defined, make sure to use (our) super peers
  running 0.5.0.

#### Added

- Multicast is used to discovery other nodes running within the same network.
- TCP is used as fallback if UDP traffic is blocked.
- Experimental support for native image added.
- All traffic is now end-to-end encrypted 🎉.
- kqueue is used on macOS based systems for better performance.
- epoll is used on linux based systems for better performance.
- An `InboundExceptionEvent` is emitted every time an inbound message could not be processed.
- Support for Apple Silicon added.
- Backpressure mechanism for outbound messages added.

#### Changed

- Switched to MIT License.
- `DrasylNode#send()` will now return an `CompletationStage` instead of an `CompletableFuture`.
- Dependencies have been updated.
- Maven module `parent` has been renamed to `drasyl-parent`.
- Class `CompressedPublicKey` has been renamed to `IdentityPublicKey`.

---

Photo by [Life Of Pix](https://www.pexels.com/de-de/@life-of-pix/) on [Pexels](https://www.pexels.com/)