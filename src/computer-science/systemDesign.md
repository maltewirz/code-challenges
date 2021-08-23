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

















