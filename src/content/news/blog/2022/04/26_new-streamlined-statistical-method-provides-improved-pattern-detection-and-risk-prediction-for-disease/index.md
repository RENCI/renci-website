---
title: New streamlined statistical method provides improved pattern detection and risk prediction for disease
slug: new-streamlined-statistical-method-provides-improved-pattern-detection-and-risk-prediction-for-disease
link: https://renci.org/blog/new-streamlined-statistical-method-provides-improved-pattern-detection-and-risk-prediction-for-disease/
publishDate: 2021-26-04
author:
featuredImage: https://renci.org/wp-content/uploads/2022/04/CALF-Blog-01-1-1024x512.png
groups:
    - 
projects:
    - calf
people:
    - clark-jeffries
    - jeffrey-tilson
    - darius-bost
teams: 
    - 
collaborations:
    - 
tags:
    - team-science
---

*The novel regression algorithm, CALF, outperforms the current gold standard, LASSO, in statistical tests*

![](https://renci.org/wp-content/uploads/2022/04/CALF-Blog-01-1-1024x512.png)

Researchers from the Renaissance Computing Institute (RENCI) at UNC-Chapel Hill, Perspectrix, the UNC School of Medicine, and the WVU Rockefeller Neuroscience Institute have collaborated to develop a new method for finding patterns in data which verifiably surpasses the performance of a generally accepted "gold standard." 

Attempting to find patterns in data is central to all research, and it is particularly important in medical use of biological samples to predict a patient's risk for disease formation and progression. Today, researchers can utilize advanced technology to produce an ocean of data about one person from various biological samples such as blood, DNA, and saliva, with the goal of identifying particular markers that can be informative about a person's current health and future outlook. However, this advanced data collection and processing has outpaced current statistical methods for identifying simple but robust patterns and relationships, and this is particularly true for the field of psychiatry. For instance, researchers have yet to fully understand and predict the progression of schizophrenia. 

This new method, CALF, which stands for "coarse approximation linear function," is described in the [Scientific Reports paper](https://www.nature.com/articles/s41598-022-09415-2), "A greedy regression algorithm with coarse weights offers novel advantages," published on March 31, 2022. Application of CALF to five quite different examples from psychiatric and neurological studies consistently outperformed the gold standard, LASSO, or "least absolute shrinkage and selection operator" regression, and other methods. 

"Frisky CALF outruns LASSO in the five examples our researchers have outlined in the paper," said RENCI scientist and lead author Clark Jeffries, PhD. "The metric values using CALF are superior to those of LASSO when the researcher insists on a small number of collectively informative predictors---five chosen from hundreds, for example. Interrogating the biochemistry of the five can then suggest causality."

The key distinction of CALF is its simplicity. It may select fewer predictors than those required by the LASSO method, while consistently outperforming LASSO in statistical tests. CALF progresses in a 'greedy' fashion, meaning it searches through the data and accepts the immediate next best predictor until the algorithm has optimized model performance. According to Jeffries, the research team originally aimed to develop a baseline for simple regression modeling and, in doing so, discovered that this streamlined model is able to extract statistically significant results from data where LASSO can fail to do so. 

(https://renci.org/wp-content/uploads/2022/04/Picture1.png)

*Figure 1. The geometry underlying a new data analysis method. Shown are three of 26 weight vectors, which are all combinations of +1, -1, 0. In higher dimensions, the choices become astronomical. The directions, not magnitudes, of weight vectors determine regression performance values known to statisticians as Student p-value, AUC, and Pearson correlation.*

"It's likely that there are existing data sets out there that failed to show more than a trend with routine analyses and could show classification significance with CALF," said Diana Perkins, MD, MPH, a psychiatrist at UNC-Chapel Hill. "This could be groundbreaking for the field of psychiatry in improving prediction of patients' risk for psychosis and other mental illnesses, allowing earlier intervention and overall improved outcomes." 

"While testing examples with all possible parameters in all possible conventional models is impossible, our best practices showed that CALF can find statistically significant patterns in data that otherwise fail interpretation," added RENCI scientist Jeffrey Tilson, PhD. "We encourage fellow researchers to test out CALF on their own datasets to verify its surprising capabilities." 

CALF has significant implications for the medical field, allowing researchers and medical professionals to attain better pattern recognition and risk projection for patients, ultimately leading to earlier detection of a patient's risk for a disease and, thus, earlier intervention for improved quality of life. 

Darius Bost, a PhD student at UNC-Chapel Hill and Graduate Research Assistant at RENCI, notes that, "Using data from the National Institute on Aging and Center, CALF was able to determine a small set of DNA markers that are highly correlated with the age of onset of Alzheimer's, indicating great potential for CALF as a simple and reliable research tool."

Versions of CALF in R and Python and the data matrices were developed by John R. Ford at Perspectrix. These resources are open source and available at the below links: 

-   R version: <https://cran.r-project.org/web/packages/CALF/index.html>
-   PyPi Python version: <https://pypi.org/project/calfpy/>  
-   Python 3.x version: <https://github.com/jorufo/CALF_Python>

Sample data that may be used for duplication of all the stated results is available via GitHub as an unrestricted supporting resource at <https://github.com/jorufo/CALF_SupportingResources>.
