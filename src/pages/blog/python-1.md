---
title: My Introduction to Python
subtitle: The beginnings of my journal into learning Python
date: '2021-03-05'
categories:
  - src/data/categories/category-7vcuuz40z.json
tags: []
excerpt: The process of researching & setting up a static website on Azure
thumb_image_alt: lorem-ipsum
image_alt: lorem-ipsum
image_position: right
seo:
  title: Setting Up a Static Website on Azure
  description: The process of researching & setting up a static website on Azure
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Setting Up a Static Website on Azure
      keyName: property
    - name: 'og:description'
      value: The process of researching & setting up a static website on Azure
      keyName: property
    - name: 'og:image'
      value: images/classic/post-1.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Setting Up a Static Website on Azure
    - name: 'twitter:description'
      value: The process of researching & setting up a static website on Azure
    - name: 'twitter:image'
      value: images/classic/post-1.png
      relativeUrl: true
template: post
author: src/data/team/dianne-ameter.yaml
thumb_image: images/classic/post-2.png
image: images/classic/post-2.png
---
Want to learn how I set this whole static site up? Well in this post I’m going to lay out how I built it, the choices I made, and the lessons I learned along the way.

When I first decided I wanted a website to document my progress, my first thought was to build a WordPress site and host it in Azure. Luckily there's a WordPress service right on the Azure Marketplace, I thought that it would be a simple and easy process to set up, and it was...at first. WordPress is a powerful platform and can create some fantastic looking sites, but on Azure it costs over £30 a month to host it. This is due to the fact that you need to host not just your App Service Plan but a SQL Database as well. At those rates I’d be better off going to an all inclusive platform such as Squarespace, but I was content to build my site on Azure, to learn the tools and services it offered, and so I looked for another option.

![](https://github.com/ConorMcCulloch/purple-rosemary-fdc6a/blob/preview/static/images/App%20Service.png?raw=true)![](https://github.com/ConorMcCulloch/purple-rosemary-fdc6a/blob/preview/static/images/SQL.png?raw=true)

This is when I learned about static sites, but what is a static site exactly well; 

> “A static site is a page that is delivered to the user's web browser exactly as stored”.

What this means is that everyone who visits the site see’s the same thing, this is in contrast to a dynamic site which can change what it displays based on various conditions from the visitor. For example a social media website like twitter, is a dynamic site that changes what it displays depending on the account that's logged in.

There are many advantages to a static site, such as improved security, performance, but most important to me is that they are incredibly cheap to run. This is due to the fact that no real compute power is needed, so I no longer needed to pay for an App Service Plan or Database. Although there are also drawbacks to static sites, such as the inability to quickly change the design and layout of the site. Unlike a dynamic site editor where a new “theme” can be put over the top of the pre-existing content, static sites bake in those design elements with the content itself.

As I looked into static sites I found that there were **many** different platforms and frameworks used to build them, all offering their own advantages and disadvantages. Static sites can be built and edited entirely through a command console, but I was interested in using a content management system (CMS) to build and maintain mine, as it would give me a suite of tools that I wouldn't have otherwise. I also wanted something that hosted it’s files on GitHub, as I planned to use Azure’s Static Web Apps service, (which I’ll talk more about later).

I spent a week testing different platforms to find the right one for me, these are my personal findings;

#### **Forestry**

Forestry was the first platform I tried, and I was initially very impressed by the flashy templates they offered, but unfortunately as soon as I tried to make the changes to the templates, I ran into some problems. Changing site elements was awkward and unclear, and varied wildly from template to template, with some seemingly impossible to edit no matter how much I changed. One of the biggest reasons why everything felt so awkward within Forestry is because you are unable to directly edit the web pages, having to make your edits to the ever changing file structure format, publishing it and then seeing the changes live. Forestry does have a site preview engine but I found it slow and unresponsive.

#### **Ghost**

I only tried out Ghost for a brief moment as it’s a paid service with a 14-day free trial. The sites looked nice but it was more of an all-inclusive service, offering hosting and support which I didn't need.

#### **Siteleaf & Publii**

Both of these platforms are fairly similar to one and another with the services they offer, and the style of in-direct site editing they allow. I think either could have been a great choice for me, and from the small amount of time I put into them, their management tools seem more comprehensive and unified than that of Forestry, but they were just beat out by the next, and final platform I tried.

#### **Stackbit**

![](https://github.com/ConorMcCulloch/purple-rosemary-fdc6a/blob/preview/static/images/stackbit-logo.png?raw=true)

From the moment I started using Stackbit I knew this was the platform for me, with the biggest factor being the ability to directly edit pages and see them change in real time, this made building and editing the site an absolute breeze. Building pages using premade sections is quick and easy, while still allowing for enough customisation, so that no two websites have to look alike. Another great feature of Stackbit is that it automatically creates a preview branch of your site, where you make all of your edits, before being pushed to the master branch.  It also has great metadata tagging and a feature that allows you to pull up the code of specific elements, which can help you learn more about what your website actually is built on.

![](https://github.com/ConorMcCulloch/purple-rosemary-fdc6a/blob/preview/static/images/Linking.png?raw=true)

So once I had my CMS chosen, I went about setting up Azure Static Web Apps to host the website. Azure Static Web Apps is currently in preview but I still chose to use it because it fitted my needs perfectly; it's simple and easy to set up, you can map custom domains to the web apps hosted by it, and it current has no monthly cost associated with it (although this may change once it comes out of preview).

![](https://github.com/ConorMcCulloch/purple-rosemary-fdc6a/blob/preview/static/images/Domain.png?raw=true)

So with my site now built and hosted on the internet, I needed to assign a custom domain to it, to make it my own and because I didn't think the auto-generated one, “*zealous-beach-001e9a410.azurestaticapps.net*” would fit on a business card 😂. For this process I decided to keep it in the family and use Azure App Service domain to purchase and manage my domain. Settling on Cloudmcculloch.com fairly quickly, I purchased it and went about mapping it to my site. This involved mapping a CNAME record of my purchased domain to the one auto generated by Azure Static Web Apps, which was as simple as adding a record to the DNS of my domain.

![](https://github.com/ConorMcCulloch/purple-rosemary-fdc6a/blob/preview/static/images/DNS.png?raw=true)

And that wraps up my journey of creating my static website! I learned a lot in the process and hopefully some of my mistakes and research can help you, if you ever decided to create one yourself.
