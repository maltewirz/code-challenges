# System Design Shopify

## 1. Keywords

* Customers
* Products
* Orders
* Payment Methods
* Shop owners
* Isolation
* Plugins
* Storefront vs Backend Api

## 2. Key features

* Automated storefront creation
* Backend
* Hosting / Networking

## 3 High Level Design

* Browser
* -> Shopify Website
* -> Store Orchestrator
  * -> Control Layer, exposed to Website
  * -> DB: Shopify Customers, Subcriptions, Themes

|-------
|Cust1  Cust2 Template
|-------

    Template: Creation Process

    * APIs (public)
    * EC2 instance
    * DB: Tables for Cust, Products, Orders
    * Healthcheck, e.g. Lambda

## 4 Pros and cons of this design

* Pro: Isolation
* Pro: On premise
* Pro: Resiliency
* Con: Maintenance
* Con: Cost

# 5 Hosting

* Create cmd
* -> Store orchestrator
  * -> DNS
  * -> Proxy
  * -> Frontend Cust1 Shopify  |  Frontend Cust2 Self-hosted -> API
  * -> API with Roles and Auth
    --- Cust1     --Cust2
    * EC2           * EC2
    * DB            * DB
    * HealthCheck   * Healthcheck
  * Monitoring Healthchecks
    * every 5 sec sends Heartbeat
    * Health check goes both ways
