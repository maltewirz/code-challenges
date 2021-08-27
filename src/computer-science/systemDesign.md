Review Materials:

* https://www.freecodecamp.org/news/systems-design-for-interviews/
* https://github.com/donnemartin/system-design-primer

# 0 System Design Primer

## Considerations for System Design

* Features
* API
* Availability
* Latency
* Scalability
* Durability - Persistency
* Class Diagram - how to use Object oriented principles
* Security & Privacy
* Cost-effective

## Concepts

* Vertical vs Horizontal Scaling
* CAP Theorem: Choose between C and A during  network failure.
  * Consistency: Every read receives the most recent write or an error
  * Availability: Every request receives a response, without the guarantee that it contains the most recent write.
  * Partition tolerance: The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.
  * *Example* : SQL DB choose Consistency over Availability, while NoSQL DB chose Availability over Consistency.
* ACID vs BASE == SQL vs NoSQL
  * ACID describes features that a good relational database must support
    * Atomic - Either the entire transaction success or roll-back.
    * Consistent - no corruption
    * Isolation - run queries concurrently
    * Durable - persistent
  * BASE describes features that a good noSQL database must support
    * Basically available - guarantee of availability
    * Soft state - system may change over time, even without input
    * Eventual Consistency -  System will become consistent over a period of time.
* Partitioning / Sharding Data
  * Sharding enables storing data in different nodes. Consistent hashing enables this by ensuring that every time we scale up or down, we do not have to re-arrange all the keys.
* Optimistic vs pessimistic locking (Sharepoint vs Google Docs)
  * Optimistic: Only before commiting the transaction, you check if the record was updated.
  * Pessimistic: Acquire all locks beforehand, then commit transaction.
* Strong vs eventual consistency
  * Strong: You reads are guaranteed to see the latest write
  * Eventual: Your reads will eventually see the latest write
* SQL vs NoSQL
  * SQL: provides ACID properties
  * NoSQL: scales better and higher availability
* Types of NoSQL
  * key value
  * wide column: our row can have many different formats and columns
  * document based: for semi structured data
  * graph based
* Caching: Speed up your request. 
  * Cache can be for every node or shared among. 
  * Cache cannot be source of truth. 
  * Caches are pretty small since they usually keep in memory and are evicted.
* Data center / racks / hosts: Understand basic DC architecture.
* CPU / Memory / Hard Drive / Network Bandwidth. 
  * How to work with limited resources
  * Random vs sequential r/w on disk
* http vs http2 vs websockets
  * http: entire web runs on http - request / response
  * Http2: some improvements like multiple requests on singular connection
  * websockets: fully bi-directional connection between client and server
* TCP / IP Model
  * Application
  * Transport
  * Internet
  * Link
* IPv4 vs IPv6: 32bit vs 128bit
* TCP vs UDP
  * TCP reliable e.g. Documents
  * UDP unreliable e.g. Video
* DNS lookup
* HTTPS & TLS
* Public Key Infrastructure & Certificate Authority
* Symmetric vs asymetric encryption - Symetric is fast (AES), asymetric is great for exchanging (Pub/Sec)
* Load Balancer -> L4 vs L7
  * L4: Considers both client and destination IP addresses and port numbers for routing
  * L7: Considers HTTP URI for routing
* CDN & Edge 
  * CDN: delivering eg. media
  * Edge: Internet of things use case, brings computation and storage closer to source of data
* Bloom filter & count-min sketch: Space efficient probabilistic based data structures
  * Bloom filter: can have false positives but no false negatives.
  * Count-min sketch: frequency table of events in stream of data
* Paxos and etcd - Consensurs over distributed hosts e.g. leader election
* Virtual machines & containers
* Publisher-Subcriber over Queue
  * Publisher publish message to a queue
  * Subscriber receives that message from that queue
  * Do not use for customer facing requests
* Map reduce. Map is filtering the data and reduce is summarizing the data
* Multi-threading, concurrency, locks, synchronization, CAS

## Tools

* Cassandra: NoSQL Database
  * Key Value Storage
  * Time Series Data
  * Traditional Rows with many columns
  * Eventual and strong consistency
  * Uses consistent hashing to shard the data
  * Uses gossiping to keep all the nodes informed about the cluster
* MongoDb or Couchbase
  * for persisting JSON like structure
  * Provides ACID properties at document level and scale well
* Mysql
  * Master Slave Architecture for scaling combined with strong ACID principles
* Memcached and Redis
  * Distributed Caches that hold data in memory, can be used in distributed settings for availability
  * Cache can only hold limited amount of data due to memory restrictions
* Zookeper
  * Centralized configuration management tool, e.g. leader election
* Kafka
  * Fault tolerant highle available queue using publisher subscriber or streaming application
* NGINX and HAProxy
  * Can be used as load balancer to manager thousands of connections
* Solr and ElasticSearch
  * Search platform on top of lucene.
* Blobstore like Amazon S3
* Docker
  * Kubernetes & Mesos Container Management Platform
* Hadoop / Spark
  * Big data management systems



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
* BASE describes features that a good noSQL database must support
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







