Notes from https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones

# Scalability

## Clones a.k.a horizontal scaling

* Every Server contains same codebase and does not store user-data like sessions.
* Sessions need to be store in a centralized data store which is accessible to app servers, e.g. in redis.
* Typically the bottleneck now is the DB.

## Database

* Pattern A to keep SQL running: Do master-slave replication (read from slaves, write to master). If more performance needed: sharding, denormalization (adding redundant data to avoid joins), sql-tuning (each more time-consuming)
* Pattern B: Denormalize from beginning and include no more joins in any database query. Use SQL as NoSQL DB or switch to MongoDB. Joins are now done in app code.
* Typically the bottleneck now is the missing cache.

## Cache

* Solutions are Memcached or Redis. First data request always go to cache, then to db.
* Pattern A: Cached Database Queries. For every query, hash it and store hash and result in cache. Issues with that is expiration.
* Pattern B: Cached Objects. Let your class assemble a dataset from database and then store complete instance in cache. E.g. class called Product with "data" property which depends on queries. Upon changes, just replace complete object in cache. Suitable for user sessions, activity steams, etc.

## Asynchronism

* Pattern A: Preprocessing e.g. of dynamic websites and offloading them to CDN.
* Pattern B: User starts compute intensive task. Task has to be queued. Tool for this is RabbitMQ.
