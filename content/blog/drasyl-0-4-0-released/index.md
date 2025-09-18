---
title: drasyl 0.4.0 released with UDP Hole Punching, Message Chunking, and Bandwidth
  Measurement Utility
date: 2021-02-27 22:13:00+01:00
tags:
- releases
- cli
images:
- dan-burton-nRW4I8kuyd8-unsplash.jpg
author: Heiko Bornholdt
---


Today, we are excited to announce the release of drasyl 0.4.0 with UPD hole punching, message chunking, in-process discovery, static routes, and network bandwidth measurement utility.

<!--more-->

### Changelog

#### Added

- Hole Punching is now used to traverse NATs. This should dramatically increase the proportion of
  direct connections between peers.
- Messages that are too large for a single UDP datagram are now automatically split into multiple
  datagrams (and re-assembled on the receiving side).
- When changing the network, new port mappings are now automatically created on the new network.
- `DrasylNode`'s API has been enhanced with `@NotNull` and `@Nullable` annotations.
- Messages that can be delivered within the same JVM are now passed by reference (previously these
  messages have been unnecessarily serialized). 
  **So make sure you either send copies of your objects or it's 
  fine for other nodes to make changes to that object.**
- Static routes to other remote peers can now be defined. This allows discovery to be omitted in
  static environments (or test setups).
- **Messages with content `null` are now possible.**
- `perf` command has been added to the CLI. This allows you to run performance tests of connections.
- Each node can now have several super peers simultaneously. The fastest super peer will
  automatically be used. If one or more super peers fail (temporarily), one of the remaining super
  peers will automatically be used. By default, each node will use two of our super peers.
- New examples have been added:
  https://github.com/drasyl/drasyl/tree/master/drasyl-examples/src/main/java/org/drasyl/example
- Nodes can now be implemented as finite state machines (see our example of the philosopher
  problem: https://github.com/drasyl/drasyl/tree/master/drasyl-examples/src/main/java/org/drasyl/example/diningphilosophers).

#### Changed

- By default, each node now listens on a port in the range 22528 and 65528, which is derived from 
  its identity. This means that the chance for a port collision is now reduced when
  multiple nodes are running on one computer.
- UDP is now used instead of TCP for communication with remote peers.
- The entire protocol for constructing the overlay network has been revised (it's far better now!).
- Messages are now serialized in binary. This is faster and creates smaller messages on the wire.
- If possible, messages are processed using zero-copy.
- Documentation has been revised (Javadoc and/or documentation at https://docs.java.drasyl.org).
- Messages can now be additionally serialized by protobuf or Java. Furthermore, own serializers can
  be implemented. Read more at https://docs.java.drasyl.org.
- The third-party portmapper library has been replaced with our own more lightweight 
  and more resilient implementation.
- All dependencies have been updated to the latest versions.

#### Fixed

- `IntraVmDiscovery`: Other nodes running within the same JVM that belongs to a different overlay
  network are now ignored.
- `LocalHostDiscovery`: Other nodes running on the same local computer that belong to a different
  overlay network are now ignored.
- Content of received messages is now better verified before it is deserialized.
- Unchecked exceptions thrown by `DrasylNode.onEvent` no longer produce ridiculously long error
  messages.

### Network Bandwidth Measurement Utility

To evaluate the performance of drasyl or specific functions, we added the tool perf to the CLI, which can measure the drasyl network bandwidth between two peers. We were inspired by [iperf3](https://github.com/esnet/iperf), which measures TCP/UDP traffic.

---

Photo by [Dan Burton](https://unsplash.com/@dan__burton) on [Unsplash](https://unsplash.com/)