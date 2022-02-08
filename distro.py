import math
import numpy as np
PDF_RANGE = 0.5413
PDF_DOMAIN = 5

res = {}
n = 100000
for i in range(n):
    x = np.random.uniform(0.0, PDF_DOMAIN)
    u = np.random.uniform(0.0, PDF_RANGE)
    r = 2.0 * math.pow(1.0, (3.0 / 2.0)) * math.pow(math.e, -x)
    PDF = math.pow(x, 2.0) * math.pow(r, 2.0)
    if u < PDF: 
        val = round(x * 10) / 10
        if val in res: res[val] += 1
        else: res[val] = 1

keys = list(res.keys())
keys.sort()
for i in range(len(keys)):
    print(keys[i], res[keys[i]])