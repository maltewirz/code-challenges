# System Design Checklist

## Feature expectations 5min

* Use Cases
* Scenarios that will not be covered
* Who will use
* How many will use
* Usage patterns

## Estimations

* Throughput (Queries per second for read/write)
* Latency expected from the system (read/write queries)
* Read / Write Ratio
* Traffic estimates (read/write volume)
* Storage estimates
* Memory estimates
  * If we are using cache, what kind of data?
  * How much RAM and machines for that to achieve?

## Design goals

* Latency and Throughput requirements
* Consistency vs Availability
  * weak, eventual, strong Consistency
  * failover / replication for Availability

## High Level Design

* APIs for Read/Write Scenarios for crucial components
* Database schema
* Basic algorithm
* High level design for read/write scenario

## Deep Dive

* Scaling the algorithm
* Scaling individual components: Availability / Consistency
* Adding components:
  * DNS
  * CDN (Push vs Pull)
  * Load Balancers (active-passive, active-active, L4, L7)
  * Reverse Proxy
  * Application layer scaling (Microservices, Service Discovery)
  * DB
    * RDBMS: Master-slave, master-master, federation, sharding, denormalization, sql tuning
    * NoSQL: Key-value, Wide-Column, Graph, Document
      * RAM: Redis, Memcached
      * AP (Availability, Parition): Cassandra
      * CP (Consistency, Partition): MongoDB, DynamoDB
  
  * Caches
    * Caching on Client, CDN, Webserver, DB, App, Query, Object
    * Eviction Policy: cache aside, write through, write behind, refresh ahead
  * Asynchronism
    * Message queues, Task queues, Back pressure
  * Communication
    * TCP, UDP, REST, RPC

## Justify

* Throughput of each layer
* Latency caused between each layer
* Overall latency justification
