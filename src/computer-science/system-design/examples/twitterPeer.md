# System Design:  Twitter

## 1. Feature scope

* Tweeting
* Timeline
  * User
  * Home
* Following

DB Schema:

Tweets: id, Content, User (points to User.id, one to many relationship)
User: id, Name

Problem now: to compose timeline for user, the db query will have to go over the huge Tweets Table which does not scale well.

* Twitter is very read-heavy, therefore optimise for reads.

* When user Alice (100 followers) hits send button on tweet:
  * HTTP PUT
  * -> Loadbalancer
  * -> Get Followers of Alice
  * -> Fanning out, store it Redis memory (3 machines with huge RAM) and precompute all timelines of all followers. Since Alice has 100 followers and 3 redundancy: 300 redis instances get updates with her post.
    * Redis Dataschema:  User Bob: Tweet ID, Sender
    * Edge case: Celebs with 50 Mio Followers, updating 50 Mio redis tables too slow. -> Solution: Mixed Approach. celebs will not be integrated into Redis, instead merged with SQL **during** loadtime.

* Bob accesses timeline
  * Browser
  * -> Get request
  * -> Loadbalancer
  * -> Hash Lookup: Ip addresses of 3 redis machines with bobs timeline
  * -> Redis (3 machines), fastest machine answer
  * -> Bobs Timeline