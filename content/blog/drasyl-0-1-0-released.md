---
title: "drasyl 0.1.0 released - The Journey Begins!"
date: 2020-07-10T15:36:00+01:00
tags: ["Releases"]
draft: true
---

![Highway 212 forest road](/img/matt-duncan-IUY_3DvM__w-unsplash.jpg)

Today, we are excited to announce the very first release of drasyl 0.1.0.
drasyl is an open source, general purpose overlay network that is concurrent, resilient, flexible, automated and presents itself to the user as a transparent system which offers suitable discovery and awareness methods, particularly with a focus on smart city and IoT devices.
Nevertheless, drasyl is not limited to smart city and IoT, but is intended for universal use in all decentralized Java-based projects.

<!--more-->

You can either include this implementation in your own software stack and make use of the overlay network as a transport medium.

### Our motivation to develop drasyl

drasyl was born out of personal need:
The <a href="https://sane.city">SANE research project</a> aims to create a digital twin of a city.
This twin is to be realized as a decentralized and open data space.
The open data space enables citizen participation, allowing them to easily publish or subscribe to data in this space.
For this purpose, we have designed a single-board computer ( comparable with a Raspberry Pi), which can be operated in the citizen's residential network.
These computers are supposed to interconnect, organize and share data with each other.
To create a high resilience and low dependencies on third parties, the system will be realized as a structured P2P network.
Since the Internet is a P2P-unfriendly environment, some obstacles (e.g., Network Address Translation, dynamic IP addresses, etc.) have to be overcome to realize the planned data space.

In this context, the feasibility of our the approach will be verified by protoypical implementations.
So we analyzed existing solutions for the development of distributed applications and had to realize that they did not meet our requirements adequately (e.g., JXTA: project abandoned, not executable in modern environments, unfixed bugs; Jadex/Akka: make assumptions on the software paradigm to be used, like SOA or the actor model).
In addition, we felt that many of the existing solutions were too clumsy and cluttered with functions that we didn't need and couldn't disable.
We just wanted a global adress namespace and an easy interface for peer communication. Basically, like a Berkeley socket for each peer.
When using this interface, it should not matter where the peer is located (e.g. LAN, WAN, behind a NAT, etc).

This idea - an easy-to-use I/O interface for peer communication - was then implemented in a university teaching course:
A publicly accessible server served as the central contact point for all nodes.
All communication is routed via this server to the actual destination node.
This star network topology represents - without a doubt - a single point of failure, but it is very simple and provided us with exactly the functionality we needed.
This was a sufficient solution for the course, as it allowed us to deal with the actual interessting topic: the realization of the data space.

During the course, the idea arose to expand the functionality of this input/output interface (e.g., enabling p2p connections, encrypt traffic) and to make it available as a stand-alone library.
After the course, this idea was filed as a base.camp project and was started shortly afterwards by Kevin Röbert, a former participant student of the course.

Currently, the base.camp project is still running and implementation work is still in progress.
Therefore, version 0.1.0 represents the minimum viable product of our software vision and we hope that many new features and releases will follow.

### How can I use drasyl?

#### Requirements

* Java 11

#### Installation

##### Maven

Either build and install drasyl by yourself...
```bash
mvn install
```

...or pull it from public repo:

Add GitLab Maven Repository to `pom.xml`:
```xml
<repositories>
    <repository>
        <id>gitlab-maven</id>
        <url>https://git.informatik.uni-hamburg.de/api/v4/groups/sane-public/-/packages/maven</url>
    </repository>
</repositories>
```

Add drasyl as dependency to your `pom.xml`:
```xml
<dependency>
    <groupId>org.drasyl</groupId>
    <artifactId>drasyl-core</artifactId>
    <version>0.1.0</version>
</dependency>
```

##### Official Builds

https://git.informatik.uni-hamburg.de/sane-public/drasyl/-/releases

##### Usage

```java
// create and start node
DrasylNode node = new DrasylNode() {
    @Override
    public void onEvent(Event event) {
        // handle incoming events (messages) here
        System.out.println("Event received: " + event);
    }
};
node.start();

// wait till EVENT_NODE_ONLINE has been received

// send message to another node
node.send("025eb0dc5d", "Hello World");

// shutdown node
node.shutdown();
```

More information can be found in the (still very short) [documentation](https://git.informatik.uni-hamburg.de/sane-public/drasyl/blob/v0.1.0/doc/README.md).

---

Photo by [Matt Duncan](https://unsplash.com/@foxxmd) on [Unsplash](https://unsplash.com/)