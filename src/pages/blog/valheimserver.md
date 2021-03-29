---
title: 'Project: Setting up a Valheim Server on Linux'
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
image: images/valheim thumb.png
subtitle: >-
  Learning to work with Linux and setting up a Valheim server, all hosted on
  Azure 
---
For my first project I wanted to learn more about Virtual Machines and running servers on them in Azure. To do this I choose to set-up a Valheim server running on a Linux VM.

First I needed to set up a ssh key pair for securely accessing my VM, I did this by opening up Cloud Shell and running the following command

        ssh-keygen -m PEM -t rsa -b 4096

I then accessed the public key, via a cat view command

        cat ~/.ssh/id_rsa.pub

Then I it copied, to add during the creation of the VM

I then created a virtual machine through the Azure portal, I chose a Standard B2s (2 vcpus, 4 GiB memory), as this is the recommended size for a Valheim server. I didn't create any additional discs as the storage that comes with the VM is more than enough to host the files needed.

Once it was deployed I accessed the VM via SSH, verifying with the key pair that I previously set-up. The first thing I did was create root access, this is necessary for completing a lot of tasks within the environment, and in our case it's needed to create a new user and edit some files.

        sudo passwd root

![](/images/Root%20access.png)

Then I installed all of the depancies the server required to run

```
    sudo dpkg --add-architecture i386; sudo apt update; sudo apt install curl wget file tar bzip2 gzip unzip bsdmainutils python util-linux ca certificates binutils bc jq tmux netcat lib32gcc1 lib32stdc++6 libsdl2-2.0-0:i386 steamcmd

```

Once that was complete I created a new user for the server, with a simpler name for quicker use and access.

```
    adduser vhserver

```

        wget -O linuxgsm.sh https://linuxgsm.sh && chmod +x linuxgsm.sh && bash linuxgsm.sh vhserver

![](/images/installed%20linuxgsm.png)

Once this was done I used it to install the Valheim server components

        ./vhserver install

After the install I then had to configure the server before running it, this meant navigating to the config files

       cd /home/vhserver/lgsm/config-lgsm/vhserver

I then removed the common.cfg file

        rm common.cfg

and replaced it with a copy of the default.cfg

   cp \_default.cfg common.cfg
![](/images/edit%20config%201.png)
Next I accessed the newly created common.cfg with the vim command


    vim common.cfg


and proceeded to edit the servers name and add a password for better security
