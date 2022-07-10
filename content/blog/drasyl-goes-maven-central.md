---
title: "drasyl goes Maven Central"
date: 2020-07-14T02:38:00+02:00
tags: ["releases"]
---

Today we are releasing drasyl 0.1.2.
Apart from some bug fixes, this release comes with a pleasant change: Starting with this version, we're publishing drasyl releases to [Maven Central](https://mvnrepository.com/artifact/org.drasyl/drasyl-core).
This means adding our Maven repository to `pom.xml` is no longer necessary.
<!--more-->
From now on, the following snippet is enough:
```xml
<dependency>
    <groupId>org.drasyl</groupId>
    <artifactId>drasyl-core</artifactId>
    <version>0.1.2</version>
</dependency>
```