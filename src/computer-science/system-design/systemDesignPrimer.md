Review Materials:
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
* SQL vs NoSQL = ACID vs BASE
  * ACID describes features that a good relational database must support
    * Atomic - Either the entire transaction success or roll-back.
    * Consistent - no corruption
    * Isolation - run queries concurrently
    * Durable - persistent
  * BASE describes features that a good noSQL database must support
    * Basically available - guarantee of availability
    * Soft state - system may change over time, even without input
    * Eventual Consistency -  System will become consistent over a period of time.
* Federation DB
  * Federation splits up DB by function, e.g. users, products. Enables parallel writing.
  * Disadvantage: Not effective if huge functions or tables are required, adds complexity.
* Sharding DB
  * Sharding enables storing data in different nodes. Consistent hashing enables this by ensuring that every time we scale up or down, we do not have to re-arrange all the keys.
  * e.g. userbase with 2 nodes -> User A-F and User G-Y
  * Like Federation, less traffic, less replication, more cache hits.
  * Disadvantage: Update needed for app logic, complex SQL queries when multiple shards have to be joined.

* Denormalization
  * Improve read performance of DB at expense of write performance by adding redundant data. Also mitigates complex queries when sharding is in place.
  * Disadvantage: Increases complexity for updating data. Might perform worse under heavy write load.

* SQL tuning
  * Tuning by benchmarking DB and identifying bottlenecks of slow queries.
  * Tighten Schema: CHAR instead of VARCHAR, TEXT for large blocks of text.
  * Good indices: Columns that you are querying could be faster with indices.

* Optimistic vs pessimistic locking (Sharepoint vs Google Docs)
  * Optimistic: Only before committing the transaction, you check if the record was updated.
  * Pessimistic: Acquire all locks beforehand, then commit transaction.
* Consistency
  * Strong: You reads are guaranteed to see the latest write (RDBMS)
  * Eventual: Your reads will eventually see the latest write (Email)
  * Weak: Your reads will or will not see the latest write (VoIP)
* Availability
  * Failover Active-passive: Heartbeats sent from active to passive server. If heartbeat interrupted, passive server takes over. Potential data loss in between missed heartbeat and take-over.
  * Failover Active-active: Both servers are managing traffic and spread traffic.
  * Replication Master-slave: Master serves reads and writes, replicating writes to slaves, slaves serve read only. Slave can become master with additional logic.
  * Replication Master-Master: Both master serve reads and writes and replicate between each other. Increased latency for sync OR loosely consistent.
    * Replication issues:
    * More slaves, more replication lag
    * Data loss if master fails before replication
  * Availability uptime numbers. Calculation depends if systems are in parallel or in sequence (two available system with 99.9% result in 99.9999% availability)
    * 99.9 %    8h per year
    * 99.99 %   1h per year
    * 99.999 %  5m per year
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
  * DNS server have Records for NameServer (NS), MailExchange (MX), IP, CanonicalName (CNAME) example -> www.example.com
  * Managed DNS Services can route traffic with Weighted Round Robin, Latency-based, Geolocation-based.
  * DNS disadvantages: Slight delay, complex.
* HTTPS & TLS
* Public Key Infrastructure & Certificate Authority
* Symmetric vs asymetric encryption - Symmetric is fast (AES), asymmetric is great for exchanging (Pub/Sec)
* Reverse Proxy
  * Web server that centralizes internal services and acts a single node for internet <-> intranet. If more then one web server is behind proxy, deploy Loadbalancer instead.
  * Increases security by obscuring infrastructure.
  * Scalability: Clients only see proxy IP, infrastructure can scale seamlessly.
  * SSL Termination
* Load Balancer -> L4 vs L7
  * General Load Balancer: Prevent requests going to unhealthy servers, prevent overloading resources help eliminate single point of failure. Enable also SSL terminations and session persistence.
  * Disadvantage Load Balancer: Can become bottleneck or single point of failure.
  * L4: Considers both client and destination IP addresses and port numbers for routing
  * L7: Considers HTTP URI for routing
  * Horizontal Scaling: Scaling commodity machines is cheaper than vertical scaling on specialized enterprise systems.
    * Disadvantage Horizontal Scaling: Introduces complexity and involves cloning servers. Servers have to be stateless and sessions stored in centralized data store.
* CDN & Edge
  * CDN: delivering eg. media. Can be push or pull.
  * Disadvantage CDN: Costs can be significant, Content could be stale, determined by time-to-live (TTL).
  * Edge: Internet of things use case, brings computation and storage closer to source of data
* Bloom filter & count-min sketch: Space efficient probabilistic based data structures
  * Bloom filter: can have false positives but no false negatives.
  * Count-min sketch: frequency table of events in stream of data
* Paxos and etcd - Consensus over distributed hosts e.g. leader election
* Virtual machines & containers
* Publisher-Subscriber over Queue
  * Publisher publish message to a queue
  * Subscriber receives that message from that queue
  * Do not use for customer facing requests
