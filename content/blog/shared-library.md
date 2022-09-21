---
title: "DrasylNode as Shared Library"
date: 2022-09-21T18:18:00+02:00
tags: ["native", "C", "library"]
images: ["img/alfons-morales-YLSwjSy7stw-unsplash.jpg"]
---

![A library.](/img/alfons-morales-YLSwjSy7stw-unsplash.jpg)

We are excited to announce our blazing fast and native version of DrasylNode as a shared C library. This was achieved by translating Java code with the required JDK runtime elements into native code using the [GraalVM](#about-native-image).
<!--more-->
The source code can be found, as always, at [GitHub](https://github.com/drasyl-overlay/drasyl/tree/master/drasyl-shared-library) together with build instructions. 

## About Native Image

> Native Image is a technology to ahead-of-time compile Java code to a standalone executable,
> called a native image. This executable includes the application classes, classes from its
> dependencies, runtime library classes, and statically linked native code from JDK. It does not
> run on the Java VM, but includes necessary components like memory management, thread scheduling,
> and so on from a different runtime system, called “Substrate VM”. Substrate VM is the name for
> the runtime components (like the deoptimizer, garbage collector, thread scheduling etc.). The
> resulting program has faster startup time and lower runtime memory overhead compared to a JVM. --- Source: https://www.graalvm.org/reference-manual/native-image/

## Supported Platforms

We will also provide pre-compiled versions for the following architectures in the next release:

- Linux
    - x64
    - arm64
- macOS
    - x64
    - aarch64
- Windows
    - x64

For the ones that can't wait until the next release, pre-compiled versions exist as artifacts of the [`Build Shared Library` GitHub action](https://github.com/drasyl-overlay/drasyl/actions/workflows/build-shared-library.yml).

---

Photo by [Alfons Morales](https://unsplash.com/@alfonsmc10) on [Unsplash](https://unsplash.com/)