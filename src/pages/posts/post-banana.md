---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Dynamic displays of this new blog post"
pubDate: 03/09/2025
description: "tjos os tje fuort post on my astro blod"
author: "prime_gator"
image:
    url: "https://docs.astro.build/assets/rays.webp"
    alt: "The Astro logo on a dark background with rainbow rayssssssssssssssssssssssssssssssss."
tags: ["astro", "blogging", "learning astro", "problem solving"]
---

## The problem

As I add more posts to the blog page, it becomes annoying to append a new item, and who doesn't want to append the 5834th item to a blog post?

## The solution

so I'm going to fix that by creating a variable called `allPosts` in blog.astro that uses a weird algorithm like a for loop and creates these posts so I don't have to.
In other words, `allPosts` uses the values `import.meta.glob('posts./*.md')` (pretty cool huh?) that looks in the posts folder using the asterisk to search for any files with the `.md` extension. Which is, pretty neat. 