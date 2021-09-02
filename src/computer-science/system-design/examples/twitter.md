# System Design:  Twitter

## 1. Feature scope

* use Case: twitter timeline, search, post tweet with pics but no video.
* How many users: 10 Mio users daily, 1 Mio concurrent users.
* Usage pattern: User logs in, posts tweet, reads timeline, searches hashtag.
* posts 1 tweet and reads 10

## 2. Back-of-the-envelope calculations

* IO throughput:
    1 M write ops/s
    10 Mio read ops/s
* Latency requirment:
    30ms for read requests
    100ms for write requests
* Read Write Ratio: 10:1
* Traffic estimates:
    write: 1Mio * 1MB  = 1MIo Mb = 1 TB
    read: 10 TB

## 3. High Level Design

MVP:

 User -> DNS -> EC2 Instance (Server) -> Sign up and store user in DB -> write tweet and store in db -> looks at timeline
 
DB Schema:

USER TABLE (id (auto-incrementing), email, hashed password)

Tweet Table (userId, tweetId, text, date)

API Design:

* POST /addLogin: checks if user  is already in DB, add user and assign session or jwt token
* GET /checkLogin: checks if user there and if yes, assign session or jwt token
* POST /saveTweet: takes userID and saves in DB
* GET /timeline: looks up which users the current user follows and fetches the last 20 tweets.

Basic algorithm:
* Check followed users for their followers and recommend the ones with similar interestets to user. (recommendation engine)

Second Iteration:

User -> DNS -> Loadbalancer -> Server Farm, all servers are stateless

-> read requests are checked if inside Cache or CDN -> loadbalancer -> DB -> return content

-> write requests are going to load balancer -> DB

Third iteration:

* Same as above on second, but with the following added:

* Add NoSQL database for metadata about tweets.

* Segment Monolith into Microserver Architecture, e.g. timeline service that precomputes timelines and stores in cache.
