---
title: New data format aids large-scale evolutionary biology research
slug: new-data-format-aids-large-scale-evolutionary-biology-research
link: https://renci.org/blog/renci-to-develop-advanced-network-software-for-atlanticwave-sdx-2-0/
publishDate: 2022-04-20
author:
featuredImage: ![Phyx Data-01](https://user-images.githubusercontent.com/68300939/167006228-3c209200-c015-4684-a823-530a216bb544.png)
groups:
    - 
projects:
    - phyx
people:
    - gaurav-vaidya
teams: 
    - 
collaborations:
    - 
tags:
    - data-analysis
---

In addition to revealing the hidden histories of life on Earth, studying the evolutionary relationships between organisms can help scientists track emerging diseases, inform methods to control invasive species, and understand how to best protect at-risk ecosystems.  

DNA sequencing and other genetic analysis approaches are providing vast new data streams to enable this research at unprecedented scales. For example, the Open Tree of Life Project is attempting to create a synthesized view of the evolutionary relationships among every known organism -- more than 1.7 million species.

To aid in these endeavors, [Gaurav Vaidya](https://renci.org/staff/gaurav-vaidya/), PhD, from RENCI collaborated with a multi-institutional team of researchers to create a new data format that makes the clade definitions used by evolutionary biologists readable and interpretable by computers. Clades, which capture an organism's ancestor and all its descendants, make up a portion of a phylogeny, a set of evolutionary relationships between different organisms.

### Dealing with data

"Phylogenies can be huge, so navigating one on a computer screen or on a piece of paper is challenging," said Vaidya. "We designed our new phyloreferencing data format to allow computers to do the hard work of determining exactly where a clade definition fits within a particular phylogeny. Finding precisely the right node out of hundreds of thousands on an extremely large phylogeny is a tedious, time-consuming manual process for evolutionary biologists, while a computer can do it quickly and consistently."

The researchers [published a paper](https://peerj.com/articles/12618/) describing their new Phyloreference Exchange Format (Phyx) in the open access *PeerJ *journal. This work, which began when Vaidya was a postdoctoral fellow at the University of Florida, was performed in collaboration with Professor Nico Cellinese, PhD, from the University of Florida and Hilmar Lapp from Duke University.

Phyx is based on one of the most widely used open standards for data on the web and includes a direct translation to the Web Ontology Language, a standard language used to represent rich and complex knowledge about groups of things and the relationships between them.

"Because we used an ontology language that's widely used, once we convert a definition into logical expressions, any off-the-shelf reasoner can be used to resolve a clade definition to a phylogeny," said Vaidya. "We designed the format to capture in meticulous detail exactly how that clade was defined, as well as rich metadata so that there is a record of who developed a definition and where it was published."

### Capturing changing relationships

As projects like the Open Tree of Life Project reveal more about how organisms are related and advance scientific knowledge, species and clades may move around within a phylogeny. The new data format will be especially helpful for dealing with these changes.

"Every time a phylogeny changes, scientists must look at the new phylogeny and figure out where their favorite groups of species are and how they are related to each other," said Vaidya. "With our new process, computers can do this completely automatically and reproducibly."

The *PeerJ* paper contains all the information scientists need to use the new data format or to build upon it to create something even better. This includes a tutorial on how to apply the format to a phylogeny and a JavaScript library that details exactly how the new data format works.

Vaidya and his collaborators are now working to develop an accessible graphical interface that will allow biologists to use scientific names to create a Phyx clade definition.
