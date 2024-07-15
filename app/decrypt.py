data:dict =  {"mS9wR2qY7pK7vX5n":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9uwmLpsE8tL8jLs4stDmnus3av4Mus2IsEfm3y2SdUv+tgO0D4f8PQxT+Q4v6Y4i5ezr0IO\/SHc9YNsoo2q1ke6vPmZHO+AIxx6zFjqnpENnV+EJyIV56bklTU9yoNm8LCM5BM6jCxSgqrnyY1Epkl65ugjGCrKcYjUb5K69CG+rToiAFLWLXPp9E64Zpi7494WR7AmxEj0lb2Y\/EMzLe6E23aVZspNbYjN2UYzKX8\/znd+lcCxQc6AzxgF\/jCDMcCSK6YnCiPv\/MG3YiALZT4r5yFUiajyhGOuVwc8L93mlY863TjqrqE5CQBRPUolckaIssbQuM2YfZ+OWOpUafdcVD9Z2MciXEdtZ0itVmToNNfLQebZRGU2+WsfPPgDXo5ehVfutXk+S1uQitSUaY5g==x0HLE6rvuD78fV9Ot3qap1SKHOnPknURh4mCqIKtHB2yXqIsoX4NRT4ckP3sa0Jj",
     "fV3gK5vU7uG6hU5e":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9uwmLpsE8tL8jLs4stDmnus3av4Mus2IsEfm3y2SdUv+tgO0D4f8PQxT+Q4v6Y4i5ezr0IO\/SHc9YNsoo2q1ke6vPmZHO+AIxx6zFjqnpENnV+EJyIV56bklTU9yoNm8LCM5BM6jCxSgqrnyY1Epkl65ugjGCrKcYjUb5K69CG+rToiAFLWLXPp9E64Zpi7494WR7AmxEj0lb2Y\/EMzLe6E23aVZspNbYjN2UYzKX8\/znd+lcCxQc6AzxgF\/jCDMcCSK6YnCiPv\/MG3YiALZT4r5yFUiajyhGOuVwc8L93mlY863TjqrqE5CQBRPUolckaIssbQuM2YfZ+OWOpUafdcVD9Z2MciXEdtZ0itVmToNNfLQebZRGU2+WsfPPgDXozmtbTI35zjbHtuYIacvJnw==x0HLE6rvuD78fV9Ot3qap1SKHOnPknURh4mCqIKtHB2yXqIsoX4NRT4ckP3sa0Jj",
     "oU0dI2lL2tK2dR9f":"","video_id":"498401","category_id":"34263","title":"Mayonaka Punch Episodio 02","sinop":""}

map_chart = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
import math

def doCryptBlock(a, b, c, d, e, j, l, f):
    m = 14
    g = a[b] ^ c[0]
    h = a[b + 1] ^ c[1]
    k = a[b + 2] ^ c[2]
    n = a[b + 3] ^ c[3]
    p = 4
    
    for r in range(1, m):
        q = d[g >> 24] ^ e[(h >> 16) & 255] ^ j[(k >> 8) & 255] ^ l[n & 255] ^ c[p]
        s = d[h >> 24] ^ e[(k >> 16) & 255] ^ j[(n >> 8) & 255] ^ l[g & 255] ^ c[p + 1]
        t = d[k >> 24] ^ e[(n >> 16) & 255] ^ j[(g >> 8) & 255] ^ l[h & 255] ^ c[p + 2]
        n = d[n >> 24] ^ e[(g >> 16) & 255] ^ j[(h >> 8) & 255] ^ l[k & 255] ^ c[p + 3]
        g, h, k = q, s, t
        p += 4
    
    q = (f[g >> 24] << 24 | f[(h >> 16) & 255] << 16 | f[(k >> 8) & 255] << 8 | f[n & 255]) ^ c[p]
    s = (f[h >> 24] << 24 | f[(k >> 16) & 255] << 16 | f[(n >> 8) & 255] << 8 | f[g & 255]) ^ c[p + 1]
    t = (f[k >> 24] << 24 | f[(n >> 16) & 255] << 16 | f[(g >> 8) & 255] << 8 | f[h & 255]) ^ c[p + 2]
    n = (f[n >> 24] << 24 | f[(g >> 16) & 255] << 16 | f[(h >> 8) & 255] << 8 | f[k & 255]) ^ c[p + 3]
    
    a[b] = q
    a[b + 1] = s
    a[b + 2] = t
    a[b + 3] = n


def invKeySchedule():pass



def decryptBlock(a,c):
    d = a[c + 1]
    a[c + 1] = a[c + 3]
    a[c + 3] = d
    doCryptBlock(a, c, invKeySchedule, b, x, q, n, s)
    d = a[c + 1]
    a[c + 1] = a[c + 3]
    a[c + 3] = d

def doProcessBlock(e,a):
    d = e[a, a + 4]


def process(data):
    
    _minBufferSize=1
    c = data
    e = c["words"]
    j = c["sigBytes"]
    k =4
    b = j / (4 * k)
    b = math.ceil(b) if a else max((int(b) - _minBufferSize), 0)
    
    a = b * k
    j = min(4 * a, j)
    
    if a:
        for q in range(0, a, k):
            doProcessBlock(e, q)
        
        q = e[:a]
        del e[:a]
        c["sigBytes"] = c["sigBytes"]- j
    
    return q,j



def decode(d:str)->dict:
    l = len(d)
    s = map_chart
    t = s[64] if len(s) > 64 else '='  # Usar '=' como caractere de padding padrão
    
    if t:
        t_index = d.find(t)
        if t_index != -1:
            l = t_index
    
    t = []
    r = 0
    for w in range(l):
        if w % 4:
            try:
                v = s.index(d[w - 1]) << 2 * (w % 4)
                b = s.index(d[w]) >> (6 - 2 * (w % 4))
            except ValueError:
                continue  
            
            if len(t) <= (r >> 2):
                t.append(0)
                
            t[r >> 2] |= (v | b) << (24 - 8 * (r % 4))
            r += 1
        
    if (1398893684 == t[0] and 1701076831 == t[1]):
        c = s.create(b[2,4])
        b = b[4:]
        r -= 16

    return {"ciphertext":{"words":t,"sigBytes": r},"salt":c}
    

def parse(a):
    c = len(a)
    e = [0] * ((c + 3) // 4)
    
    for j in range(c):
        e[j >> 2] |= (ord(a[j]) & 255) << (24 - 8 * (j % 4))
    
    return{"words":e,"sigBytes":c}
    
def validate_iv(iv):
    return '' if iv== '' else validate_iv(iv[1:]) + iv[0]


config = {"words":[   1884436332, 1295477057, 929846578, 1867920227, 1144552015,
                      878792752, 1917597540, 1211458376,],"sigBytes":32}

jwt = data["mS9wR2qY7pK7vX5n"]

iv = parse(validate_iv(jwt[-64:]))
first = decode(jwt[36:-64])


print(first)
print(iv)
