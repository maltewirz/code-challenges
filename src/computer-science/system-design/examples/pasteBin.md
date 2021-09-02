# Pastebin
Design Pastebin, a website where you can store and share text online for a set period of time.

Note: Bit.ly is a similar service, with the distinction that Pastebin requires storing the paste contents instead of the original unshortened URL.

1. Feature expecations:
  1.1 User can open website and paste data into field
  1.2 User then gets link to share
  1.3 User can open pastes from other users from link.
  * Not included for now: Login/logout/any other functionality
  
  1.5 max 1 Mio. users per month. 50 % login daily on average
  
2. Estimations:
  2.1 throughput: 400k login during lunch between 1-2 pm, 100 connections per second. Equals 75 persons reading per second, 25 writing per second.
  2.2. Latency: 30ms latency for saving and getting pastes. could be more up to 100ms for larger pastes for saving them.
  2.3 Read to Write Ratio: 4:1 
  2.4 Traffic Reads: 500k daily maybe 3 reads, 1.5Mio * 10 kb  = 15 GBs
  2.5 Traffic Writes: 15/ 4 = 3.75 GB 
  2.6. Storage: 3,75 * 30*12 = 1,3 TB
  2.7
  
  
3. Design
 3.1 Availability or Consistency: Chose Availability
 
4. High Level Design 
      User -> DNS for IP
      Webserver -> NoSQL Database 
      Saving a paste: User enters Data, clicks on save
      Backend generates UUID and stores UUID and ensures no duplicates, otherwise new UUID is generated. Paste data as key-value pair in DB. return UUID to user so it can be shared. 
      Requesting a paste: enter UUID received into paste.com/UUID and backend search paste id in DB. When found, insert data into webpage and return to user.
      
      
5. Scaling
  5.0 Loadbalancer
  5.1 Webservers at least 3 to be fault tolerant. Cannot contain any state
  5.2 NOSQL Database: MongoDB with 3 nodes (tbd). 
  5.3 Cache (pull basis), for popular pastes, would use redis.