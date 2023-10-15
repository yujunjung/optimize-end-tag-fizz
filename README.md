My benchmarks showed an improvement of over 10% in requests/second

## test server

```
$ node test.js
Server running at http://localhost:9080/
```

## baseline

```
❯ oha http://localhost:9080 -z 5s -c 20
Summary:
  Success rate: 100.00%
  Total:        5.0012 secs
  Slowest:      0.2563 secs
  Fastest:      0.0079 secs
  Average:      0.0244 secs
  Requests/sec: 815.2023

  Total data:   142.27 MiB
  Size/request: 35.73 KiB
  Size/sec:     28.45 MiB

Response time histogram:
  0.008 [1]    |
  0.033 [3840] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.058 [223]  |■
  0.082 [3]    |
  0.107 [2]    |
  0.132 [1]    |
  0.157 [2]    |
  0.182 [1]    |
  0.207 [1]    |
  0.231 [1]    |
  0.256 [2]    |
```

## optimized

```
❯ oha http://localhost:9080 -z 5s -c 20
Summary:
  Success rate: 100.00%
  Total:        5.0010 secs
  Slowest:      0.2155 secs
  Fastest:      0.0113 secs
  Average:      0.0219 secs
  Requests/sec: 910.2111

  Total data:   158.85 MiB
  Size/request: 35.73 KiB
  Size/sec:     31.76 MiB

Response time histogram:
  0.011 [1]    |
  0.032 [4302] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.052 [240]  |■
  0.073 [1]    |
  0.093 [1]    |
  0.113 [2]    |
  0.134 [1]    |
  0.154 [0]    |
  0.175 [1]    |
  0.195 [2]    |
  0.215 [1]    |
```
