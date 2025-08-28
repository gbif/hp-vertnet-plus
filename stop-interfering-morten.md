---
layout: heroImage
lang: en
# lang-ref: home
# permalink: /
layout: home
klass: home
preTitle: Welcome to VertNet
title: Biodiversity data with backbone!
description: |
  <div class="mt-6">
    <form action="/occurrence/search" type="get">
      <div class="field" style="display: flex;">
        <input type="text" placeholder="Full text record search" name="q" class="input" />
        <button type="submit" class="button is-primary ml-4">Search</button>
      </div>
    </form>
    <div class="mt-4">
      <a href="/post/2025/vertnet-is-all-new">Why is Everything Different?</a>
    </div>
  </div>
background: "/assets/images/example/snake.jpeg"
imageLicense: |
  [Cemophora coccinea copei](https://vertnet-plus.hp.gbif-staging.org/occurrence/5169941301) from University of Florida Herpetology
height: 70vh
composition:
  - type: heroImage # the block type
  - data: example.stats
    type: stats
  # - type: pageMarkdown # there is currently no text on the page so just ignore this part
  # - type: features
  #   data: example.guide
  - type: split
    data: example.about
  - type: split
    data: example.explorer
  - type: split
    data: example.resources
  - type: latestPosts
    data: we_do_not_want_any_header # weird hack as the block layout looks for a data element and falls back to the page if none is present
---


