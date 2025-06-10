---
title: "Announcing drasyl 0.12.0: A New Core, Rewritten in Rust"
date: 2025-06-10T21:25:26+02:00
tags: ["releases"]
images: ["img/derailed-drips-Q5cT8yw7V3Q-unsplash.jpg"]
---

![](/img/derailed-drips-Q5cT8yw7V3Q-unsplash.jpg)

We are excited to announce the release of **drasyl 0.12.0**. In addition to several bug fixes and dependency updates, this version brings a fundamental transformation:
**The core of the drasyl peer-to-peer network has been completely re-engineered.**

<!--more-->

## From Java to Rust: Why We Rewrote drasyl’s Core

When the drasyl project began as a university research initiative at the University of Hamburg, Java was a natural choice. It’s the language taught to all computer science students at our university, and we wanted to encourage student contributions from the very beginning. Furthermore, drasyl originally aimed to be a general-purpose P2P library, and Java offered seamless integration in that role.

However, over the years, drasyl has evolved. Its primary use case shifted from being a developer-focused library to serving as a full-fledged middleware for creating **software-defined networks**, especially tailored for **edge computing scenarios**. Using TUN interfaces, drasyl now enables any IP-based application to communicate over a virtualized peer-to-peer network — as if all devices were part of the same unrestricted local network.

This shift in focus exposed the limitations of our Java-based implementation. Performance was constrained, and the JVM’s memory and runtime overhead made it unsuitable for low-resource or embedded environments. We also repeatedly heard from users who were reluctant to adopt a solution requiring a full Java Runtime Environment, especially on lightweight devices.

While these constraints didn’t directly affect my own research goals, they made the software less attractive for real-world applications. After successfully defending my dissertation last year, I made the decision to rebuild the drasyl core in a systems programming language, free from legacy assumptions. The result is what we are shipping today.

## Why Rust?

Rust was the obvious choice: modern, memory-safe, and offering low-level control comparable to C, but with a much stronger safety model. Personally, I also welcomed the opportunity to learn a new language with strong momentum in the systems and networking communities.

Rewriting drasyl’s core was not just a port — it was a redesign. We used this opportunity to streamline our protocol, remove outdated or unused features, and reduce unnecessary overhead.

We also replaced our previous stream cipher (XChaCha20) with **AEGIS**, a newer, high-performance cipher designed for both software and hardware environments. While AES with hardware acceleration remains an option for the future, AEGIS offers excellent performance regardless of hardware support.

Additionally, we introduced a short header format, reducing protocol overhead from ~100 bytes to just 4 bytes.

### The Results

Our initial benchmarks are promising:
* Up to 20× higher throughput
* Only 10MB RAM usage at runtime
* Minimal CPU overhead

These are improvements we could only dream of with the Java version.

## Bridging Java and Rust

Despite the performance advantages of the Rust implementation, the Java version of drasyl still offers a more expressive API for traffic shaping and protocol design. It remains a great tool for building custom P2P applications with fine-grained control.

To avoid maintaining two independent protocol stacks, we’ve restructured the Java version to **delegate core networking operations to the new Rust implementation**. Starting with version 0.12.0, the Java runtime is now backed by the Rust core.

In an ideal scenario, this change should be invisible to developers. However, given the scope of the reimplementation, some behavioral differences may arise. We expect to release a few follow-up patches to address these and appreciate any feedback from the community.

## What’s Next?

Our next major goal is to migrate additional layers of drasyl’s functionality from Java to Rust — in particular, our **reliability layer**, a custom, userspace implementation of TCP-like behavior. While not TCP-compatible, this layer draws heavily from TCP’s design and algorithms, including congestion control.

In Java, we had no choice but to implement this ourselves due to a lack of suitable libraries. In Rust, the ecosystem is much more mature when it comes to networking. We are currently evaluating existing Rust libraries for userspace reliability and plan to integrate one into drasyl in a future release.



This release marks a significant milestone for drasyl. We’re proud of what we’ve achieved and are eager to hear your thoughts. Stay tuned — there’s much more to come.

---

Photo by [Derailed Drips](https://unsplash.com/de/@deraileddrips) on [Unsplash](https://unsplash.com/)
