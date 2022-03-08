---
title: What to expect at the 2021 iRODS User Group Meeting
subtitle: iRODS users and consortium members will gather virtually from June 8-11 
slug: what-to-expect-at-the-2021-irods-user-group-meeting
spotlight: true
publishDate: 2021-06-04
author: ["jayasree-jaganatha"]
featuredImage: null
projects:
  - irods
people:
  - jason-coposky
groups:
  -
teams:
  - 
collaborations:
  - irods-consortium
tags:
  - data-management
---

![](https://user-images.githubusercontent.com/68300939/157315269-619e668a-a953-49a6-835e-439eba4e9fb9.png)

The worldwide [iRODS](https://irods.org/) user community will connect online from June 8 -- 11 for the 13th Annual iRODS User Group Meeting -- four days of learning, sharing of use cases, and discussions of new capabilities that have been added to iRODS in the last year.

The virtual event, sponsored by [Wellcome Sanger Institute](https://www.sanger.ac.uk/), [Globus](https://www.globus.org/), [GRAU DATA](http://graudata.com/), [SoftIron](https://softiron.com/), and RENCI, will be a collection of live talks and panels with Q&A. An audience of over 200 participants representing dozens of academic, government, and commercial institutions is expected to join.

"The 2021 iRODS User Group Meeting features an impressive list of presentations from our user community, including talks in fields such as healthcare, agriculture, and education," says Jason Coposky, Executive Director at iRODS. "The structure of our virtual event ensures that attendees get plenty of opportunities to network and collaborate throughout the week, while learning how users have utilized iRODS across the globe."

Meeting attendees will learn about new updates such as the Python iRODS client, C++ REST API, and the Zone Management Tool, according to Coposky. On June 11, the last day of the meeting, the Consortium team will run an iRODS Troubleshooting session, where participants can receive one-on-one help with an existing or planned iRODS installation or integration.

The iRODS Consortium and RENCI are gearing up to release iRODS 4.2.9. A notable addition within the release is the introduction of logical locking by providing additional replica status values within the catalog. Previously, replicas in iRODS could only be marked 'good' or 'stale,' which did not capture the states of when data was in flight, or incomplete. The new intermediate and locked states for iRODS replicas will be used to provide protection from uncoordinated writes into the system.

The iRODS NFSRODS 2.0.0 client was released last month. The NFSRODS client presents the iRODS virtual file system as NFSv4.1, which allows iRODS to be surfaced into any existing infrastructure with just a mount command, while still preserving the server-side policies enforced by the iRODS API. The new version provides significant performance improvements and caching, and resolves a few small bugs. 

During last year's UGM, users learned about policy composition, which allowed them to configure multiple policies together without the need to touch the code. This feature is now ready and will be released with iRODS 4.2.9, including a growing library of implemented policies which will include future support for indexing and publishing.

As always with the annual UGM, in addition to general software updates, users will offer presentations about their organizations' deployments of iRODS. This year's meeting will feature 30 talks from users around the world. Among the use cases and deployments to be featured are:

-   **The Research Data Management System at the University of Groningen: architecture, solution engines, and challenges. ***University of Groningen. *The University of Groningen has developed the RUG Research Data Management System, powered by iRODS, to store, share data, and allow collaborative research projects. The system is developed based on open source solutions, providing access to the stored data by means of command line, webdav, and a web-based graphical user interface. The system provides a number of key functionalities and technical solutions such as metadata templates management, data policies, data provenance, and audit and uses existing iRODS functionalities and tools, such as the iRODS audit plugin and the iRODS Python rule-engine.

-   **Frictionless Data for iRODS. ***Earlham Institute. *The international wheat community has embraced the omics era and is producing larger and more heterogeneous datasets at a rapid pace in order to produce better varieties via breeding programs. These programs, especially in the pre-breeding space, have encouraged wheat communities to make these datasets available more openly. However, the consistent and standardized collection and dissemination of data based on rich metadata remains difficult as so much of this information is stored in papers and supplementary information. In response to this concern, the Earlham Institute has built Grassroots, an infrastructure including portals to deliver large scale datasets with semantically marked-up metadata to power FAIR data in crop research.

-   **Go-iRODSClient, iRODS FUSE Lite, and iRODS CSI Driver: Accessing iRODS in Kubernetes. ***CyVerse / University of Arizona. *As developers are increasingly adopting the cloud-native paradigm for application development, Kubernetes has become the dominant platform for orchestrating their cloud-native services. To facilitate iRODS access in Kubernetes, CyVerse has developed an iRODS Container Storage Interface (CSI) Driver, which provides on-demand data access using multiple connectivity modes to the iRODS server and exposes a file system interface to Kubernetes pods, thereby allowing cloud-native services to access iRODS without manually staging data within the containers. During this talk, the researchers will introduce the design and functionalities of the iRODS CSI Driver, as well as two sub-projects: Go-iRODSClient and iRODS FUSE Lite.

-   **iRODS and NIEHS Environmental Health Science. ***NIEHS / NIH. *NIEHS continues to leverage iRODS and has contributed to two important capabilities, indexing/pluggable search and pluggable publication. NIEHS will feature work on integrating search with the standard file and metadata indexing capability and describe how targeted search features are easily added. NIEHS will feature work on publishing and demonstrate how iRODS data collections and metadata can be published to the GEO repository. NIEHS will feature the ability to publish Data Repository Service bundles and serve them through a GA4GH-compliant interface. NIEHS will also discuss the NIH Gen3 platform and highlight opportunities and features of interest in the areas of rich metadata, metadata templates, and authorization and authentication via NIH Data Passport standards.

On Wednesday, the iRODS UGM will host a panel called "Storage Chargeback: Policy and Pricing," featuring researchers from CyVerse, Wellcome Sanger Institute, and the iRODS Consortium discussing the opportunities, the costs, and the complexities involved in servicing customer requests to bring their storage into an existing managed software stack or environment.

Registration for the Virtual iRODS UGM will remain open throughout the week. [See the registration page for details](https://irods.org/ugm2021/).

* * * * *

**About the iRODS Consortium**

The iRODS Consortium is a membership organization that supports the development of the integrated Rule-Oriented Data System (iRODS), free open source software for data virtualization, data discovery, workflow automation, and secure collaboration. The iRODS Consortium provides a production-ready iRODS distribution and iRODS training, professional integration services, and support. The world's top researchers in life sciences, geosciences, and information management use iRODS to control their data. [Learn more at irods.org](https://irods.org/).\
The iRODS Consortium is administered by founding member RENCI, a research institute for applications of cyberinfrastructure at the University of North Carolina at Chapel Hill. For more information about RENCI, visit [renci.org](https://renci.org/).
