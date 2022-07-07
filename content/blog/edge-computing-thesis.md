---
title: "Bringing Computation Offloading to the Edge - drasyl Use case"
date: 2022-02-03T15:06:00+01:00
tags: []
draft: true
---

![Feet dangling from a building](/img/jake-ingle-s-t1oJXKYI4-unsplash.jpg)

Today's post is about the master thesis "A Secure Context-Aware Middleware for Computation Offloading in Untrustworthy, Open, and Dynamic Edge Environments" by Kevin Röbert.
In his master's thesis, Kevin Röbert designed, implemented, and evaluated a system, capable to offload computations to cloud, grid, and edge devices.
To achieve this, he integraded drasyl into the [Tasklet system](https://scholar.google.com/scholar?hl=en&q=tasklet+system) computation offloading middleware.

<!--more-->

The Tasklet middleware is able to encapsulate small application tasks into compiled, hardware-agnostic units of computation - so-called Tasklets.
These Tasklet can then be transfered to and executed on other devices.
This middleware focuses on the abstraction of the heterogeneity of the computation devices as well as providing quality of services goals (e.g. time, accuracy, location) to met applications' requirements.
The authors state, that by utilizing (idle) devices in the edge, the overall service quality of applications can be improvded compared to cloud-only offloading.
However, the current Tasklet implementation is not really capable for real word operation such as the Internet.
The implementation was lacking of common P2P functionalities, like secure communication, IP agnostic peer identifiers, or NAT traversal.
Providing NAT traversal is especially important, because edge devices are almost always operated in NATed environments.
In a real world, this would mean that the Tasklet system cannot utilize these resources.

Therefore, the Tasklet system has posed a suitable use case to evaluate the feasibility of our drasyl framework approach.
By using drasyl for any communication, the Tasklet system was able - with minor modification - to utlize edge resources.
Kevin has proven the feasibility of this idea in his thesis and was also able to show, that edge devices provides a competitive alternative to cloud offloading.
His work is available in the Universität Hamburg library.
Furthermore, a publication of his results is planned for the future.

---

Photo by [Jake Ingle](https://unsplash.com/@ingle_jake) on [Unsplash](https://unsplash.com/)