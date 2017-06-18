---
categories: null
comments: true
date: 2013-03-31T00:00:00Z
published: false
title: Managing pathnames on OSX
url: /2013/03/31/managing-pathnames-on-osx/
---

You can set environment variables on your Mac in several different ways.

If you want to set a PATH variable just for the current user, you can edit your ~/.bash_profile file. Eg

```
export PATH=/usr/local/share/python:$PATH"
```

