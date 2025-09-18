---
title: Bringing Computation Offloading to the Edge
date: 2022-02-03 15:06:00+01:00
tags:
- theses
- research
- use case
images:
- jake-ingle-s-t1oJXKYI4-unsplash.jpg
author: Heiko Bornholdt
---


Today's post is about the master thesis "A Secure Context-Aware Middleware for Computation Offloading in Untrustworthy, Open, and Dynamic Edge Environments" by Kevin Röbert.
In his master's thesis, Kevin Röbert designed, implemented, and evaluated a system capable of offloading computations to the cloud, grid, and edge devices.
He integrated drasyl into the [Tasklet](https://scholar.google.com/scholar?hl=en&q=tasklet+system) computation offloading middleware.

<!--more-->

The Tasklet middleware can encapsulate small application tasks into compiled, hardware-agnostic computation units – so-called Tasklets.
These Tasklet can then be transferred to and executed on other devices.
This middleware focuses on the abstraction of the heterogeneity of the computation devices as well as providing quality of services goals (e.g., time, accuracy, location) to meet applications' requirements.
The authors state that by utilizing (idle) devices at the edge, the overall service quality of applications can be improved compared to cloud-only offloading.
However, the current Tasklet implementation is incapable of real-world operations like the Internet.
The implementation lacked typical P2P functionalities, like secure communication, IP agnostic peer identifiers, or NAT traversal.
Providing NAT traversal is especially important because edge devices are almost always operated in NATed environments.
This would mean that the Tasklet system cannot utilize these resources in the real world.

Therefore, the Tasklet system has posed a suitable use case to evaluate the feasibility of our drasyl framework approach.
By using drasyl for any communication, the Tasklet system was able – with minor modification – to utilize edge resources.
The feasibility of this idea has been proven in this thesis and it was shown that edge devices provide a competitive alternative to cloud offloading.
The thesis is available in the Universität Hamburg library.
Furthermore, a publication of the results is planned for the future.

Get in touch with us if you're interested in this prototype.

---

Photo by [Jake Ingle](https://unsplash.com/@ingle_jake) on [Unsplash](https://unsplash.com/)