* Map reduce. Map is filtering the data and reduce is summarizing the data
* Multi-threading, concurrency, locks, synchronization, CAS
* Application layer:
  * Separating web layer from application layer helps scale - single responsibility principle.
  * Microservices: Suite of indecently deployable, small, modular services. (e.g. Photo Upload, Search feature etc.)
    * Disadvantage Microservice: adds complexity when deploying and operating.
  * Service Discovery: Using tools like Consul, Etcd can find services by keeping track of names, addresses and ports. Can also store key:value for config values.

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
* Zookeeper
  * Centralized configuration management tool, e.g. leader election
* Kafka
  * Fault tolerant highly available queue using publisher subscriber or streaming application
* NGINX and HAProxy
  * Can be used as load balancer to manager thousands of connections
* Solr and ElasticSearch
  * Search platform on top of lucene.
* Blobstore like Amazon S3
* Docker
  * Kubernetes & Mesos Container Management Platform
* Hadoop / Spark
  * Big data management systems

* Deployment
  * Definitions:
    * Deployment: All changes that mutate the service
    * Release: All changes that change business logic
    * Blue/Green Deployment: Two instances of system, one serving traffic and another ready. Allows quick switching.
    * Canary Deployment: New version of component is introduced for a small part of the workload to validate that it behaves correctly. Can be used in combination with green/blue deployments
    * Rolling forward: Instead of reverting or undoing a deployment, a change is applied to the service to address a problem that occured after deployment.
    * Synthetic traffic: Artificial traffic that is generated towards a service to exercise flows. Can be done to warm up or test a service.
    * Demotion: Instant routing of all traffic to green system. Backwards compatibility is required.
    * Deployment lifetime: A canary should be promoted or demoted as quickly as possible to reduce service unstable state.
    * Validation: Service metrics like HTTP status code and business metrics like orders placed.
    * Rollback: Different to demotion since only applied when deployment lifecycle are complete.
    * Backwards and forwards compatibility: Needed for blue/green deployments.
      * Forward compatibility: ignore unknown (newly added) properties during JSON deserialization.
      * Backwards compatibility: JSON field renamed, now checking for both namings.
    * Database schema ownership: To have backwards-compatible db schemas, each db owned and accessed by only one service.
    * Breaking changes to data schemas, e.g. renaming a column in RDBMS. Major breaking should be rare, instead rather add new column. In case of failure, often easier to roll forward.
  

  * Goal: Deploy with confidence via
    * Canary Deployments
    * Faster Rollbacks
    * Increased Monitoring
  * Deployment KPIs
    * Service Lebel Objective (SLO): Service performance measurement. Measured by centralized metrics platform.
    * Mean time to Resolution (MTTR): Time between failure and resolution.
  * Best practises:
    * Automated, with minimal human manual gates
    * Green/blue deployment for fast traffic shifting
    * Canary Deployment with traffic control
    * Minimize changes in each deployment to ease failure analysis.
    * All changes use this process
    * Seperate deployment from release if possible. (A/B testing)
  * Phases of deployment:
    * Blue deployment: No traffic yet, just deployment test.
    * -> Pre-validation: Validation of blue system with smoke test/synthetic traffic.
    * -> Canary Traffic: Some live traffic from green system to blue.
    * -> Canary Validation: Validation of traffic on blue system for 3-4 hours with monitoring
    * -> Promotion: Continue deployment
    * -> Gradual Rollout: Gradual shift from green to blue with monitoring
    * -> Post-validation: Monitoring
    * -> Termination: Transfer complete

  
## Benefits from automation

* Traceability: Audit trails
* Predictability: Reducing human error
* Maintainability: Build and deploy as version controlled script.

* Jenkins as tool:
  * Start Jenkins pipeline by listening for Git commits
  * Go/NoGo Step allows PM control over final release
  * Tells App Center to compile and package (includes iOS)
  * Tells Browserstack to run integration tests
  * Tells App Center to distribute our Apple/Google




## Monitoring

* Tools: Prometheus + Grafana
* Metrics to monitor:
  * Inbound/Outbound request time and response code for every service
  * Memory usage, CPU usage, uptime
  * General health + dependencies
  * Synthetic page load data

## Monolith vs Microservice

* Microservices
  * Pros
    * Isolation of crashes
    * Isolation for security: Vulnerability in image upload for avatar does not affect authentication system
    * Independent Scaling
    * Development Speed due to isolated code bases
  * Cons
    * Different types of complexity, e.g. debugging, integration test
    * API Control is critical due to dependency
    * Infrastructure tends to be bigger

## Security

### Most important

* Encrypt in transit and at rest
* Sanitize all user inputs to prevent XSS or SQL injection
* Principle of least privilege

### Authentication

* Use JWT or OAuth (e.g. okta)
* Use standards and max retry
* Encrypt data

* JWT
  * Use a random complicated key for JWT secret
  * Use short TTL
  * Don't store sensitive data in JWT

* Access
  * Limit Requests to mitigate DOS
  * HTTPS
  * Use HSTS to avoid SSL strip
  * private IPs: whitelisting IPs

* Input
  * Validate and sanitize input
  * Use authorization header for sensitive data
  
* Processing
  * Don't auto-increment ids, instead UUID
  * Use CDN for file uploads
  * Turn debug mode off

* Output
  * Never return sensitive data
  * return proper status codes

* CI/CD
  * Audit design with unit and integration tests
  * Code Review
  * Rollback solution for deployments