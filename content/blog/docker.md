---
title: "Run drasyl CLI through Docker"
date: 2020-07-17T12:11:00+01:00
tags: ["cli"]
images: ["img/timelab-pro-sWOvgOOFk1g-unsplash.jpg"]
---

![Lot of cargo freight containers in the Hong Kong sea port](/img/timelab-pro-sWOvgOOFk1g-unsplash.jpg)

The [drasyl CLI](https://docs.drasyl.org/cli/) can now be used within a Docker Container.
To do so, we've uploaded the [current release on Docker Hub](https://hub.docker.com/repository/docker/drasyl/drasyl).

<!--more-->

### Mini How To

Get help:

```bash
$ docker run -i -t drasyl/drasyl version
Usage:
  drasyl [flags]
  drasyl [command]

Available Commands:
genidentity    Generate and output new Identity.
version        Show the version number.
help           Show help for drasyl commands and flags.
node           Run a drasyl node.

Flags:
-h,--help      Show this help.

Use "drasyl [command] --help" for more information about a command.
```

Run a node:

```bash
# 1. generate an identity (this can take some time)
$ docker run -i -t drasyl/drasyl genidentity | grep -v "WARNING:" > drasyl.identity

# 2. start the node
$ docker run -i -t -p 22527:22527 \
    -v $PWD/drasyl.identity:/drasyl.identity \
    drasyl/drasyl node
````
This command passes the generated identity to the docker container and launches the drasyl node command.

---

Photo by [Timelab Pro](https://unsplash.com/@timelabpro) on [Unsplash](https://unsplash.com/)