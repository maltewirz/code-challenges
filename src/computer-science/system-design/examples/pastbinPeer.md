System Design: Pastebin (done by peer)


Functional requirements:
* user can store the content.
* user will be provided be the url, and certain expiry. 
* User can supply the expiry time.

Non-functional requirements:
* 99.9% available
* scalable
* Durable
* high consistency

API:
POST postContentAPI (PostContentRequest request) // request -> userId, content, expiryTime: optional => url: failure
GET readContentAPI (ReadContentRequest request) // request -> userId,url => content: failure

Back of the envelope calculations:
1 M of active / day
Read:write = 10:1
1 sample uploaded is of 100 KB on avg

TPS of read = (1M * 10) / (24*60*60) = 120 / S
TPS of write = 12/s

Transactions per second

Storage:
=> (1 M * 100 KB) = 100 GB
1 server 100 GB
3 servers assuming replication factor = 3
