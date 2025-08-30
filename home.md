---
layout: heroImage
lang: en
lang-ref: home
layout: home
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
      <a href="/post/2025/vertnet-is-all-new"><b>Why is Everything Different?</b></a>
    </div>
  </div>
background: "{{site.data.images.VNCollage3.src}}"
imageLicense: "{{site.data.images.VNCollage3.caption}}"
height: 75vh
cta:
  # - text: Search
  #   href: occurrence/search
  #   isPrimary: true
  # - text: Why is Everything Different?
  #   href: /post/2025/vertnet-is-all-new
#  - text: Learn more
#    href: /about
#  - text: VertNet Classic
#    href: http://portal.vertnet.org/search
permalink: /
composition:
  - type: heroImage # the block type
  - data: home.stats
    type: stats
  # - type: pageMarkdown # there is currently no text on the page so just ignore this part
  - type: split
    data: home.about
  - type: split
    data: home.explorer
  - type: split
    data: home.resources
  - type: latestPosts
    data: we_do_not_want_any_header # weird hack as the block layout looks for a data element and falls back to the page if none is present
---


