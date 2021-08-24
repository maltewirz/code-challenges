Review Materials:

* https://www.freecodecamp.org/news/systems-design-for-interviews/
* https://github.com/donnemartin/system-design-primer

# 1 Networks and Protocols

## IP - Internet Protocol

* Messages over IP are in packets (2^16 bytes), with Header and Data.
  * IP Header: Meta Data with IP Address of source and destination

## TCP - Transmission Control Protocol

* Utility built on top of IP. Guarantees transmission of IP packets in ordered way.
  * TCP header in packet: ordering/number of packets.
* TCP establishes connection via handshake. The other side is listening on port for handshake to happen. Closing the connection works similarly.

## HTTP - Hyper Text Transfer Protocol

* HTTP is an abstraction built on top of TCP/IP. Introduces request-response pattern for servers.

  * HTTP has headers and bodies. request and responses are similar to key-value pairs.

* ```http
  Request
  HEADER
  POST HTTP/1.1
  Host: localhost:8000
  -----
  BODY
  xyz
  
  Response
  HEADER
  HTTP/1.1 403 Forbidden
  Server: Apache
  ---
  BODY
  <!Doctype HTML xyz>
  ```

* HTTP methods are `GET`, `POST`, `PUT`, `DELETE`

# 2 Storage, Latency & Throughput

## Storage

* Storage is about storing and retrieving information.
* Can be `memory` (ephemeral) or `disk` (persistent) storage.
* Storage type can chosen depending on:
  * Shape (structure) of data
  * Availability needs
  * Scalability - speed and concurrency of reads and writes
  * Consistency - needs to be there across distributed storage

## Latency

* Latency is a measure of durations, e.g. roundtrip network request.

## Throughput

* Maximum capacity of a machine or system.

# 3 System Availability

* System availability describes the resiliency of a system. If a system is robust enough to handle failure in the network, database - it can be considered a fault-tolerant system.
* 99.99% uptime (1h of downtime per year)
* For high availability (HA) systems, you need to reduce "single points of failure" through redundancy or other means

# 4 Caching

* Caching can be inserted on the client (browser storage), between client and server (cdn) or on the server itself. This reduced over-the-network calls to the database.
* Works best for static or infrequently changing data 

## Handling stale data

* Caching is easy for `read` operations and needs some additional considerations for `write`:
  * Sync cache and DB
  * Syncing synchronously or asynchronously 
  * Data refresh techniques like 
    * `last in first out `(LIFO) and `first in last out` (FILO)
    * `least recently used` (LRU) - discards the LRU
    * ` least frequently used` (LFU) - discards the LFU

# 5 Proxies

* A proxy is typically a middleman between client and another server. e.g. VPN
  * Forward proxy: Acts on behalf of client.
  * Reverse proxy: Acts on behalf of server. E.g. load-balancer.

# 6 Load Balancing

* Load Balancer sits between client and server and distributes incoming requests loads across multiple servers. Maintains availability and throughput.

## Server selection strategies

* Naive: Let load-balancer randomly pick a server
* Round robin: Start at first item in list, move down in sequence until end, the back to first.
* Load-based: Selection based on current capacity and perfomance of servers.
* IP Hashing:  Hash incoming requests IP address and select based on hash
* Path or Service based: Server selected based on path e.g. "/checkout"

# 7 Consistent Hashing

* Hashing function must be deterministic = identical inputs generate identical outputs
* Consistent hashing applies a hash function to incoming requests and the servers. The resulting outputs therefore fall in a set range (continuum) of values.
* The main advantage: When a hash table is resized, only n/m keys need to be remapped on average where n is the number of keys and m is the number of slots.
* Former approach in traditional hash tables: when a hash tables is resized, nearly all keys were remapped.

# 8 Databases

## Relational Database

* Strictly enforced relationships between things stored in the database.
* Highly structured and impose structure on all the entities.
* SQL enable more complex queries than non-relational databases.

## ACID

* ACID describes features that a good relational database must support
  * Atomic - Either the entire transaction success or roll-back.
  * Consistent - no corruption
  * Isolation - run queries concurrently
  * Durable - persistent

## Non-relational Database

* NoSQL db are more flexible. 
* Data is stored inside key value pairs, ideal for Caching, env variables, config files etc.
* Base describes features that a good noSQL database must support
  * Basically available - guarantee of availability
  * Soft state - system may change over time, even without input
  * Eventual Consistency -  System will become consistent over a period of time.

## Database Indexing

* Indexing ensures that specific searches are improved. E.g 120 m records, indexed upon age.
* Available for both Sql and noSql DB

## Replication and Sharding

* Replication means making copies of the DB to ensure redundancy and therefore - high availability.
  * Can be done sync oder asynchronously
* Sharding: If DB is to big for replications, it can be chunked into shards. Breaks huge DB into smaller DB.

# 9 Leader Election

* In some cases a single point of contact (primary server) is needed for a task like updating a third party API
* A consensus algorithm is needed to make server agree on a leader server.
  * This is typically implemented by using `etcd` which stores key-value pairs with high availability and strong consistency. This is the final source of truth about who is the leader.

# 10 Polling and Streaming 

* Techniques to have data updated.

## Polling

* Have the client check on a server for updated data in intervals of e.g. 5 minutes.
* Due to heavy server load for continuous polling, it is best used in circumstances where small gaps in data updates don't matter.

## Streaming

* Streaming enables live updates through web sockets, a communication protocol that keeps connection live until closed.
* The client is on standby waiting for server to push data without opening/closing connections -> Stream.

# 11 Endpoint Protection

* Rata limiting is done to protect the endpoint and mitigate denial of service attacks (DOS).
* Example is rate limiting check via Redis in-memory database so false requests can be denied quickly.

# 12 Messaging & Pub-Sub

* Messaging is important for async tasks, e.g. sending a booking pdf after clicking through UI.

## Publisher / Subscriber Messaging

* Publishers publish a message and subscriber subscribe to a message, e.g. through a "channel".
* Publisher and subscriber are completely decoupled, they don't need to know each other.
* System can offer features like "at least once" delivery. 
* Idempotency: An Operation that has no additional effect if it is called more than once with the same input parameters. E.g. if pay button clicked three times on checkout, still only one checkout.

# 13 Smaller Essentials

## Logging

* Logging is important for analytics, optimization and debugging

## Monitoring

* Which data that is logged needs to be monitored, typically time-series data

## Alerting

* For significant events that were observed during monitoring, you need to be alerted, e.g. latency spikes.
