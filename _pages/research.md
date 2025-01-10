---
title: Research
layout: single
permalink: /research/
---
<div markdown="1" onmouseover="document.getElementById('xhap').style.display='block';" onmouseout="document.getElementById('xhap').style.display='none';">
##### XHap: Haplotype Assembly using Long-distance Read Correlations learned by Transformers
**Shorya Consul**, [Ziqi Ke](https://scholar.google.com/citations?user=E2OUcxIAAAAJ&hl=en){:target="_blank"}, [Haris Vikalo](http://users.ece.utexas.edu/~hvikalo/){:target="_blank"}<br>
Bioinformatics Advances, 2023<br>
[Paper](https://academic.oup.com/bioinformaticsadvances/article/3/1/vbad169/7444321){:target="_blank"}
<!-- -->
<p markdown="1" style='text-align: justify;' id="xhap" style="display:none;">
Reconstructing haplotypes of an organism from a set of sequencing reads is a computationally challenging (NP-hard) problem. In reference-guided settings, at the core of haplotype assembly is the task of clustering reads according to their origin, i.e. grouping together reads that sample the same haplotype. Read length limitations and sequencing errors render this problem difficult even for diploids; the complexity of the problem grows with the ploidy of the organism. We present XHap, a novel method for haplotype assembly that aims to learn correlations between pairs of sequencing reads, including those that do not overlap but may be separated by large genomic distances, and utilize the learned correlations to assemble the haplotypes. This is accomplished by leveraging transformers, a powerful deep-learning technique that relies on the attention mechanism to discover dependencies between non-overlapping reads. Experiments on semi-experimental and real data demonstrate that the proposed method significantly outperforms state-of-the-art techniques in diploid and polyploid haplotype assembly tasks on both short and long sequencing reads.
</p>
</div>  
<!-- --> 
<div markdown="1" onmouseover="document.getElementById('xvir').style.display='block';" onmouseout="document.getElementById('xvir').style.display='none';">
##### XVir: A Transformer-Based Architecture for Identifying Viral Reads from Cancer Samples
**Shorya Consul**, John Robertson, [Haris Vikalo](http://users.ece.utexas.edu/~hvikalo/){:target="_blank"}<br>
[Preprint](https://www.biorxiv.org/content/10.1101/2023.08.28.555020v1.abstract){:target="_blank"}
<!-- -->
<p markdown="1" style='text-align: justify;' id="xvir" style="display:none;">
Many cancers can be linked to viral infections. With the advent of modern sequencing technolgoies, we now have access to massive amounts of tumor data, which in turn have allowed studies of the associations between viruses and cancers. However, the high diversity of oncoviral families makes detecting viral DNA challenging, thereby complicating the study of these associations. To that end, we propose **XVir**, a transformer-based deep learning architecture to reliably identify viral DNA present in human tumors. Results on semi-experimental data demonstrate that XVir is capable of achieving high detection accuracy, generally outperforming state-of-the-art competing methods while being more compact and less computationally demanding.
</p>
</div>  
<!-- --> 
<div markdown="1" onmouseover="document.getElementById('rf-inf').style.display='block';" onmouseout="document.getElementById('rf-inf').style.display='none';">
##### RF-based Network Inference: Theoretical Foundations
[Hasan Burhan Beytur](https://sites.google.com/view/hasanburhanbeytur){:target="_blank"}, **Shorya Consul**, [Gustavo de Vecianan](https://users.ece.utexas.edu/~gustavo/){:target="_blank"}, [Haris Vikalo](http://users.ece.utexas.edu/~hvikalo/){:target="_blank"}<br>
[Preprint](https://www.biorxiv.org/content/10.1101/2023.08.28.555020v1.abstract){:target="_blank"}
<!-- -->
<p markdown="1" style='text-align: justify;' id="rf-inf" style="display:none;">
We consider RF-based network inference based on channel usage. The proposed approaches rely on distributed spectrum sensing and are agnostic to the content and communication protocols. We consider inference based solely on observing nodes' channel usage and show it is equivalent to a Boolean matrix decomposition problem, which in general does not have a unique solution and is an NP-hard problem. We provide necessary and sufficient conditions for the Boolean matrix decomposition problem has a unique solution, i.e., for the network to be recoverable. We also propose a low-complexity network recovery algorithm that finds the unique solution under the recoverability conditions. In addition to that we provide an analysis of the required observation time to collect necessary channel usage data needed for the network recovery algorithm.
</p>
</div>  
<!-- --> 
<div markdown="1" onmouseover="document.getElementById('dpmf').style.display='block';" onmouseout="document.getElementById('dpmf').style.display='none';">
##### Differentially Private Median Forests for Regression and Classification
**Shorya Consul**, [Sinead Williamson](http://sinead.github.io/){:target="_blank"}<br>
[Preprint](https://arxiv.org/pdf/2006.08795.pdf){:target="_blank"}
<!-- -->
<p markdown="1" style='text-align: justify;' id="dpmf" style="display:none;">
Decision forests are popular for both regression and classification but require a large number of queries for training. This makes attaining differential privacy especially challenging. We proposed a novel scheme, **DiPriMe forests**, that ensures differential privacy while maintaining high utility, i.e., high performance while guaranteeing differential privacy.</p>
</div>  
<!-- -->  
<div markdown="1" onmouseover="document.getElementById('ith-bb').style.display='block';" onmouseout="document.getElementById('ith-bb').style.display='none';">
##### Reconstructing Intra-tumor Heterogenity via Convex Optimization and Branch-and-Bound Search
**Shorya Consul**, [Haris Vikalo](http://users.ece.utexas.edu/~hvikalo/){:target="_blank"}<br>
ACM Conference on Bioinformatics, Computational Biology and Health Informatics (ACM-BCB), 2019<br>
[Paper](https://dl.acm.org/doi/abs/10.1145/3307339.3342178){:target="_blank"} | [Code](https://github.com/shoryaconsul/AMTHet){:target="_blank"}
<!-- -->
<p markdown="1" style='text-align: justify;' id="ith-bb" style="display:none;">
Reconstructing tumor populations from heterogeneous samples from high-throughput sequencing data is highly valuable area of study due to its potential to inform targeted studies and treatments. This, however, is a challenging task due to the complex mutations present and read lenghts being too short to span regions exhibitng structural variations. We present a novel algorithmic framework, **AMTHet**, to infer the tumor clonal populations and their frequencies from a heterogeneous sample based on copy number variations.</p>
</div>
<!-- -->
<div markdown="1" onmouseover="document.getElementById('map-aols').style.display='block';" onmouseout="document.getElementById('map-aols').style.display='none';">
##### A MAP Framework for Support Recovery of Sparse Signals Using Orthogonal Least Squares
**Shorya Consul**, [Abolfazl Hashemi](https://abolfazlh.github.io/){:target="_blank"}, [Haris Vikalo](http://users.ece.utexas.edu/~hvikalo/){:target="_blank"}<br>
International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2018<br>
[Paper](https://ieeexplore.ieee.org/abstract/document/8683151/){:target="_blank"}
<!-- -->
<p markdown="1" style='text-align: justify;' id="map-aols" style="display:none;">
We propose **MAP-AOLS**, an algorithm that leverages the statistical information about the sensing matrix and signal to greedily reconstruct sparse binary signals from their compressed measurements. This stands in contrast to conventional greedy algorithms, such as OLS and OMP, that perform reconstruction without utilizing any knowledge about the statistical distributions.</p>
</div>