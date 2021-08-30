# System Design Checklist

## 1 Feature scope and constraints

* Use Cases
* Scenarios that will not be covered
* Who will use
* How many will use
* Usage patterns

## 2 Estimations

* Throughput (Queries per second for read/write)
* Latency expected from the system (read/write queries)
* Read / Write Ratio
* Traffic estimates (read/write volume)
* Storage estimates
* Memory estimates
  * If we are using cache, what kind of data?
  * How much RAM and machines for that to achieve?

## 3 High Level Design

* Consistency vs Availability
  * weak, eventual, strong Consistency
  * failover / replication for Availability
* APIs for Read/Write Scenarios for crucial components
* Database System and Schema
* Basic algorithm
* High level design for read/write scenario

## 4 Design and scale core components

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
      * AP (Availability, Partition): Cassandra
      * CP (Consistency, Partition): MongoDB, DynamoDB
  
  * Caches
    * Caching on Client, CDN, Webserver, DB, App, Query, Object
    * Eviction Policy: LRU, LFU, FIFO
  * Asynchronism
    * Message queues, Task queues, Back pressure
  * Communication
    * TCP, UDP, REST, RPC

## 5 Justify

* Throughput of each layer
* Latency caused between each layer
* Overall latency justification
