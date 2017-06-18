---
categories:
- ColdFusion
comments: true
date: 2006-10-14T23:17:51Z
slug: validating-a-user-defined-password-with-reg-exp
title: Validating a user defined password with reg exp
url: /2006/10/14/validating-a-user-defined-password-with-reg-exp/
wordpress_id: 58
---

A nice little reg exp from the [ColdFusion Cookbook](http://www.coldfusioncookbook.com/) when you need to make sure a users new password (which they are setting) contains at least 1 letter and 1 number.

You can also make sure the password length is within a range, the following makes sure the password is between 6 and 15 characters long.

    <cfif NOT reFind("^[[:alnum:]]{6,15}$", form.sPassword) />

Don't you just love regular expressions :)