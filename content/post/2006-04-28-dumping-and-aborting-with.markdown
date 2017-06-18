---
categories:
- ColdFusion
comments: true
date: 2006-04-28T05:01:55Z
slug: dumping-and-aborting-with
title: Dumping and aborting with <cfscript>
url: /2006/04/28/dumping-and-aborting-with/
wordpress_id: 21
---

One of the annoying things about cfscript is it's lack of support for a lot of CFML tags. 




<cfdump> and <cfabort> are 2 tags I always use in development, especially for debugging. A way to use this functionality is to create a UDF to do these types of functions.




**For example**


``` javascript
<cffunction name="dump" access="public" output="true" returntype="struct">
    <cfargument name="arg" />
    <cfdump var="#arg#" />
</cffunction>

<cffunction name="abort" access="public" output="false" returntype="void">
    <cfabort />
</cffunction>
```

This function can be stored in a simple utilities component and stored in application scope, that way you can call it from anywhere.

