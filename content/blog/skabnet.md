---
title: "SkABNet: A Attribut-Based SkipNet built on drasyl"
date: 2021-06-14T10:00:00+01:00
tags: ["research", "software", "use case"]
---

![SkABNet logo](/img/skabnet_logo.png)

Today we would like to present you another use case of drasyl: A colleague of ours developed a distributed data structure based on the [SkipNet](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-2002-92.pdf) presented by Microsoft. In addition to that, he added capabilities to store multi-attributed data on a SkipNet.
<!--more-->
#### Abstract
>In distributed sensor networks, finding data sources is a particular challenge.
>Users and their provided services depend on the different collected data and on an efficient discovery of existing data sources.
>
>Since sensor data is very ephemeral and privacy is also of great importance in a citizen-operated network, data cannot be stored multiple times in the network on different nodes as in conventional approaches.
>Rather, it must be possible to locate the exact data sources in the distributed network and query their data.
>For this purpose, we have developed an attribute-based approach on the distributed data structure "SkipNet".
>This allows to describe data sources with different attribute-value pairs, which can be used to find them in an efficient time.
>
>With the help of these attribute-value pairs and the search we have adapted, all sensors of a certain type, for example, are now grouped at a defined location and can thus be found efficiently.
>
>However, the SkABNet approach is not limited to our use case.
>It is designed in such a way that any other information in distributed networks can be located.
>For this, only the attribute-value pairs have to be defined differently.

Further optimizations are planned for the future: For example, it should be possible for searchers to be continuously informed about new data sources to prevent repeated searches. The current development status can be found in his public [Git repository](https://git.informatik.uni-hamburg.de/sane-public/skabnet).