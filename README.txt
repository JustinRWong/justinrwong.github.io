## Subdomain Hijack Attack Prevention

Using Google Search Console, https://search.google.com/search-console/inspect?resource_id=http%3A%2F%2Fjustinryanwong.com%2F&id=fJk6VBc8tc-kNUhrmTkEag&hl=en

* Request the page to be crawled.
* On the report, if there are subdomains that should not be there, create new html files to explicitly whitelist them.

```sh
cp viagra-and-daibetes.html HIJACKED-SUBDOMAIN.html 
```

