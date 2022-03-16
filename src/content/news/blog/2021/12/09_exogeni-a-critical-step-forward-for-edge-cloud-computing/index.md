---
title: ExoGENI: A critical step forward for edge cloud computing
subtitle: 
slug: exogeni-a-critical-step-forward-for-edge-cloud-computing/
link: https://renci.org/blog/exogeni-a-critical-step-forward-for-edge-cloud-computing/
publishDate: 2021-12-09
author: jayasree-jaganatha
featuredImage: ![ExoGENI Blog Option 2-01](https://user-images.githubusercontent.com/68300939/158511172-9aca7dee-89d4-444a-9762-16e8e4f28777.png)
groups:
    - nri
projects:
    - exogeni
    - chameleon-cloud
    - fabric
people:
    - ilya-baldin
    - paul-ruth
    - yufeng-xin
    - anirban-mandal
    - mert-cevik
    - komal-thareja
teams: 
    - 
collaborations:
    - 
tags:
    - testbed
    - networking
    - high-performance-computing
    - data-storage
---

![ExoGENI Blog Option 2-01](https://user-images.githubusercontent.com/68300939/158511172-9aca7dee-89d4-444a-9762-16e8e4f28777.png)


After more than eight years in operation, the [ExoGENI](http://nrig.renci.org/project/exogeni-testbed/) testbed is in the process of being decommissioned. RENCI researchers played leading roles in building, maintaining, and expanding the testbed, which provided a full-scale cloud system that thousands of researchers have used to test and deploy cutting-edge applications.

ExoGENI is one of two components that made up the NSF-funded Global Environment for Network Innovations ([GENI](https://www.geni.net/)) virtual laboratory project. Growing out of the need for a system to allow reproducible research involving computer science systems, distributed systems, and protocols, GENI was established to provide an open infrastructure for at-scale networking and distributed systems research and education across the U.S.

The ExoGENI testbed helped to pioneer edge cloud computing. This type of distributed computing uses many small computing installations rather than large, centralized computing resources located in a few places. Edge cloud computing speeds up data processing because computation and data storage is performed closer to the sources of data. Today, this computing approach is used for applications ranging from 5G mobile phone networks to autonomous driving.

### Creating solutions on the fly

When ExoGENI started, the GENI Project office asked for a system that could be used as soon as possible because this type of technology can quickly become outdated. "Since ExoGENI was being deployed while it was still being built, the project office referred to the development process as trying to fly a plane while you're still building it," said Ilya Baldin, principal investigator for ExoGENI and director of network research and infrastructure at RENCI. "That ended up being a very apt analogy."

Working with researchers led by Jeff Chase from Duke University, Baldin's team at RENCI developed the hardware and software needed to create the ExoGENI cloud system as well as the middleware that controls access to the testbed. This involved figuring out how to structure software development and how to deal with users for a completely new type of system. The system was based on software that Chase's team developed for managing cloud installations.

"We were creating something that didn't exist before," said Baldin. "ExoGENI was the first testbed to offer dynamic circuit capabilities, which allows users to specify network services in real time." The system also offered the ability to stitch resources together. This allows users to connect cloud resources to network links, combine network links from multiple providers, and ensure that computing resources are provisioned in the proper order.

Yufeng Xin and Anirban Mandal, now assistant directors of network research and infrastructure at RENCI, were both part of the early team developing ExoGENI. Later in the project, Mert Cevik became the ExoGENI system administrator, and Komal Thareja contributed code that was necessary for maintaining and adding new features to the testbed.

Senior Research Scientist Paul Ruth contributed work that allowed ExoGENI and a cloud-based testbed known as [Chameleon](http://nrig.renci.org/project/chameleon/) to work together, making it possible to run experiments using both testbeds. "His work led to some important cross-testbed experiments," said Baldin. "This is an interesting area of activity because a single testbed doesn't always meet all the needs for a given experiment."

### A much-needed tool

As an experimental instrument, ExoGENI has made countless important projects possible. "In the process of using ExoGENI to perform research, we would add new features as needs arose," said Baldin. "It was quite rewarding to see these improvements having an impact on other researchers and their work, almost immediately."

One of these projects was co-led by Mandal and Michael Zink from the University of Massachusetts. The team used ExoGENI's edge cloud capability to process near-ground weather data from a radar network in the Dallas/Fort Worth area of Texas as part of the NSF's Engineering Center for Collaborative Adaptive Sensing of the Atmosphere (CASA).

Weather and the data associated with it can change very quickly during a severe storm or tornado. The radar network uses Chameleon's ability to connect with ExoGENI to quickly ramp up computing resources when hazardous weather conditions arise. The ability to harness the computing power needed to rapidly analyze large amounts of data can help improve observation and prediction of hazardous weather events, while keeping computing resources open for other uses during routine operations.

A research team headed by Aranya Chakrabortty at North Carolina State University collaborated with Xin to experiment with power grid monitoring using the ExoGENI testbed. With more heterogeneous power sources and more sensors available to monitor power data, there is a need for better ways to analyze that data in real time. The researchers linked real-time data from power grid sensors collecting as many as 120 data points per second to on-demand computing resources at ExoGENI nodes throughout the U.S. This let them test data-intensive approaches that might eventually be used to monitor output from a mixture of power sources and catch problems before they become critical.

### The Internet of the future

The ExoGENI project also provided important opportunities for Baldin's team to build connections with other institutions and research groups. "It was a huge stepping stone because people now know we aren't afraid of complex and logistically difficult projects," he said. "ExoGENI gave us critical experience in running a multi-organizational project involving large distributed systems. At its peak, the computing power for the testbed was operated at more than 20 sites around the U.S." 

Baldin and his team are drawing on their experiences with ExoGENI to create a next-generation distributed system known as [FABRIC](http://nrig.renci.org/project/fabric/). This NSF-funded testbed combines a cloud system with high-speed optical links to give scientists a place to study new Internet architectures at scale. FABRIC will let computer scientists study completely new approaches to storing and processing data on the fly so that they can figure out what might be applicable to the Internet of the future.

"Although FABRIC is an independent project, it is in many ways an intellectual successor to ExoGENI," said Baldin, who is the PI for the FABRIC project. "Like ExoGENI, FABRIC involves building a system while it is being used---but with ExoGENI we proved that our team can handle taking off in an airplane that's still being built."
