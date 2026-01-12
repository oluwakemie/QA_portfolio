# Performance Test Plan – DummyJSON Products API

## 1. Introduction
This document describes the performance testing strategy for the DummyJSON Products API.
The objective is to evaluate system behavior under expected load and stress conditions
and identify performance bottlenecks.

## 2. Scope
In Scope:
- GET /products endpoint
- Concurrent user load simulation
- Response time and error rate analysis

Out of Scope:
- Third-party integrations
- Security testing

## 3. Test Objectives
- Validate system stability under concurrent access
- Measure average and peak response times
- Identify system breaking points under stress load
- Ensure acceptable error rates under normal usage

## 4. Test Environment
- Tool: Apache JMeter
- Test Type: Load & Stress Testing
- Environment: Public API (DummyJSON)
- Protocol: HTTPS

## 5. Test Scenarios
| Scenario | Users | Ramp-up | Loop |
|-------|------|--------|------|
| Load Test | 100 | 30s | 1 |
| Stress Test | 200 | 60s | 1 |
| Stress Test | 300 | 60s | 1 |
| Stress Test | 500 | 120s | 1 |
| Stress Test | 700 | 120s | 1 |

## 6. Metrics Collected
- Average response time
- Maximum response time
- Throughput (requests/sec)
- Error percentage

## 7. Entry Criteria
- JMeter configured successfully
- API endpoint accessible
- Test data available

## 8. Exit Criteria
- Test execution completed
- HTML performance report generated
- Performance findings documented
