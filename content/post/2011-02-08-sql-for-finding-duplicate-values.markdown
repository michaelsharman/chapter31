---
categories:
- Databases
comments: true
date: 2011-02-08T06:47:18Z
slug: sql-for-finding-duplicate-values
title: SQL for finding duplicate values
url: /2011/02/08/sql-for-finding-duplicate-values/
wordpress_id: 883
---

Quick post to remind me how to check a table column for duplicate values next time I'm looking for it (when my memory fails!)

``` javascript
SELECT id, count(id) 
FROM mytable
GROUP BY id
HAVING count(id) > 1
```
