## baseline

11% requests/sec increase in hacker news test

```
$ oha http://localhost:9080 -z 5s -c 20
Summary:
  Success rate: 100.00%
  Total:        5.0011 secs
  Slowest:      0.2927 secs
  Fastest:      0.0045 secs
  Average:      0.0244 secs
  Requests/sec: 817.2183

  Total data:   142.64 MiB
  Size/request: 35.74 KiB
  Size/sec:     28.52 MiB

Response time histogram:
  0.004 [1]    |
  0.033 [3859] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.062 [212]  |■
  0.091 [3]    |
  0.120 [2]    |
  0.149 [2]    |
  0.177 [2]    |
  0.206 [1]    |
  0.235 [2]    |
  0.264 [1]    |
  0.293 [2]    |
```

## optimized

```
$ oha http://localhost:9080 -z 5s -c 20
Summary:
  Success rate: 100.00%
  Total:        5.0009 secs
  Slowest:      0.2028 secs
  Fastest:      0.0022 secs
  Average:      0.0219 secs
  Requests/sec: 913.0358

  Total data:   159.35 MiB
  Size/request: 35.74 KiB
  Size/sec:     31.86 MiB

Response time histogram:
  0.002 [1]    |
  0.022 [3483] |■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  0.042 [1015] |■■■■■■■■■
  0.062 [57]   |
  0.082 [2]    |
  0.103 [2]    |
  0.123 [1]    |
  0.143 [1]    |
  0.163 [1]    |
  0.183 [1]    |
  0.203 [2]    |
```
