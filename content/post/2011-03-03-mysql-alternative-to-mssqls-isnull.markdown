---
categories:
- Databases
comments: true
date: 2011-03-03T00:00:00Z
slug: mysql-alternative-to-mssqls-isnull
title: MySQL alternative to MSSQL''s isNull()
url: /2011/03/03/mysql-alternative-to-mssqls-isnull/
wordpress_id: 892
---

I was looking for a way to do isNull() in MySQL the other day, for those that don't know this means you can do something like:

``` javascript
SELECT isNull(mycolumn, 'blah') FROM myTable;
```

If the value in _mycolumn_ is NULL, then 'blah' is returned, this can of course be any string literal/numeric value you want. MySQL doesn't have isNull() but it does have [ifNull()](http://dev.mysql.com/doc/refman/5.0/en/control-flow-functions.html#function_ifnull) which is basically the same.

``` javascript
SELECT ifNull(mycolumn, 'blah') FROM myTable;
```
