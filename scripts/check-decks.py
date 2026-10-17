#!/usr/bin/env python3
"""Check that every asset a pitch deck uses exists (locally) and loads (live).
Usage: python3 scripts/check-decks.py          # local files only
       python3 scripts/check-decks.py --live   # also fetch every asset from the live site
Exits with code 1 if anything is missing, so deploy.sh stops before publishing a broken deck."""
import os, re, sys, urllib.request, urllib.parse
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://omoniyiux.vercel.app'
DECKS = ['fairmoney', 'palmpay', 'watu']
PAGES = ['index.html', 'proto.html', 'system.html', 'onepager.html']
REF = re.compile(r'''(?:src|poster|href)\s*=\s*["']([^"'#]+)["']|url\(\s*["']?([^"')]+)["']?\s*\)''')
EXT = ('.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.mp4', '.webm', '.pdf', '.css', '.js', '.html')
ignore = [l.strip().rstrip('/') for l in open(os.path.join(ROOT, '.vercelignore')) if l.strip()] if os.path.exists(os.path.join(ROOT, '.vercelignore')) else []

def ignored(rel):
    import fnmatch
    return any(fnmatch.fnmatch(rel, p) or rel.startswith(p + '/') for p in ignore)

def refs(page_path):
    s = open(page_path, encoding='utf-8').read()
    out = set()
    for a, b in REF.findall(s):
        r = (a or b).strip()
        if not r or r.startswith(('data:', 'mailto:', 'tel:', 'javascript:', '${')) or '${' in r: continue
        path = urllib.parse.urlparse(r).path
        if r.startswith('http') and not r.startswith(SITE): continue
        if not path.lower().endswith(EXT): continue
        out.add(r)
    return out

bad = 0; checked = 0
live = '--live' in sys.argv
for d in DECKS:
    for pg in PAGES:
        p = os.path.join(ROOT, d, pg)
        if not os.path.exists(p): continue
        for r in sorted(refs(p)):
            if r.startswith(SITE): rel = urllib.parse.urlparse(r).path.lstrip('/')
            elif r.startswith('/'): rel = r.lstrip('/')
            else: rel = os.path.normpath(os.path.join(d, urllib.parse.urlparse(r).path))
            checked += 1
            if not os.path.exists(os.path.join(ROOT, rel)):
                print(f'MISSING FILE  {d}/{pg} -> {r}'); bad += 1; continue
            if ignored(rel):
                print(f'BLOCKED BY .vercelignore  {d}/{pg} -> {r}'); bad += 1; continue
            if live:
                url = f'{SITE}/{rel}'
                try:
                    req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'deck-check'})
                    code = urllib.request.urlopen(req, timeout=30).status
                except Exception as e:
                    code = getattr(e, 'code', str(e))
                if code != 200:
                    print(f'NOT LIVE ({code})  {url}'); bad += 1
print(f'{checked} assets checked, {bad} problems' + (' (live)' if live else ''))
sys.exit(1 if bad else 0)
