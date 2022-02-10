import math
import numpy as np

def R10():
    DOMAIN,RANGE = 7.69,0.54
    while True:
        x,u = np.random.uniform(0.0, DOMAIN),np.random.uniform(0.0,RANGE)
        r10 = 2 * math.pow(1, (3/2)) * math.pow(math.e, -x)
        p10 = math.pow(x,2) * math.pow(r10,2)
        if u < p10: return round(x * 10) / 10
def R20():
    DOMAIN,RANGE = 19.5,0.191
    while True:
        x,u = np.random.uniform(0.0, DOMAIN),np.random.uniform(0.0,RANGE)
        r20 = math.pow((1/2), (3/2)) * (2-x)  * math.pow(math.e, (-x/2))
        p20 = math.pow(x,2) * math.pow(r20,2)
        if u < p20: return round(x * 10) / 10
def R21():
    DOMAIN,RANGE = 18.37,0.1954
    while True:
        x,u = np.random.uniform(0.0, DOMAIN),np.random.uniform(0.0,RANGE)
        r21 = (1/math.sqrt(3)) * math.pow((1/2), (3/2)) * x * math.pow(math.e, (-x/2))
        p21 = math.pow(x,2) * math.pow(r21,2)
        if u < p21: return round(x * 10) / 10
def R30():
    DOMAIN,RANGE = 35.51,0.1015
    while True:
        x,u = np.random.uniform(0.0, DOMAIN),np.random.uniform(0.0,RANGE)
        r30 = (2/27) * math.pow((1/3), (3/2)) * (27-(18*x)+(2*math.pow(x,2))) * math.pow(math.e, (-x/3))
        p30 = math.pow(x,2) * math.pow(r30,2)
        if u < p30: return round(x * 10) / 10
def R31():
    DOMAIN,RANGE = 34.45,0.1018
    while True:
        x,u = np.random.uniform(0.0, DOMAIN),np.random.uniform(0.0,RANGE)
        r31 = (1/27) * math.pow((2/3), (3/2)) * (x*(6-x)) * math.pow(math.e, (-x/3))
        p31 = math.pow(x,2) * math.pow(r31,2)
        if u < p31: return round(x * 10) / 10
def R32():
    DOMAIN,RANGE = 31.94,0.1071
    while True:
        x,u = np.random.uniform(0.0, DOMAIN),np.random.uniform(0.0,RANGE)
        r32 = (4/(27*math.sqrt(10))) * math.pow((1/3), (3/2)) * math.pow(x,2) * math.pow(math.e, (-x/3))
        p32 = math.pow(x,2) * math.pow(r32,2)
        if u < p32: return round(x * 10) / 10
res = {}
n = 100000
for i in range(n):
    val = R31()
    if val in res: res[val] += 1
    else: res[val] = 1

keys = list(res.keys())
keys.sort()
for i in range(len(keys)):
    print(keys[i], res[keys[i]])