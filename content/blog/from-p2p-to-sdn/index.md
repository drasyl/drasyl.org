---
title: 'drasyl: From Peer-to-Peer Library to Software-Defined Networking Platform'
date: 2025-08-10 23:44:16+02:00
tags:
- Releases
- SDN
- P2P
- Rust
- Java
- Research
- Use Case
images:
- suzanne-d-williams-VMKBFR6r_jg-unsplash.jpg
author: Heiko Bornholdt
---



## Origins and Motivation

[Five years ago](https://drasyl.org/blog/drasyl-0-1-0-released/), our work on drasyl began within the [SANE research project](https://web.archive.org/web/20231201155219/https://sane.city/), which aimed to enable decentralized, secure, and privacy-preserving data sharing between citizens and institutions. Achieving this required direct, efficient, and secure communication, even across communication barriers prevalent on the Internet such as NATs, firewalls, and IPv4/IPv6 incompatibilities.

Established solutions like WebRTC, while functional, rely on layered protocol stacks (STUN, TURN, SIP, DTLS) that add infrastructure dependencies, complex handshake procedures, multiple points of failure, and increased connection latency. These characteristics did not align with our architectural and operational requirements.

We envisioned a system as seamless as opening a local socket, while still providing location transparency, mutual authentication, end-to-end encryption, and the flexibility to construct custom overlay topologies. drasyl became this foundation, abstracting away Internet communication complexities so development could focus on application-level logic.

## Evolving into a Networking Platform

drasyl’s ability to connect arbitrary peers with low latency and high reliability soon proved valuable beyond SANE. What began as an application-layer P2P library evolved into a Layer 3 IP-based overlay networking platform with integrated software-defined networking (SDN) capabilities.

Two recurring needs drove this shift:
- Transparent integration at the network layer, enabling unmodified IP-based applications to leverage drasyl.
- Support for flexible membership management, topology design, and routing control, which are critical for many application domains.

We built drasyl on Java with [Netty](https://netty.io) as the networking backbone. While Netty provided a solid high-performance framework, its Layer 7 focus required significant additional work for Layer 3 support. We developed our own [TUN adapter](https://github.com/drasyl/netty-tun) using JNA, followed by a high-performance `epoll`/`kqueue` variant tightly integrated with Netty. Although we created a [pull request for Netty](https://github.com/netty/netty/pull/12960) over two years ago, we did not succeed in getting it merged. Without upstream adoption, integrating it into drasyl would have required maintaining a custom Netty build, which was not feasible.

Looking back, high-performance networking on the JVM is possible, but it demands substantial engineering effort: developing our own [TUN adapter](https://github.com/drasyl/netty-tun), [integrating with platform-specific APIs](https://netty.io/wiki/native-transports.html), [bypassing JVM abstractions to reduce overhead](https://netty.io/wiki/reference-counted-objects.html#the-bytebuf-allocator), and [building native images](https://www.graalvm.org/reference-manual/native-image/) for JRE-free deployment. These measures, while effective, diverge from the JVM’s original aim of providing an abstract, platform-independent runtime and consumed substantial time that could have been spent on feature development.

## A Fresh Start in Rust

After completing my [dissertation](https://drasyl.org/blog/drasyl-dissertation-published/), we decided to rebuild drasyl on a foundation more suited to an SDN platform. The programming language Rust was chosen for its combination of C/C++-level performance and control with strict memory and thread safety, achieved without a garbage collector. This combination enables the efficient development of high-performance, reliable networking applications while retaining portability and avoiding JVM-specific tuning.

This was not a direct port. We reengineered every component, including the P2P protocol and SDN management, while ensuring compatibility with the Java library. Development of the Rust-based implementation is publicly available at [github.com/drasyl/drasyl-rs](https://github.com/drasyl/drasyl-rs).

## Redefining drasyl: Focus on SDN

Today, drasyl is a comprehensive software-defined overlay networking platform, capable of interconnecting heterogeneous devices and orchestrating data flows with precise control over network behavior. To reflect this transformation, we revised our project naming:

- **drasyl** → Rust-based SDN platform (formerly the Java-based P2P library and its extensions)
- **drasyl-p2p** → Rust-based peer-to-peer library
- **drasyl-java** → Legacy Java library

The documentation for `drasyl-java` is now located at [docs.java.drasyl.org](https://docs.java.drasyl.org), while [docs.drasyl.org](https://docs.drasyl.org) serves as the central documentation hub for the SDN platform. Docker images and Homebrew packages follow the same naming convention.

We remain committed to maintaining `drasyl-java`, which has integrated the Rust-based P2P implementation since version 0.13 and will continue to benefit from future improvements. The first release of the new SDN platform is in its final testing phase, and we invite you to join our [Discord](https://drasyl.org/discord) to follow our latest developments.

---

Photo by [Suzanne D. Williams](https://unsplash.com/de/@scw1217) on [Unsplash](https://unsplash.com/)

