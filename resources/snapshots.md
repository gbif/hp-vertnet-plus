--- 
layout: heroImage
lang: en
lang-ref: Snapshots
title: Snapshot Creation
description: 
background: {{site.data.images.GuloGulo.src}}
imageLicense: {{site.data.images.GuloGulo.caption}}
height: 70vh
toc: true
---

## VERTNET SNAPSHOTS CREATION PROCESS:

1. VertNet assembles its datastore into [BigQuery](https://cloud.google.com/bigquery/docs/introduction), a Google tool, with which we run queries over the complete VertNet index.
2. From these queries we create taxon-based snapshots - Amphibia, Aves, Fishes*, Mammalia, and Reptilia (additional datasets may be produced in the future).
3. These snapshots are converted into CSV (comma-separated) text files and compressed into .zip files.
4. VertNet generates a metadata** file that describes the contents contained within each zipped dataset.
5. Finally, we bundle up the metadata and the dataset and upload them to [CyVerse](https://cyverse.org/).

* Yes, we understand that “fish” is a paraphyletic assemblage, but for the sake of simplicity and to avoid a ton of “fish-related resources” we have bundled everything to “fish”.

** The metadata we create is in the same format we use for any other resource in VertNet.

[Back to Datasets, Tools & Code](/resources/datasets-tools/)
