import math
import numpy as np
PDF_RANGE = 0.5413
PDF_DOMAIN = 5

x = 0.1
while True:
    r = 2.0 * math.pow(1.0, (3.0 / 2.0)) * math.pow(math.e, -x)
    PDF = math.pow(x, 2.0) * math.pow(r, 2.0)
    print(round(x,2), round(PDF,2))
    x += 0.1
    if x > 5: break